import * as React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h3`
  margin-bottom: 20px;
  background-color: transparent;
  --tw-text-opacity: 1;
  color: rgba(20, 184, 166, var(--tw-text-opacity));
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: underline;
  text-decoration-thickness: 1.5px;
  text-underline-offset: 2px;
`
const BlogHead = styled.h2`
  margin-bottom: 20px;
  background-color: transparent;
  --tw-text-opacity: 1;
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration-thickness: 1.5px;
  text-underline-offset: 2px;
`

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <div>
      <BlogHead>Dev Tips</BlogHead>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <BlogLink to={node.fields.slug}>
            <BlogTitle>
              {node.frontmatter.title} - {node.frontmatter.date}
            </BlogTitle>
          </BlogLink>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
  </Layout>
)

// export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            description
            title
            date
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
