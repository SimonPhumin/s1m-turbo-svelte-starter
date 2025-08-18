import { pageQuery } from '@s1m/data/sanity/queries';
import type { PageServerLoad } from './$types';
import type { Page } from '@s1m/data/types/page.type';

export const load: PageServerLoad = async (event) => {
	const { loadQuery } = event.locals;
	const initial = await loadQuery<Page>(pageQuery, { slug: 'home' });
	// Pass meta tags to the page
	const pageMetaTags = initial?.data?.meta || {};

	// Use the real title from the backend if available
	if (initial?.data?.title) {
		pageMetaTags.title = initial.data.title;
	}

	return {
		query: pageQuery,
		params: { slug: 'home' },
		options: { initial },
		pageMetaTags
	};
};
