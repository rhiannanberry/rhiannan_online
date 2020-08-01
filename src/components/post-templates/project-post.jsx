import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';

import Layout from '../layout/layout';

function appendTags(tags, html) {
  if (tags) {
    let v = `<div class="block">
      <h2>Tags 🏷️</h2>
      `;
    tags = tags.map((x) => x.charAt(0).toUpperCase() + x.slice(1));
    tags.sort().forEach((x, i) => {
      v += `<div id=${i % 6} class="tag" key=${i}>${x}</div>`;
    });

    v = `${v}</div>`;

    return v + html;
  }

  return html;
}

export default function ProjectTemplate({ data }) {
  const { markdownRemark: post } = data;
  // TODO: FIX THIS!!!!!!
  //const { allMarkdownRemark: related } = data;

  return (
    <Layout currentSection="projects">
      <div className="project-post-container">
        <Helmet title={`${post.frontmatter.title}`} />
        <div className="project-post">
          <h1>{post.frontmatter.title}</h1>
          <div
            className="project-post-content"
            dangerouslySetInnerHTML={{ __html: appendTags(post.frontmatter.tags, post.html) }}
          />
        </div>
        
      </div>
    </Layout>
  );
}

function relatedBlogPosts(related) {
  /*
  {relatedBlogPosts(related.nodes)}
  if (!related || related.length == 0) { return; }
  const list = related.map((e) => (<Link key={e.id} to={e.fields.slug}>{e.frontmatter.title}</Link>));
  return (
    <>
      <h2>Related Blog Posts</h2>
      {list}
    </>
  );*/
  return (
    <>
    </>
  )
}


export const pageQuery = graphql`
query ProjectPostByPath($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
      }
      fields {
        slug
      }
    }
   
  }
`;


/*
TODO: THIS!!!!!!
query ProjectPostByPath($path: String!, $projectID:[String]) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
      }
      fields {
        slug
      }
    }
   allMarkdownRemark(
        filter: {frontmatter: {projects: {in: $projectID}}}
        sort: { order: DESC, fields: [frontmatter___date] }
        ) {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          title
          projects
        }
      }
    }
  }
 

    */