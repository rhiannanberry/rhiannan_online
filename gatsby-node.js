const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({node, getNode, actions}) => {
  const {createNodeField} = actions 
  if (node.internal.type === `MarkdownRemark`) {

    //is a project or blog
    const isProject = !!node.fileAbsolutePath.match(/\/projects/);
    const pref = isProject ? '/projects' : '/blog';
    
    const slug = node.frontmatter.customSlug ? node.frontmatter.customSlug : createFilePath({ node, getNode, trailingSlash:false})
    
    const newPath = pref+slug;
    createNodeField({
      node,
      name: `isProject`,
      value: isProject,
    })
    createNodeField({
      node,
      name: `slug`,
      value: newPath,
    })
  }
}


exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/components/post-templates/blog-post.jsx`)
  const projectPostTemplate = path.resolve(`src/components/post-templates/project-post.jsx`)

  const result = await graphql(`
    {
      allMarkdownRemark(
       
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              isProject,
              slug
            }
            frontmatter {
              id,
              customSlug,
              projects
            }
            fileAbsolutePath
          }
        }
      }
    }
  `)
    //console.log(JSON.stringify(result, null, 4))
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    console.log(node.fields.slug)
    if (node.fields.isProject) {
      var projectID=node.frontmatter.id?[node.frontmatter.id] : [''];
      createPage({
        path: node.fields.slug,
        component: projectPostTemplate,
        context: {projectID}, // additional data can be passed via context
      })
    } else {
      var projects = node.frontmatter.projects ? node.frontmatter.projects : [''];
      createPage({
        path: node.fields.slug,
        component: blogPostTemplate,
        context: {projects}, // additional data can be passed via context
      })
    }
    
    
  })
}