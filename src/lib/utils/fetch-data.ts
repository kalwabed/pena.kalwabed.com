import matter from 'gray-matter';

export interface Post {
  title: string;
  publishedAt: string;
  desc: string;
  updatedAt: string;
  tags: string[];
  layout?: string;
  slug: string;
}

export const POSTS = import.meta.glob<string>('/src/routes/**/+page.svx', {
  query: '?raw',
  import: 'default',
});

export function slugTransformer(folderName: string): string {
  return folderName.replace('/src/routes/', '').replace('/+page.svx', '');
}

export function generateFileMetadata(files: Record<string, () => Promise<string>>): Promise<Post>[] {
  return Object.keys(files).map(async (folderName): Promise<Post> => {
    const postContent = (await files[folderName]()) as string;

    const { data } = matter(postContent);
    const slug = slugTransformer(folderName);

    return {
      ...(data as Post),
      slug,
    };
  });
}

export async function getResourcesAsync(): Promise<Post[]> {
  const fileMetadata = generateFileMetadata(POSTS);
  const result = await Promise.all(fileMetadata);

  return result.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}
