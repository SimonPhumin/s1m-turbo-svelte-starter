import { client } from '@s1m/data/sanity/client';
import { token } from '@s1m/data/sanity/apiServer';

export const serverClient = client.withConfig({
	token,
	useCdn: false,
	stega: true
});
