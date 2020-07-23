/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import './layout.scss';
import Header from '../header/header';

const Layout = ({ className, currentSection, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} currentSection={currentSection} />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0 1.0875rem 1.45rem',
          width: '100%',
        }}
      >
        <main className={className}>{children}</main>

      </div>
      <footer>
        <span role="img" aria-label="I">👁️</span>
        <span role="img" aria-label="love">💖</span>
        <span role="img" aria-label="emails">✉️</span>
        <b>
          &nbsp;  ➤&nbsp;
          <a href="mailto:me@rhiannan.online" index="0">me@rhiannan.online</a>
        </b>
      </footer>
    </>
  );
};

Layout.propTypes = {
  className: PropTypes.string,
  currentSection: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  className: '',
  currentSection: '',
};

export default Layout;
