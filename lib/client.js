import sanityClient from '@sanity/client'
import imgUrlBuilder from '@sanity/image-url'
//const sanityClient = require('@sanity/client')
//const imgUrlBuilder = require('@sanity/image-url')

export const client = sanityClient({
	projectId: '9mjrvlfm',
	dataset: 'production',
	apiVersion: '2022-03-10',
	useCdn: true,
	token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = imgUrlBuilder(client)

export const urlFor = (source) => builder.image(source)