import React from 'react'
import { Link, graphql } from 'gatsby'
import MainLayout from '../layout/MainLayout'
import MetaTags from '../bits/MetaTags/MetaTags'
import './../layout/Layouts.scss'
import './news.scss'

const events = [
  {
    node: {
      start: '2020-09-19T07:00:00.000Z',
      end: '2020-09-20T21:30:00.000Z',
      summary: 'Journées Européennes du Patrimoine',
      description:
        'Augmented Reality Dances // Space Dances https://maximetouroute.github.io/spacedances#content',
      location: 'Villeurbanne, France',
    },
  },
  {
    node: {
      start: '2020-09-18T16:00:00.000Z',
      end: '2020-09-18T19:45:00.000Z',
      summary: 'Culture Night // Paris & Dublin',
      description:
        'Cross-country interactive videoprojection. https://www.centreculturelirlandais.com/agenda/the-live-drawing-project-et-vernissage-de-lexposition-la-place-des-grands-a https://www.facebook.com/events/223608605553975/  https://culturenight.ie/event/french-embassy-in-ireland/ ',
      location: 'Paris, France',
    },
  },
  {
    node: {
      start: '2020-04-04T22:00:00.000Z',
      end: '2020-05-11T22:00:00.000Z',
      summary: 'Draw From The Window',
      description:
        'Decentralised exhibition during pandemic lockdown to fight isolation and create social links between neighbors.  https://thelivedrawingproject.com/stayhome/',
      location: 'Europe',
    },
  },
  {
    node: {
      start: '2020-03-20T23:00:00.000Z',
      end: '2020-03-21T23:00:00.000Z',
      summary: 'Festival Electrochoc',
      description:
        'Dance performance with the Space Dances project https://maximetouroute.github.io/spacedances#content http://www.lesabattoirs.fr/electrochoc/programmation/',
      location:
        'Les Abattoirs - Scène de Musiques Actuelles, 38300 Bourgoin-Jallieu, France',
    },
  },
  {
    node: {
      start: '2020-03-01T23:00:00.000Z',
      end: '2020-03-14T00:00:00.000Z',
      summary: 'Spraying Board',
      description:
        'Art Residency at Superposition and exhibition of work accomplished BR Live video-mapping https://sprayingboard.thedailyboard.co/ ',
      location: 'Lyon, France',
    },
  },
  {
    node: {
      start: '2020-02-20T06:00:00.000Z',
      end: '2020-02-23T07:00:00.000Z',
      summary: 'Copenhagen Light Festival',
      description:
        'Artwork exhibited : The Live Drawing Project https://copenhagenlightfestival.org/ https://thelivedrawingproject.com/',
      location: 'Copenhague, Danemark',
    },
  },
  {
    node: {
      start: '2020-02-14T00:30:00.000Z',
      end: '2020-02-16T01:30:00.000Z',
      summary: 'Glow Light Festival',
      description:
        'Light Festival of Calgary. BRArtwork exhibited: The Live Drawing Project https://experienceglow.com/ https://thelivedrawingproject.com/',
      location: 'Calgary, AB, Canada',
    },
  },
  {
    node: {
      start: '2020-02-08T05:30:00.000Z',
      end: '2020-02-09T06:30:00.000Z',
      summary: 'MOI De la Danse Festival',
      description:
        'Augmented Reality Dances. BRFree entry. https://www.les-subs.com/festival/le-moi-de-la-danse-5/ https://maximetouroute.github.io/spacedances#content ',
      location: 'Les Subs, Lyon',
    },
  },
  {
    node: {
      start: '2020-01-12T12:30:00.000Z',
      end: '2020-01-12T17:30:00.000Z',
      summary: 'WORKSHOP: La Chute des Murs',
      description:
        'Collaborative drawing workshop on the thematic walls through history.https://www.lyon.fr/evenement/exposition/la-chute-des-murs/ http://chrd.fr https://thelivedrawingproject.com ',
      location:
        "Centre d'Histoire de la Résistance et de la Déportation, 69007 Lyon, France",
    },
  },
  {
    node: {
      start: '2020-01-09T08:00:00.000Z',
      end: '2020-01-24T09:00:00.000Z',
      summary: 'EXHIBITION: Humanlapse, portraits in motion',
      description:
        'https://maximetouroute.github.io/humanlapse/ http://www.mjcmonplaisir.tv/ ',
      location: 'MJC de Montplaisir, Lyon',
    },
  },
  {
    node: {
      start: '2019-12-14T08:00:00.000Z',
      end: '2019-12-14T17:45:00.000Z',
      summary: 'Open Air Solibarités',
      description:
        'Live performance for one night in partnership with bars and restaurants of the Guillotière Neighborhood in Lyon. BRArtwork exhibited : The Live Drawing Project  https://thelivedrawingproject.com ',
      location: 'Place Ollier, 69007 Lyon, France',
    },
  },
  {
    node: {
      start: '2019-12-05T11:00:00.000Z',
      end: '2019-12-07T12:00:00.000Z',
      summary: 'Light Festival of Lyon ',
      description:
        'Artwork exhibited : The Live Drawing Project https://thelivedrawingproject.com ',
      location: 'Malting Pot Bar, Lyon',
    },
  },
  {
    node: {
      start: '2019-11-28T17:00:00.000Z',
      end: '2019-11-28T22:30:00.000Z',
      summary: 'PERFORMANCE: The Live Drawing Project',
      description:
        'Live performance for one night in partnership with the BerThoM Bar of Vieux Lyon. BRArtwork exhibited : The Live Drawing Project https://thelivedrawingproject.com ',
      location: 'Les BerThoM Fousseret, Lyon, France',
    },
  },
  {
    node: {
      start: '2019-11-15T23:00:00.000Z',
      end: '2019-11-16T23:00:00.000Z',
      summary: 'Le Creusot Video Game Festival',
      description:
        'Video Game Festival BRArtworks exhibited : The Live Drawing Project and first prototype of "Babel", collaborative game https://thelivedrawingproject.com ',
      location: 'L’Alto, Creusot, France',
    },
  },
  {
    node: {
      start: '2019-09-27T18:30:00.000Z',
      end: '2019-09-27T22:00:00.000Z',
      summary: 'SCREENING: "Les étoiles du LYF"',
      description:
        'Screening of the short movie "Réalité" for the Lyon Young Film Festival (Official selection the year before). https://maximetouroute.github.io/realite#content ',
      location: 'Aquarium Ciné-Café, Rue Dumont Lyon, France',
    },
  },
  {
    node: {
      start: '2019-08-10T06:00:00.000Z',
      end: '2019-08-11T07:00:00.000Z',
      summary: 'Chevagny Art Festival',
      description:
        'Multidisciplinary and international Art Festival. BRArtwork exhibited : The Live Drawing Project https://thelivedrawingproject.com ',
      location: 'Chevagny-sur-Guye, France',
    },
  },
  {
    node: {
      start: '2019-07-04T01:30:00.000Z',
      end: '2019-07-07T02:30:00.000Z',
      summary: 'Festi Lumi Light Festival',
      description:
        'Artwork exhibited: The Live Drawing Project \nhttps://thelivedrawingproject.com/',
      location: 'Bonifacio, Corsica, France',
    },
  },
  {
    node: {
      start: '2019-06-06T05:00:00.000Z',
      end: '2019-07-10T06:00:00.000Z',
      summary: 'EXHIBITION: Humalapse, portraits in motion',
      description:
        'Second exhibition of "Humanlapse, portraits in motion" at Toï Toï. https://maximetouroute.github.io/humanlapseProject#content ',
      location: 'Toï Toï Le Zinc, Rue Marcel Dutartre, Villeurbanne, France',
    },
  },
  {
    node: {
      start: '2019-05-02T06:00:00.000Z',
      end: '2019-05-12T07:00:00.000Z',
      summary: 'Peinture Fraiche Festival',
      description:
        'International Street Art Festival. BRArtwork exhibited : The Live Drawing Project https://thelivedrawingproject.com ',
      location: 'La Halle Debourg, Lyon, France',
    },
  },
  {
    node: {
      start: '2019-02-04T04:00:00.000Z',
      end: '2019-02-06T05:00:00.000Z',
      summary: 'Art Residency: The Live Drawing Project',
      description:
        'Art residency at the Lablab, place of experimentation for digital arts. BRProduction of artwork : The Live Drawing Project https://thelivedrawingproject.com ',
      location: 'LabLab, Villeurbanne, France',
    },
  },
]

export default function News({ data }) {
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

  const eventMaker = (event) => {
    const startDate = new Date(event.start).toISOString().substring(0, 10)
    const endDate = new Date(event.end).toISOString().substring(0, 10)
    const dates =
      startDate === endDate ? `${startDate}` : `${startDate} → ${endDate}`
    const urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi

    // Deode customely encoded break lines
    const descWithNoUrls = event.description.replace(urlRegex, () => {
      return ''
    })

    const formattedDescription = (
      <>
        {descWithNoUrls.split(/BR/g).map((part) => {
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
      <div
        style={{ lineHeight: 1.5, marginBottom: '2em' }}
        key={event.summary}
        className={'newsCard'}
      >
        <h3 style={{ marginBottom: '0.5em' }}>{event.summary}</h3>
        <div>
          <strong>{dates}</strong>
        </div>
        {event.location && <div>Location: {event.location}</div>}
        <div>
          {formattedDescription}
          {urls.map((url) => (
            <>
              <div
                style={{
                  display: 'inline-block',
                  maxWidth: '90vw',
                  overflowWrap: 'break-word',
                }}
              >
                <a href={url}>{url}</a>
              </div>
              <br />
            </>
          ))}
        </div>
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
            {presentEvents.length !== 0 && (
              <>
                <h2 style={{ ...titleStyle, color: '#3568cf' }}>
                  Currently Happening
                </h2>
                {presentEvents.map(({ node }) => {
                  return eventMaker(node)
                })}
              </>
            )}

            <h2 style={{ ...titleStyle, color: '#3568cf' }}>Upcoming Events</h2>
            {futureEvents.length === 0 && (
              <p>There is nothing publicly planned right now</p>
            )}
            {futureEvents.map(({ node }) => {
              return eventMaker(node)
            })}

            <button
              id="showAllEventsButton"
              className="showmoreButton"
              onClick={() => {
                let t = document.getElementById('pastEvents')
                t.style.display = ''
                let d = document.getElementById('showAllEventsButton')
                d.style.display = 'none'
              }}
              style={{ marginTop: '4rem', marginBottom: '4rem' }}
            >
              Show past events
            </button>
            <div id="pastEvents" style={{ display: 'none' }}>
              <h2 style={titleStyle}>Past Events</h2>
              {pastEvents.map(({ node }) => {
                return eventMaker(node)
              })}
            </div>
          </div>
          <br />
          <br />
          <Link to="/">Go Home</Link>
        </article>
      </div>
    </MainLayout>
  )
}
