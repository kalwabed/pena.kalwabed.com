<script lang="ts">
  import type { PageServerData } from './$types';

  import Seo from '$lib/components/SEO.svelte';

  interface Props {
    data: PageServerData;
  }

  let { data }: Props = $props();
  const { stats } = data;
</script>

<Seo title="Stats" />

<h1 class="text-4xl font-bold leading-loose">Pantau Lalu Lintas</h1>

<table class="table-auto max-w-3xl">
  <thead class="border-2">
    <tr class="text-left">
      <th>Slug</th>
      <th class="border-l-2">Visitor</th>
    </tr>
  </thead>
  <tbody>
    {#each stats as stat (stat.slug)}
      <tr class="border">
        <td>{stat.slug}</td>
        <td class="border-l">{stat.counter}</td>
      </tr>
    {/each}
  </tbody>
</table>

<em class="mb-12 mt-2 text-yellow-800">
  Terakhir update: {new Intl.DateTimeFormat('id', { dateStyle: 'medium', timeStyle: 'long' }).format(new Date())}
</em>

<style>
  th,
  td {
    padding: 0.5rem;
  }
</style>
