import type { Image } from '@sanity/types';
import type { PortableTextBlock } from '@portabletext/types';
import type { MetaTagsProps } from 'svelte-meta-tags';

export interface SocialLink {
	platform: string;
	url: string;
	displayTitle: string;
}

export interface Project {
	_id: string;
	_type: 'project';
	slug: {
		current: string;
	};
	firstName: string;
	lastName: string;
	email: string;
	image?: Image;
	description: PortableTextBlock[];
	socialLinks?: SocialLink[];
	meta?: MetaTagsProps;
}
