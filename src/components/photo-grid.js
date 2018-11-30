import React from 'react';
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css' // This only needs to be imported once in your app
import PropTypes from 'prop-types'
import './photo-grid.scss';

// DIRTY test for custom component.
/*

The problem here :

We want to fetch the images from the markdown folder but graphql queries runned here cannot take any variable and doesnt have access to gatsby context
The only way I found to keep a clean syntax is to insert img tags directly in the markdown, they will be transformed by gatsby image (so responsive stuff and all)
and then those urls can be used (props.href)
 */

function styleBackgroundPhoto(src) {
  return {
    backgroundImage: 'url(' + src + ')',
  }
}

const photoGridProptypes = { gatsbyImages: PropTypes.array.isRequired }
class PhotoGridTest extends React.Component {

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
      <div className={className} style={styleBackgroundPhoto(picture)}
           onClick={() => this.setState({ isOpen: true, photoIndex: index })} key={picture.id}/>
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
        <div className="photoRowContainer" key={pictures[i].id}>
          {photoRow}
        </div>,
      )
      photoRow = []
    }
    return photoGrid
  }


  render() {

    const { isOpen, photoIndex } = this.state
    const images = this.props.gatsbyImages;

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

PhotoGridTest.propTypes = photoGridProptypes;


function PhotoGrid({ children }) {
  const photos = children.filter(child => typeof child !== 'string');
  const srcs = photos.map(photo => photo.props.href);
  return (
    <PhotoGridTest gatsbyImages={srcs} />
  );
}

PhotoGrid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PhotoGrid;