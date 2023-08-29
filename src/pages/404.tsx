import React from 'react'
import MainLayout from '../components/MainLayout'

export default function NotFoundPage({
  data,
  pageContext: { langCode },
  location,
}) {
  return (
    <MainLayout language={langCode} location={location}>
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
  )
}
