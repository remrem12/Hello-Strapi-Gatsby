import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <ul>
        {data.allStrapiArticles.edges.map(document => (
          <li key={document.node.id}>
            <h2>
              <Link to={`/${document.node.id}`}>{document.node.Title}</Link>
            </h2>
            <Img fixed = {document.node.Image.childImageSharp.fixed}/>
            <p>{document.node.Content}</p>
          </li>
        ))}
      </ul>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`  
  query IndexQuery {
    allStrapiArticles {
      edges {
        node {
          id
          Title
          Content
          Image {
            childImageSharp {
              fixed(width: 200, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`