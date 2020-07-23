import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import { LinkBox } from '../components/boxes/boxes';
import SEO from '../components/seo';

export default function Blog({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout currentSection="blog">
      <SEO title="Blog" />
      <h1>Blog</h1>
      {posts
        .filter((post) => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => (
          <div className="blog-post-preview" key={post.id}>
            <LinkBox
              headbar
              title={post.frontmatter.title}
              subtitle={post.frontmatter.date}
              link={post.fields.slug}
              className="article"
            >
              <p>{post.frontmatter.summary}</p>
              <p>
                <i>
                  &quot;
                  {post.excerpt}
                  ...&quot;
                </i>
              </p>
            </LinkBox>

          </div>
        ))}

    </Layout>
  );
}

Blog.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.objectOf(PropTypes.object),
      ),
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: {regex : "\/blog/"} },
      sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            summary
          }
        }
      }
    }
  }
`;
