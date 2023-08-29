import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


interface OwnProps {
  image: any; // Gatsby Image
  alt: string;
}
export function MdxImage({ image, alt = '' }: OwnProps) {
  return <GatsbyImage alt={alt} image={getImage(image.childImageSharp.full)} />
}