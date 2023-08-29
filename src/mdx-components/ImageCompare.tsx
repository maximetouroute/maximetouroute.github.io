import React from 'react';
import GatsbyImageCompare from '../bits/ImageCompare/GatsbyImageCompare';


interface OwnProps {
    props: any[]; // Expect gatsby images array
    indices: number[];
}

export function ImageCompare({ props, indices }: OwnProps) {
    const left = props[indices[0]].childImageSharp;
    const right = props[indices[1]].childImageSharp;
    return <GatsbyImageCompare left={left} right={right} />;
  }
  