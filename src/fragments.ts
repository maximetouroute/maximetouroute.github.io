import { graphql } from 'gatsby'

export const gatImage = graphql`
  fragment gatImage on File {
    childImageSharp {
      gatsbyImageData(layout: FIXED, maxHeight: 1400)
    }
  }
`

export const modernGatImage = graphql`
  fragment modernGatImage on File {
    childImageSharp {
      thumb: gatsbyImageData(
        width: 270
        height: 270
        placeholder: BLURRED
        transformOptions: { cropFocus: CENTER }
      )
      full: gatsbyImageData(layout: FULL_WIDTH)
    }
  }
`
