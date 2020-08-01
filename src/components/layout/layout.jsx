/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link, navigate } from 'gatsby';

import GithubLogo from '../../icons/github2.svg';
import TwitterLogo from '../../icons/twitter.svg';

import './layout.scss';

function isCurrentSection(currentSection, value) {
  return currentSection === value ? ' current' : '';
}

function header(currentSection) {
  return (
    <header>

      <div
        id="title"
        onClick={() => { navigate('/'); }}
        onKeyDown={(e) => { if (e.key === 'Enter') navigate('/'); }}
        role="link"
        tabIndex={0}
      >
        <div>
          RHIANNAN
        </div>
        <div>
          ISONLINE
        </div>
      </div>
      <div className="links">
        <div className="column">
          <Link to="/projects" className={`link${isCurrentSection(currentSection, 'projects')}`}>projects</Link>
          <Link to="/resume" className={`link${isCurrentSection(currentSection, 'resume')}`}>resume</Link>
          <Link to="/blog" className={`link${isCurrentSection(currentSection, 'blog')}`}>blog</Link>
        </div>

        <div className="column">
          <a href="https://twitter.com/rhiannan_online" target="_blank" className="link" id="twitter">
            <span>twitter</span>
            <TwitterLogo/>
          </a>
          <a href="https://github.com/rhiannanberry" target="_blank" className="link" id="github">
            <span>github</span>
            <GithubLogo/>
          </a>
          <div
            style={{
              pointerEvents: 'none',
              userSelect: 'none',
              MozUserSelect: 'none',
              WebkitUserSelect: 'none',
              msUserSelect: 'none',
            }}
          >
            {' '}
  &nbsp;
          </div>
        </div>
      </div>

    </header>
  );
}

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
      {header(currentSection)}
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
