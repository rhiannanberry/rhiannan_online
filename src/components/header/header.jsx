import { Link, navigate } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

function isCurrentSection(currentSection, value) {
  return currentSection === value ? ' current' : '';
}

const Header = ({ siteTitle, currentSection }) => (
  <header>

    <div
      id="title"
      onClick={() => { navigate('/'); }}
      onKeyDown={(e) => { if (e.key === 'Enter') navigate('/'); }}
      role="link"
      tabIndex={0}
    >
      RHIANNAN
      <br />
      ISONLINE
    </div>

    <div className="links">
      <Link to="/projects" className={`link${isCurrentSection(currentSection, 'projects')}`}>projects</Link>
      <Link to="/resume" className={`link${isCurrentSection(currentSection, 'resume')}`}>resume</Link>
      <Link to="/blog" className={`link${isCurrentSection(currentSection, 'blog')}`}>blog</Link>
    </div>

    <div className="links outside">
      <a href="https://twitter.com/rhiannan_online" target="_blank" className="link" id="twitter">twitter</a>
      <a href="https://github.com/rhiannanberry" target="_blank" className="link" id="github">github</a>
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

  </header>
);



Header.propTypes = {
  siteTitle: PropTypes.string,
  currentSection: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
  currentSection: '',
};

export default Header;
