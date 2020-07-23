/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/layout/layout';
import { LinkBox, CollapsibleBox } from '../components/boxes/boxes';

import '../stylesheets/index.scss';

// i wanna put bouncy rainbow text above my selected projects
const IndexPage = ({ data }) => (
  <Layout className="homepage">
    <SEO title="🌞" />
    <CollapsibleBox className="aboutme" titlebar title="About me 🌈🌞👁️">
      <p>
        I&apos;m Rhiannan. BSCS from Georgia Institute of Technology with a focus on computational media, and modeling & simulation.
      </p>
      <p>
        I&apos;m interested in game development, creative coding, web-based AR/XR, shader engineering, tools programming, technical art, web development, human-computer interaction, and diy-culture :)
      </p>
      <p>
        <span role="img" aria-label="email">✉️</span>
        &nbsp;
        <a href="mailto:me@rhiannan.online"><b>me@rhiannan.online</b></a>
        &nbsp;
        <span role="img" aria-label="email">✉️</span>
      </p>
    </CollapsibleBox>

    <div className="boxes">
      {data.allFile.edges.map(({ node: post }) => (
        <div className="box-container" key={post.id}>
          <LinkBox
            title={post.childMarkdownRemark.frontmatter.title}
            image={post.childMarkdownRemark.frontmatter.thumbnail
              && post.childMarkdownRemark.frontmatter.thumbnail.childImageSharp.fluid}
            link={post.childMarkdownRemark.fields.slug}
          />
        </div>
      ))}

    </div>
  </Layout>
);

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.objectOf(PropTypes.object),
      ),
    }),
  }).isRequired,
};

export const recentQuery = graphql`
  query recentQuery {
    allFile(filter: {childMarkdownRemark: {internal: {type: {eq: "MarkdownRemark"}}}}, 
    sort: {fields: [childMarkdownRemark___frontmatter___featured, childMarkdownRemark___frontmatter___date], order: [DESC, DESC]}, limit:9) {
      edges {
        node {
          id
          childMarkdownRemark {
            fields {
              slug
            }
            frontmatter {
              title
              thumbnail {
                childImageSharp {
                  fluid(maxWidth: 300) {
                      ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          modifiedTime
        }
      }
    }
  }
`;
