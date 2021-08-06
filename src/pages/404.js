import React from 'react'
import MainLayout from '../layout/MainLayout'

export default function NotFoundPage({ data, pageContext: { langCode } }) {
  return (
  <MainLayout language={langCode}>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '4rem',
      }}
    >
      <h1>Are you lost ?</h1>
      <p>You just hit a route that doesn&#39;t exist...</p>
    </div>
  </MainLayout>
);

    }
