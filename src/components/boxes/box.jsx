import PropTypes from 'prop-types';
import React from 'react';
import { navigate } from 'gatsby';

import './boxes.scss';

export default function
Box({ title, titlebar, subtitle, dropShadow, className, link, index, children }) {
  const titleBarDiv = titlebar
    ? (
      <div className="headbar">
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
      </div>
    )
    : (<></>);

  return (
    <div
      className={
                    `box${
                      dropShadow ? ' dropshadow' : ''
                    }${link ? ' link' : ''
                    } ${className}`

                }
      onClick={() => { navigate(link); }}
      onKeyDown={() => { navigate(link); }}
      role="link"
      tabIndex={index}
    >
      <div className="shadow"><div className="shadoww" /></div>
      <div className="borders" />

      <div className="container">
        {children}
      </div>

      {titleBarDiv}

    </div>
  );
}

Box.propTypes = {
  titlebar: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  dropShadow: PropTypes.bool,
  className: PropTypes.string,
  link: PropTypes.string,
  index: PropTypes.number,
  children: PropTypes.node,
};

Box.defaultProps = {
  titlebar: false,
  title: '',
  subtitle: '',
  dropShadow: false,
  className: '',
  link: '',
  index: 0,
  children: null,
};
