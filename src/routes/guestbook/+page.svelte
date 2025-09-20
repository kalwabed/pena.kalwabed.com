<script lang="ts">
  import Seo from '$lib/components/SEO.svelte';
  import { dateFormatter } from '$lib/utils/date';
  import type { PageServerData } from './$types';

  import GuestbookForm from './guestbook-form.svelte';

  interface Props {
    data: PageServerData;
  }

  let { data }: Props = $props();

  let guestBook = $derived(
    data?.guests?.map(guest => {
      return {
        ...guest,
        date: dateFormatter(guest.created_at, { hour: '2-digit', minute: '2-digit' }),
      };
    })
  );
</script>

<Seo title="Buku Tamu" />

<h1 class="text-4xl font-bold leading-relaxed">👤 Buku Tamu</h1>
<p class="text-gray-500 dark:text-mauveEleven">
  Tinggalkan komentar di bawah. Bisa berupa apa saja -- apresiasi, informasi, harapan, atau bahkan lelucon.
</p>

<GuestbookForm />

<div class="grid grid-rows-1 gap-8">
  {#if guestBook.length === 0}
    <div class="w-full md:w-3/4 text-center bg-gray-50 dark:bg-mauveThree rounded-lg shadow p-4">
      <p class="font-semibold">Memuat...</p>
    </div>
  {/if}

  {#each guestBook as guest (guest.id)}
    <div class="flex flex-col max-w-3xl">
      <p>{guest.body}</p>
      <div class="inline-flex space-x-2 text-gray-500 dark:text-mauveEleven">
        <p>{guest.name}</p>
        <span class="text-gray-300 dark:text-mauveSix">/</span>
        <p>
          {guest.date}
        </p>
      </div>
    </div>
  {/each}
</div>
