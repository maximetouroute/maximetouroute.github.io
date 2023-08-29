import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


interface OwnProps {
  image: any; // Gatsby Image
  alt: string;
}
export function MdxImage({ image, alt = '' }: OwnProps) {
  return <div css={{maxWidth: '30rem', margin: 'auto', borderRadius: '100%' }}>
    <GatsbyImage alt={alt} image={getImage(image.childImageSharp.full)} />
    </div>
}