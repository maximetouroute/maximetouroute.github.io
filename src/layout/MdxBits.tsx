import React from 'react'
import { Link } from 'gatsby'
import { PhotoGrid } from '../bits/PhotoGrid/PhotoGrid'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import GatsbyImageCompare from '../bits/ImageCompare/GatsbyImageCompare'

interface OwnProps {
  image: any
  alt: string
}
export function Image({ image, alt = '' }: OwnProps) {
  return <GatsbyImage alt={alt} image={getImage(image.childImageSharp.full)} />
}

interface MoreOwnProps {
  props: any[]
  indices: number[]
}
export function ImageGrid({ props, indices = [] }: MoreOwnProps) {
  // console.log(props, indices)
  // No indices = show all
  // @ts-ignore
  const localImages =
    indices.length === 0
      ? props.localImages.map((l) => l.childImageSharp)
      : indices.map((index) => props.localImages[index].childImageSharp)
  return <PhotoGrid gatsbyImagesWithThumbs={localImages} />
}

export function ImageCompare({ props, indices = [] }: MoreOwnProps) {
  const left = props.localImages[indices[0]].childImageSharp
  const right = props.localImages[indices[1]].childImageSharp
  return <GatsbyImageCompare left={left} right={right} />
}
// Provide common components here
export const SHORTCODES = {
  Link,
  Image,
  ImageGrid,
  GatsbyImage,
  PhotoGrid,
  ImageCompare,
}
