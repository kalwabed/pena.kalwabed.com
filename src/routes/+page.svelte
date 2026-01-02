<script lang="ts">
  import type { PageData } from './$types';
  import Divider from '$lib/components/Divider.svelte';
  import PostList from '$lib/components/PostList.svelte';
  import Seo from '$lib/components/SEO.svelte';
  import Logo from '$lib/components/Logo.svelte';
  import { resolve } from '$app/paths';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
  const { posts } = data;
</script>

<Seo title="home" />

<Logo width={50} height={50} />

<section class="mt-12 text-xl md:text-2xl">
  <h1 class="inline-flex font-semibold">Hai! Saya Kalwabed.</h1>
  <br />
  <small class="dark:text-mauveEleven text-gray-600"> Suka membaca dan terkadang menulis hal-hal yang random. </small>
</section>

<a
  class="mt-8 mb-16 font-semibold text-blue-700 bg-gray-200 border hover:(border-gray-200 bg-gray-300) dark:(bg-plumFour text-plumEleven border-plumSeven) hover:dark:(bg-plumFive border-plumEight) focus:dark:bg-plumSeven py-1 px-2 rounded-sm w-fit transition"
  href={resolve('/guestbook')}>👤 Buku tamu</a
>

<Divider />

<h2 id="tulisan" class="text-3xl font-bold mt-16 leading-relaxed">🌅 Tulisan</h2>

<PostList {posts} />
