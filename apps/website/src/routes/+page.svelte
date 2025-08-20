<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader';
	import type { PageData } from './$types';
	import type { Page } from '@s1m/data/types/page.type';

	let { data } = $props<{ data: PageData }>();
	const q = useQuery(data);

	let page = $derived<Page | undefined>($q.data as Page | undefined);
</script>

{#if page}
	<section class="pt-8 pb-12">
		<h1 class="text-4xl font-bold">S1M-Turbo-Svelte-Monorepo</h1>
		<p>
			Wecome to the S1M-Turbo-Svelte-Monorepo. This is a test website to test the monorepo setup.
		</p>
		<!-- Page Body Section -->
	</section>
{/if}
