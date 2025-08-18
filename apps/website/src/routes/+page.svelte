<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader';
	import type { PageData } from './$types';
	import type { Page } from '@s1m/data/types/page.type';

	let { data } = $props<{ data: PageData }>();
	const q = useQuery(data);

	let page = $derived<Page | undefined>($q.data as Page | undefined);
</script>

{#if page}
	<section class="space-y-4">
		<h1 class="sr-only">S1M-Turbo-Svelte-Monorepo</h1>

		<!-- Page Body Section -->
	</section>
{/if}
