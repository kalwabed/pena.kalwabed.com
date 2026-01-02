<script lang="ts">
  import { resolve } from '$app/paths';
  import { fly } from 'svelte/transition';

  interface Props {
    href: string;
    extClass?: string;
    withTransition?: boolean;
    children?: import('svelte').Snippet;
  }

  let { href, extClass = '', withTransition = false, children }: Props = $props();

  const mainClass =
    'outline-none underline-offset-3 inline-flex items-center text-lg w-fit underline dark:[text-decoration-color:#504f57] [text-decoration-color:#c4c4c4] transition-none hover:(no-underline bg-gray-200 dark:bg-plumTen) focus:(ring ring-blue-500 ring-offset-2)';
  const composedClass = `${mainClass} ${() => extClass}`;
</script>

{#if withTransition}
  <a in:fly={{ x: -30 }} href={resolve(href)} class={composedClass}>
    {@render children?.()}
  </a>
{:else}
  <a href={resolve(href)} class={composedClass}>
    {@render children?.()}
  </a>
{/if}
