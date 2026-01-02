<script lang="ts">
  import { resolve } from '$app/paths';
  import { fly } from 'svelte/transition';

  interface Props {
    href: string;
    extClass?: string;
    children?: import('svelte').Snippet;
  }

  let { href, extClass = '', children }: Props = $props();

  const mainClass =
    'p1 outline-none w-fit transition-none hover:(no-underline bg-gray-100 dark:bg-plumFour) focus:(ring ring-blue-800)';
  const composedClass = `${mainClass} ${() => extClass}`;
</script>

<a in:fly={{ x: -30 }} href={resolve(href)} class={composedClass}>
  {@render children?.()}
</a>
