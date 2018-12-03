import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layout/layout'
import './photoBook.scss'
import './../layout/page.scss'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css' // This only needs to be imported once in your app
import PropTypes from 'prop-types'


function styleBackgroundPhoto(src) {
  return {
    backgroundImage: 'url(' + src + ')',
  }
}

const photoGridProptypes = { gatsbyImages: PropTypes.array.isRequired }
class PhotoGrid extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      photoIndex: 0,
      isOpen: false,
    }
  }

  generatePicture(picture, index, margin) {
    let className = margin ? `photoThumbnail marginRight` : `photoThumbnail`
    return (
      <div key={index*1000} className={className} style={styleBackgroundPhoto(picture.childImageSharp.sizes.src)}
           onClick={() => this.setState({ isOpen: true, photoIndex: index })} />
    )
  }

  //numberPerRow is a WIP, needs changes in sass too
  generateGrid(pictures, numberPerRow = 3) {

    let photoGrid = []
    for (let i = 0; i < pictures.length; i += numberPerRow) {

      let photoRow = []

      for (let columnIndex = 0; columnIndex < numberPerRow && i + columnIndex < pictures.length; columnIndex++) {
        // handle margin right
        if (columnIndex < numberPerRow) {
          photoRow.push(this.generatePicture(pictures[i + columnIndex], i + columnIndex, true))
        } else {
          photoRow.push(this.generatePicture(pictures[i + columnIndex], i + columnIndex, false))
        }
      }
      photoGrid.push(
        <div key={i} className="photoRowContainer" >
          {photoRow}
        </div>,
      )
      photoRow = []
    }
    return photoGrid
  }


  render() {

    const { isOpen, photoIndex } = this.state
    const images = this.props.gatsbyImages.map(gatsbyImages => gatsbyImages.childImageSharp.sizes.src)

    return (
      <>
        {isOpen && (

          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}

        <div className="photoGrid">
          {this.generateGrid(this.props.gatsbyImages)}
        </div>
      </>

    )
  }

}

PhotoGrid.propTypes = photoGridProptypes;



export default class PhotoBook extends React.Component {

  constructor(props) {
    super(props)

    this.state = {}
  }

  quickSortObjectBasedOnPartOfKeyName(partOfKeyName, obj) {
    return Object.keys(obj).filter(function(key) {
      return key.indexOf(partOfKeyName) === 0;
    }).map(key => obj[key])
  }

  render() {

    return (
      <Layout>
        <div className="coverBand" id="content">
          <div className="overlay overlaySmaller">
            <div className="punchline">Photo Book</div>
          </div>
        </div>

        <div className="pageContent">
          <div className="pageContainer">

            <p>A selection of my photography works.</p>
            <br/>
            {photoBookAlbums.map(album => {
              const pics = this.quickSortObjectBasedOnPartOfKeyName(album.keyToken, this.props.data)
              return (
              <>
              <h1>{album.title}</h1>
              <p>{album.description}</p>
                <PhotoGrid gatsbyImages={pics}/>
              </>
            )})}

            <p style={{textAlign:'center'}}>Want more ? check out my <a href="https://instagram.com/maximetouroute" target="_blank" rel="noreferrer noopener">Instagram</a></p>
          </div>
        </div>
      </Layout>
    )
  }

}

export const photoBookAlbums = [
  {
    title: "Experiments",
    description: "A series of experiments on the usage of lighting and photography techniques",
    keyToken: "e"
  },
  {
    title: "Portraits",
    description: "",
    keyToken: "p"
  },
  {
    title: "Landscapes",
    description: "",
    keyToken: "l"
  },
  {
    title: "Dailies",
    description: "A collection of shots from the everyday ramblings of my life",
    keyToken: "d"
  },
]

export const sameFileImage = graphql`
    fragment sameFileImage on File {
        childImageSharp {
            sizes(maxWidth: 1920) {
                ...GatsbyImageSharpSizes
                src
            }
        }
    }`

export const query = graphql`
    query {

        l1:file(relativePath: {eq: "photoBook/landscapes/b-33.jpg"}) {...sameFileImage}
        l2:file(relativePath: {eq: "photoBook/landscapes/b-34.jpg"}) {...sameFileImage}
        l3:file(relativePath: {eq: "photoBook/landscapes/b-27.jpg"}) {...sameFileImage}
        l4:file(relativePath: {eq: "photoBook/landscapes/b-37.jpg"}) {...sameFileImage}
        l5:file(relativePath: {eq: "photoBook/landscapes/b-39.jpg"}) {...sameFileImage}
        l6:file(relativePath: {eq: "photoBook/landscapes/b-40.jpg"}) {...sameFileImage}
        l7:file(relativePath: {eq: "photoBook/landscapes/b-44.jpg"}) {...sameFileImage}
        l8:file(relativePath: {eq: "photoBook/landscapes/b-46.jpg"}) {...sameFileImage}
        l9:file(relativePath: {eq: "photoBook/landscapes/b-9.jpg"}) {...sameFileImage}
        l10:file(relativePath: {eq: "photoBook/landscapes/b-38.jpg"}) {...sameFileImage}
        l11:file(relativePath: {eq: "photoBook/landscapes/b-35.jpg"}) {...sameFileImage}

        e1:file(relativePath: {eq: "photoBook/experiments/b-22.jpg"}) {...sameFileImage}
        e2:file(relativePath: {eq: "photoBook/experiments/b-20.jpg"}) {...sameFileImage}
        e3:file(relativePath: {eq: "photoBook/experiments/b-23.jpg"}) {...sameFileImage}
        e4:file(relativePath: {eq: "photoBook/experiments/b-8.jpg"}) {...sameFileImage}
        e5:file(relativePath: {eq: "photoBook/experiments/b-12.jpg"}) {...sameFileImage}
        e6:file(relativePath: {eq: "photoBook/experiments/b-28.jpg"}) {...sameFileImage}
        e7:file(relativePath: {eq: "photoBook/experiments/b-2.jpg"}) {...sameFileImage}
        e8:file(relativePath: {eq: "photoBook/experiments/b-13.jpg"}) {...sameFileImage}
        e9:file(relativePath: {eq: "photoBook/experiments/b-1.jpg"}) {...sameFileImage}
        e10:file(relativePath: {eq: "photoBook/experiments/b-24.jpg"}) {...sameFileImage}
        e11:file(relativePath: {eq: "photoBook/experiments/b-29.jpg"}) {...sameFileImage}
        e12:file(relativePath: {eq: "photoBook/experiments/b-25.jpg"}) {...sameFileImage}
        
        p1:file(relativePath: {eq: "photoBook/portraits/b-19.jpg"}) {...sameFileImage}
        p2:file(relativePath: {eq: "photoBook/portraits/b-9.jpg"}) {...sameFileImage}
        p3:file(relativePath: {eq: "photoBook/portraits/b-18.jpg"}) {...sameFileImage}
        p4:file(relativePath: {eq: "photoBook/portraits/b-12.jpg"}) {...sameFileImage}
        p5:file(relativePath: {eq: "photoBook/portraits/b-21.jpg"}) {...sameFileImage}
        p6:file(relativePath: {eq: "photoBook/portraits/b-26.jpg"}) {...sameFileImage}
        p7:file(relativePath: {eq: "photoBook/portraits/b-16.jpg"}) {...sameFileImage}
        p8:file(relativePath: {eq: "photoBook/portraits/b-20.jpg"}) {...sameFileImage}
        p9:file(relativePath: {eq: "photoBook/portraits/b-24.jpg"}) {...sameFileImage}

        d1:file(relativePath: {eq: "photoBook/dailies/b-10.jpg"}) {...sameFileImage}
        d2:file(relativePath: {eq: "photoBook/dailies/b-14.jpg"}) {...sameFileImage}
        d3:file(relativePath: {eq: "photoBook/dailies/b-17.jpg"}) {...sameFileImage}
        d4:file(relativePath: {eq: "photoBook/dailies/b-30.jpg"}) {...sameFileImage}
        d5:file(relativePath: {eq: "photoBook/dailies/b-18.jpg"}) {...sameFileImage}
        d6:file(relativePath: {eq: "photoBook/dailies/b-32.jpg"}) {...sameFileImage}
        d7:file(relativePath: {eq: "photoBook/dailies/b-11.jpg"}) {...sameFileImage}
        d8:file(relativePath: {eq: "photoBook/dailies/b-16.jpg"}) {...sameFileImage}
        d9:file(relativePath: {eq: "photoBook/dailies/b-4.jpg"}) {...sameFileImage}

    }`
