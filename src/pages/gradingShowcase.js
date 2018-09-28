import React, { Component } from 'react'
import Layout from './../layout/layout'
import './../layout/page.scss'
import ImageCompare from '../components/image-compare'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

const descriptionPropTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  cameraModel: PropTypes.string.isRequired,
  videoFlux: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,

}

const hrStyle = {
  backgroundColor: '#4c4c4c',
  borderColor: '#4c4c4c',
  height: '1px',
  marginTop: '5em',
  marginBottom: '5em',
  width: '250px',
}

class Description extends Component {


  cameraUsed() {

    if (this.props.cameraModel !== undefined) {
      return (<p><strong>Caméra : </strong>{this.props.cameraModel}</p>)
    } else {
      return (<></>)
    }
  }

  videoFlux() {

    if (this.props.videoFlux !== undefined) {
      return (<p><strong>Video flux : </strong>{this.props.videoFlux}</p>)
    } else {
      return (<></>)
    }
  }

  render() {


    return (<div>

        <h2>{this.props.title}</h2>

        <p>{this.props.subtitle}</p>
        {this.cameraUsed()}
        {this.videoFlux()}
        <p>{this.props.description}</p>
      </div>
    )
  }
}

Description.propTypes = descriptionPropTypes


class GradingShowcase extends React.Component {
  render() {
    return (
      <Layout>
        <div className="coverBand" id="content">
          <div className="overlay overlaySmaller">
            <div className="punchline">Color Grade showreel</div>
          </div>
        </div>

        <div className="Page">
          <article className="card article" id="content">
            <header className="header" style={{
              paddingTop: '1em',
              paddingBottom: '2em',
            }}>
            </header>
            <div className="content" itemProp="articleBody">

              <Description title={'RÉALITÉ'}
                           subtitle={'Court métrage de Maxime Touroute'}
                           videoFlux={`H264`}
                           cameraModel={`Nikon D5500`}
                           description={`Ici, et suite à un tournage avec très peu d'éclairage disponible, un gros travail sur le contraste de l'image a été fait pour lui donner un maximum de dynamisme.
`}
              />


              <ImageCompare leftImage={this.props.data.real2A.childImageSharp.fixed.src}
                            rightImage={this.props.data.real2B.childImageSharp.fixed.src}/>


              <hr style={hrStyle}/>

              <Description title={`PETIT POUCET`} subtitle={`Court métrage co-réalisé`}
                           cameraModel={`Blackmagic Cinema Camera`} videoFlux={`Prores standard`}
                           description={`Étalonnage express d'un court métrage réalisé en quelques heures.`}/>


              <ImageCompare leftImage={this.props.data.poucet2A.childImageSharp.fixed.src}
                            rightImage={this.props.data.poucet2B.childImageSharp.fixed.src}/>

              <hr style={hrStyle}/>

              <Description title={`MARIPEGA`} subtitle={`Clip réalité par Maxime Touroute`} cameraModel={`Nikon D5500`}
                           videoFlux={`H264 de bonne qualité`}
                           description={`Création d'un effet coucher de soleil chaud ainsi qu'une ambiance matinale anxiogène.`}/>

              <ImageCompare leftImage={this.props.data.mari3A.childImageSharp.fixed.src}
                            rightImage={this.props.data.mari3B.childImageSharp.fixed.src}
              />
              <ImageCompare leftImage={this.props.data.mari1A.childImageSharp.fixed.src}
                            rightImage={this.props.data.mari1B.childImageSharp.fixed.src}
              />
              <ImageCompare leftImage={this.props.data.mari5A.childImageSharp.fixed.src}
                            rightImage={this.props.data.mari5B.childImageSharp.fixed.src}
              />

              <hr style={hrStyle}/>

              <Description title={`HARMONIE DES SPHÈRES`} subtitle={`Court métrage de Vincent Montalieu.`}
                           cameraModel={`Lumix GH2`}
                           videoFlux={`H264 de qualité assez faible nécessitant une grande finesse dans l'étalonnage`}
                           description={`Création d'un étalonnage neutre et froid pour une ambiance réaliste et parfois sombre.`}/>


              <ImageCompare leftImage={this.props.data.harm1A.childImageSharp.fixed.src}
                            rightImage={this.props.data.harm1B.childImageSharp.fixed.src}
              />
              <ImageCompare leftImage={this.props.data.harm3A.childImageSharp.fixed.src}
                            rightImage={this.props.data.harm3B.childImageSharp.fixed.src}
              />
              <ImageCompare leftImage={this.props.data.harm4A.childImageSharp.fixed.src}
                            rightImage={this.props.data.harm4B.childImageSharp.fixed.src}
              />
              <ImageCompare leftImage={this.props.data.harm5A.childImageSharp.fixed.src}
                            rightImage={this.props.data.harm5B.childImageSharp.fixed.src}
              />


              <br/><br/>
              <p>For more, check out my <Link to={'/color-grade-breakdown-2017'}>2017 Color Grading Showreel</Link></p>



            </div>
          </article>
        </div>


      </Layout>
    )
  }

}

export default GradingShowcase


export const fileImage = graphql`
    fragment fileImage on File {
        childImageSharp {
            fixed(width: 1920) {
                ...GatsbyImageSharpFixed_noBase64
                src
            }
        }
    }`

export const query = graphql`
    query {
        real2A:file(relativePath: {eq: "gradingShowcase/real2_a.jpg"}) {
            ...fileImage
        }

        real2B:file(relativePath: {eq: "gradingShowcase/real2_b.jpg"}) {
            ...fileImage
        }

        poucet2A:file(relativePath: {eq: "gradingShowcase/poucet2_a.jpg"}) {
            ...fileImage
        }

        poucet2B:file(relativePath: {eq: "gradingShowcase/poucet2_b.jpg"}) {
            ...fileImage
        }

        mari3A:file(relativePath: {eq: "gradingShowcase/mari3_a.jpg"}) {
            ...fileImage
        }
        mari3B:file(relativePath: {eq: "gradingShowcase/mari3_b.jpg"}) {
            ...fileImage
        }
        mari1A:file(relativePath: {eq: "gradingShowcase/mari1_a.jpg"}) {
            ...fileImage
        }
        mari1B:file(relativePath: {eq: "gradingShowcase/mari1_b.jpg"}) {
            ...fileImage
        }
        mari5A:file(relativePath: {eq: "gradingShowcase/mari5_a.jpg"}) {
            ...fileImage
        }
        mari5B:file(relativePath: {eq: "gradingShowcase/mari5_b.jpg"}) {
            ...fileImage
        }

        harm1A:file(relativePath: {eq: "gradingShowcase/harm1_a.jpg"}) {
            ...fileImage
        }
        harm1B:file(relativePath: {eq: "gradingShowcase/harm1_b.jpg"}) {
            ...fileImage
        }
        harm3A:file(relativePath: {eq: "gradingShowcase/harm3_a.jpg"}) {
            ...fileImage
        }
        harm3B:file(relativePath: {eq: "gradingShowcase/harm3_b.jpg"}) {
            ...fileImage
        }
        harm4A:file(relativePath: {eq: "gradingShowcase/harm4_a.jpg"}) {
            ...fileImage
        }
        harm4B:file(relativePath: {eq: "gradingShowcase/harm4_b.jpg"}) {
            ...fileImage
        }
        harm5A:file(relativePath: {eq: "gradingShowcase/harm5_a.jpg"}) {
            ...fileImage
        }
        harm5B:file(relativePath: {eq: "gradingShowcase/harm5_b.jpg"}) {
            ...fileImage
        }

    }`





