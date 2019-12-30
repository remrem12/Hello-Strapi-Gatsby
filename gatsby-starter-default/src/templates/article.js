import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

const ArticleTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiArticles.Title}</h1>
    <p>by <Link to={`/authors/User_${data.strapiArticles.author.id}`}>{data.strapiArticles.author.username}</Link></p>
    <Img fluid={data.strapiArticles.Image.childImageSharp.fluid} />
    <p>{data.strapiArticles.Content}</p>
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
    query ArticleTemplate($id: String!) {
    strapiArticles(id: {eq: $id}) {
      Title
      Content
      Image {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      author {
        id
        username
      }
    }
  }
`