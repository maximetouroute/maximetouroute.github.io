import React from 'react'
import { PhotoGrid } from '../bits/PhotoGrid/PhotoGrid'


const containerCSS: CSSObjet = {
  marginTop: '1rem',
  marginBottom: '1rem'
};

interface OwnProps {
    props: any[]; // Expect Gatsby images array
    indices: number[];
  };

  export function ImageGrid({ props, indices = [] }: OwnProps) {
    // No indices = show all
    const localImages = indices.length === 0
        ? props.map((l) => l.childImageSharp)
        : indices.map((index) => props[index].childImageSharp);
  
    return <div css={containerCSS}><PhotoGrid gatsbyImagesWithThumbs={localImages} /> </div>;
  }
  
  
  