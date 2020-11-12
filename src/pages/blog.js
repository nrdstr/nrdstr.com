import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = ({ data }) => {
  console.log(data)

  return (
    <Layout page='blog'>
      <SEO title='nrdstr blog' description="Photoshop tutorials, social media features, photoshop texture and brush packs, coding tutorials, and more! The Nrstr blog offers all sorts of information, and sometimes opinions, on web tech and design" url='/blog' />
      <div className='blog-wrapper animate--fade-in'>
        <h1 className='blog__heading'>n.blog</h1>
        {data.allWordpressPost.edges.map(({ node }) => {
          return (
            <div key={node.slug} className='blog-container' >
              <Link className='blog' to={node.slug}>
                <h3>{node.title}</h3>
                <p className='blog__date'>{node.date}</p>
                <div className='blog__categories'>
                  {node.categories.map(cat => <p className='modal__web-tag blog__tag'>{cat.name}</p>)}
                </div>
                <div className='blog__excerpt' dangerouslySetInnerHTML={{ __html: `${node.excerpt.slice(0, 210)}...</p>` }} />
                <Link className='home__cta-btn home__cta-btn--pink' to={node.slug}>read more &#8594;</Link>
              </Link>
            </div>
          )
        })
        }
      </div>
    </Layout >
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
          date(formatString: "MM-DD-YYYY")
          content
          categories {
            name
          }
        }
      }
    }
  }`