import React from 'react'
import { CSSObject } from '@emotion/styled';

const containerCSS= (width: number, height: number): CSSObject => {

    return {
        paddingBottom: `${(height/width)*100}%`,
        position: 'relative',
        height: 0,
        overflow: 'hidden'
    }
};

const iframeStyle: CSSObject = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
};


interface OwnProps {
    width: number;
    height: number;
    src: string;
};

export function ResponsiveIframe({width, height, src}: OwnProps) {
    return (<div
    css={containerCSS(width, height)}>
   <iframe style={iframeStyle} height={null} width={null} frameBorder={0}
    allowFullScreen src={src} scrolling={'no'}></iframe>
    </div>);
  }