import React from 'react'
import { Link, graphql } from 'gatsby'
import MainLayout from '../layout/MainLayout'
import MetaTags from '../bits/MetaTags/MetaTags'
import './../layout/Layouts.scss'

export default function News({ data }) {
  const { edges: events } = data.allIcal
  // Newest to oldest
  const orderedEvents = events.sort((a, b) => {
    return new Date(b.node.start).getTime() - new Date(a.node.start).getTime()
  })

  const today = new Date()
  const pastEvents = orderedEvents.filter(({ node }) => {
    return new Date(node.end) < today
  })
  const presentEvents = orderedEvents.filter(({ node }) => {
    return (new Date(node.start) <= today) & (today <= new Date(node.end))
  })
  const futureEvents = orderedEvents.filter(({ node }) => {
    return today < new Date(node.start)
  })

  const eventMaker = event => {
    const startDate = new Date(event.start).toISOString().substring(0, 10)
    const endDate = new Date(event.end).toISOString().substring(0, 10)
    const dates =
      startDate === endDate ? `${startDate}` : `${startDate} → ${endDate}`
    const urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi
    const htmlTagsAndTheirContentRegex = /<\/?[^>]+(>|$)/g ///<[^>]*>/ ;///(<([^>]+)>.*<([^>]+)>)/;

    // Clean possible presence of useless html tags from google calendar
    event.description = event.description.replace(
      htmlTagsAndTheirContentRegex,
      _ => {
        return ''
      }
    )
    // Stuff like &amp; and other html codes
    event.description = event.description.replace(/&.*;/g, _ => {
      return ''
    })
    // Remove all dirty formatting from google calendar mess
    event.description = event.description.replace('\n', _ => {
      return ''
    })
    // Deode customely encoded break lines
    const descWithNoUrls = event.description.replace(urlRegex, () => {
      return ''
    })

    const formattedDescription = (
      <>
        {descWithNoUrls.split(/BR/g).map(part => {
          return (
            <>
              {part}
              <br />
            </>
          )
        })}
      </>
    )
    const urls = event.description.match(urlRegex) || []

    return (
      <div style={{ lineHeight: 1.5, marginBottom: '2em' }} key={event.summary}>
        <h3 style={{ marginBottom: '0.5em' }}>{event.summary}</h3>
        <div>
          <strong>{dates}</strong>
        </div>
        {event.location && <div>Location: {event.location}</div>}
        <p>
          {formattedDescription}

          {urls.map(url => (
            <>
              <Link to={url}>{url}</Link>
              <br />
            </>
          ))}
        </p>
      </div>
    )
  }

  const titleStyle = {
    textAlign: '',
    marginTop: '2em',
    marginBottom: '2em',
    borderLeft: '5px solid #bfceee',
    paddingLeft: '0.5em',
  }
  return (
    <MainLayout>
      <MetaTags title={'News'} />
      <div className="Page">
        <article className="card article">
          <br />
          <br />
          <br />
          <div className="content" itemProp="articleBody">
            <h2 style={{ ...titleStyle, color: '#3568cf' }}>
              Currently Happening
            </h2>
            {presentEvents.map(({ node }) => {
              return eventMaker(node)
            })}
            <h2 style={{ ...titleStyle, color: '#3568cf' }}>Upcoming Events</h2>
            {futureEvents.map(({ node }) => {
              return eventMaker(node)
            })}
            <h2 style={titleStyle}>Past Events</h2>
            {pastEvents.map(({ node }) => {
              return eventMaker(node)
            })}
          </div>
          <br />
          <br />
          <Link to="/">Go Home</Link>
        </article>
      </div>
    </MainLayout>
  )
}

export const newsQuery = graphql`
  query NewsQuery {
    allIcal {
      edges {
        node {
          start
          end
          summary
          description
          location
        }
      }
    }
  }
`
