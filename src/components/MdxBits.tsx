import React from 'react'
import { Link } from 'gatsby'
import { PhotoGrid } from '../bits/PhotoGrid/PhotoGrid'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import GatsbyImageCompare from '../bits/ImageCompare/GatsbyImageCompare'

interface OwnProps {
  image: any; // Gatsby Image
  alt: string;
}
export function MimsImage({ image, alt = '' }: OwnProps) {
  return <GatsbyImage alt={alt} image={getImage(image.childImageSharp.full)} />
}

interface MoreOwnProps {
  props: any[]; // Expect Gatsby images array
  indices: number[];
}
export function ImageGrid({ props, indices = [] }: MoreOwnProps) {
  console.log('coucou', props, indices);
  // No indices = show all
  const localImages = indices.length === 0
      ? props.map((l) => l.childImageSharp)
      : indices.map((index) => props[index].childImageSharp);


  return <PhotoGrid gatsbyImagesWithThumbs={localImages} />;
}

interface ImageCompareProps {
  props: any[]; // Expect gatsby images array
  indices: number[];
}
export function ImageCompare({ props, indices }: ImageCompareProps) {
  const left = props[indices[0]].childImageSharp;
  const right = props[indices[1]].childImageSharp;
  return <GatsbyImageCompare left={left} right={right} />
}


interface OwnPropsAgain {
  width: number;
  height: number;
  src: string;
}
export function ResponsiveIframe({width, height, src}: OwnPropsAgain) {

  return <div
  css={{
    paddingBottom: `${(height/width)*100}%`,
    position: 'relative',
    height: 0,
    overflow: 'hidden'
  }}>
 <iframe style={{position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  
  }} height={null} width={null} frameBorder={0}
  allowFullScreen src={src} scrolling={'no'}></iframe>
  </div>

}

// Provide common components here
export const SHORTCODES = {
  Link,
  MimsImage,
  ImageGrid,
  GatsbyImage,
  PhotoGrid,
  ImageCompare,
  ResponsiveIframe
}
