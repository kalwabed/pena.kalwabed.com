<script lang="ts">
  import { dateFormatter } from '$lib/utils/date';
  import CardPost from '$lib/components/card-post.svelte';
  import type { Post } from '$lib/utils/fetch-data';

  interface Props {
    posts?: Post[];
  }

  let { posts = [] }: Props = $props();
</script>

<section class="mt-6 grid grid-rows-1 gap-6">
  {#each posts as post (post.slug)}
    <CardPost href={`/${post.slug}`} extClass="flex flex-col">
      <h3 class="font-medium font-sans">
        {post.title}
      </h3>
      <p class="c-gray5 dark:c-gray my-.5">{post.desc}</p>
      <time datetime={new Date(post.publishedAt).toDateString()} class="text-sm">{dateFormatter(post.publishedAt)}</time
      >
    </CardPost>
  {/each}
</section>
