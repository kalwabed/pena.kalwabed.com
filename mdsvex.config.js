import { defineMDSveXConfig } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolink from 'rehype-autolink-headings';
import { join } from 'node:path';
import { cwd } from 'node:process';

const rootLayout = join(cwd(), './src/lib/components/layouts/post.svelte');

export default defineMDSveXConfig({
  extensions: ['.svx'],
  layout: {
    _: rootLayout,
  },
  smartypants: {
    dashes: 'oldschool',
  },
  rehypePlugins: [rehypeSlug, [rehypeAutolink, { behavior: 'wrap' }]],
});
