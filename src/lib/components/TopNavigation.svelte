<script lang="ts">
  import { page, navigating } from '$app/state';
  import { fly } from 'svelte/transition';

  import Logo from './Logo.svelte';

  let breadcrumbs: { url: string; label: string }[] = $state([]);

  const breadcrumbParser = () => {
    const pathnames = page.url.pathname.replace(/\/$/, '').split('/');

    const breadcrumb = pathnames.map((pathname, index) => {
      const url = pathnames.slice(0, index + 1).join('/');
      const label = pathname.replace('/', '');

      return {
        url: url || '/',
        label: label || 'Pena',
      };
    });

    breadcrumbs = breadcrumb;
    return breadcrumb;
  };

  $effect(() => {
    if (navigating) {
      breadcrumbParser();
    }
  });
</script>

<nav class="max-w-screen-xl mx-auto w-full p-4 flex items-center gap-3">
  <Logo />
  <div class="link inline-flex items-center gap-1">
    {#each breadcrumbs as breadcrumb (breadcrumb.url)}
      <a
        transition:fly={{ x: -10 }}
        href={breadcrumb.url}
        class="outline-none hover:bg-gray-200 focus:(ring ring-offset-2 ring-blue-500) dark:hover:bg-plumTen p-0.5"
      >
        {breadcrumb.label}
      </a>
      {#if breadcrumb.url !== page.url.pathname}
        <span transition:fly={{ x: -10, delay: 400 }} class="text-gray-500">/</span>
      {/if}
    {/each}
  </div>
</nav>
