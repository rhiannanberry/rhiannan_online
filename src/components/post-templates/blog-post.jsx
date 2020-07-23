import React from 'react';
import rehypeReact from 'rehype-react';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';

import Layout from '../layout/layout';


const renderAst = new rehypeReact({
  createElement: React.createElement,
  // components: { 'collapsible-box': CollapsibleBox },
}).Compiler;

export default function BlogTemplate({ data, pageContext }) {
  const { markdownRemark: post } = data;

  return (
    <Layout currentSection="blog">
      <div className="blog-post-container">
        <Helmet title={`${post.frontmatter.title}`} />
        <div className="blog-post">
          <h1>{post.frontmatter.title}</h1>
          <div className="blog-post-content">{renderAst(post.htmlAst)}</div>

        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!, $projects:[String]) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      htmlAst
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        
        title
      }
      fields {
        slug
      }
    }
    allMarkdownRemark(filter: {frontmatter: {id: {in: $projects}}}) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          id
        }
      }
    }
  }
`;
