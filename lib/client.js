import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = new sanityClient({
	projectId: '4944e7vc',
	dataset: 'production',
	apiVersion: '2022-03-10',
	useCdn: true,
	toke: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = source => builder.image(source);
