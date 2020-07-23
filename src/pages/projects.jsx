import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from '../components/seo';

import Layout from '../components/layout/layout';
import { LinkBox } from '../components/boxes/boxes';

import '../stylesheets/projects.scss';

export default function Projects({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout className="projects" currentSection="projects">
      <SEO title="Projects" />
      <h1>Projects</h1>
      <div className="boxes">
        {posts
          .filter((post) => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => (
            <div className="box-container" key={post.id}>

              <LinkBox
                headbar
                title={post.frontmatter.title}
                image={post.frontmatter.thumbnail
                  && post.frontmatter.thumbnail.childImageSharp.fluid}
                link={post.fields.slug}
              />
            </div>

          ))}
      </div>
    </Layout>
  );
}

Projects.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.objectOf(PropTypes.object),
      ),
    }),
  }).isRequired,
};

export const projectsQuery = graphql`
  query projectsQuery {
    allMarkdownRemark(
        filter: { fileAbsolutePath: {regex : "\/projects/"} },
        sort: { order: DESC, fields: [frontmatter___date] }
        ) {
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
            thumbnail {
                childImageSharp {
                    fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
          }
        }
      }
    }
  }
`;
