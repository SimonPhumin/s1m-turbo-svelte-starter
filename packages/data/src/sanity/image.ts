import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { client } from '@s1m/data/sanity/client';
import type { ImageSource } from '@s1m/data/types/image.type';

const builder = imageUrlBuilder(client);

export const urlFor = (source: ImageSource, width?: number, height?: number, quality?: number) => {
	const image = 'photo' in source ? source.photo : source;
	let urlBuilder = builder.image(image as SanityImageSource).auto('format');

	if (width) {
		urlBuilder = urlBuilder.width(width);
	}
	if (height) {
		urlBuilder = urlBuilder.height(height);
	}
	if (quality) {
		urlBuilder = urlBuilder.quality(quality);
	}

	return urlBuilder.url();
};

// Helper function for backward compatibility - returns a URL string
export const urlForString = (source: ImageSource) => {
	return urlFor(source);
};
