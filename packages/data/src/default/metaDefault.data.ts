import type { MetaTagsProps } from 'svelte-meta-tags';

export const defaultMetaTags = (url: { pathname: string; origin: string }) =>
	Object.freeze({
		title: 'Page',
		titleTemplate: '%s — S1M-Turbo-Svelte-Monorepo',
		description: 'S1M-Turbo-Svelte-Monorepo',
		canonical: new URL(url.pathname, url.origin).href,
		keywords: ['keyword1', 'keyword2', 'keyword3'],
		openGraph: {
			type: 'website',
			url: new URL(url.pathname, url.origin).href,
			locale: 'en_US',
			title: 'S1M-Turbo-Svelte-Monorepo',
			description: 'S1M-Turbo-Svelte-Monorepo',
			siteName: 'S1M-Turbo-Svelte-Monorepo',
			images: [
				{
					url: 'https://mega-img-url.com',
					alt: 'S1M-Turbo-Svelte-Monorepo Logo',
					width: 1200,
					height: 630,
					secureUrl: 'https://mega-img-url.com',
					type: 'image/jpeg'
				}
			]
		},
		twitter: {
			cardType: 'summary_large_image' as const,
			title: 'S1M-Turbo-Svelte-Monorepo',
			description: 'S1M-Turbo-Svelte-Monorepo',
			image: 'https://mega-img-url.com',
			imageAlt: 'S1M-Turbo-Svelte-Monorepo Logo'
		}
	}) satisfies MetaTagsProps;
