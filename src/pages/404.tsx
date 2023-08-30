import React from 'react';
import { notFoundPage } from '../locales/strings';
import LayoutRoot from '../bits/Rev/LayoutRoot/LayoutRoot';

export default function NotFoundPage({
  data,
  pageContext: { langCode },
  location,
}) {
  const LOCAL = notFoundPage[langCode];
  return (
    <LayoutRoot language={langCode} location={location}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '4rem',
        }}
      >
         <h1>{LOCAL.title}</h1>
            <p>{LOCAL.subtext}</p>
        <h1>Are you lost ?</h1>
        <p>You just hit a route that doesn&#39;t exist...</p>
      </div>
    </LayoutRoot>
  )
}
