import groq from 'groq';

export const pageQuery = groq`*[_type == "page" && slug.current == $slug][0]`;
export const projectQuery = groq`*[_type == "project" && slug.current == $slug][0]`;
export const projectsQuery = groq`*[_type == "project" && defined(slug.current)] | order(publishedAt desc)`;
export const shopQuery = groq`*[_type == "shopItem" && defined(slug.current)] | order(publishedAt desc)`;
export const shopItemQuery = groq`*[_type == "shopItem" && slug.current == $slug][0]`;
