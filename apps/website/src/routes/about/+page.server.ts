import { pageQuery as query } from '@s1m/data/sanity/queries';
import type { Page } from '@s1m/data/types/page.type';
import type { PageServerLoad } from './$types';
import type { MetaTagsProps } from 'svelte-meta-tags';

export const load: PageServerLoad = async ({ locals: { client, preview } }) => {
	const options = { stega: preview ? true : false };

	const params = { slug: 'about' };

	const page = await client.fetch<Page>(query, params, options);
	// Pass meta tags to the page
	const pageMetaTags = (page?.meta as MetaTagsProps) || {};

	// Use the real title from the backend if available
	if (page?.title) {
		pageMetaTags.title = page.title;
	}

	return { page, pageMetaTags };
};
