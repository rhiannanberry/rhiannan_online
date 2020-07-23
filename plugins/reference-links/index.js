const visit = require(`unist-util-visit`)

module.exports = ({ markdownAST }) => {
  visit(markdownAST, 'footnote', (node) => {
    // We're at a text node!
    console.log(node);
  })
  visit(markdownAST, 'footnoteDefinition', (node) => {
    // We're at a text node!
    console.log(node);
  })
}