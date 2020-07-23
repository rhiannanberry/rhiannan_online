/* eslint-disable max-classes-per-file */
import PropTypes from 'prop-types';
import React from 'react';
import { navigate } from 'gatsby';
import Img from 'gatsby-image';

import './boxes.scss';

export function LinkBox(props) {
  // eslint-disable-next-line object-curly-newline
  const { title, subtitle, headbar, image, className, link, index, children } = props;
  /*
  const titleDiv = headbar
    ? (
      <div className="headbar">
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
      </div>
    ) : (<div className="title">{title}</div>);

    */
  const small = headbar ? '' : 'small';
  const imageDiv = image ? (<Img fluid={image} objectFit="cover" draggable={false} />) : (<></>);
  const imageClass = image ? 'image' : '';
  return (
    <div
      className={`box link ${small} ${className} ${imageClass}`}
      onClick={() => { navigate(link); }}
      onKeyDown={(e) => { if (e.key === 'Enter') navigate(link); }}
      role="link"
      tabIndex={index}
    >
      <div className="shadow"><div className="shadoww" /></div>
      <div className="borders" />

      <div className="headbar">
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
      </div>

      <div className="container">
        {imageDiv}
        {children}
      </div>
    </div>
  );
}

LinkBox.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  headbar: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  image: PropTypes.object,
  className: PropTypes.string,
  link: PropTypes.string,
  index: PropTypes.number,
  children: PropTypes.node,
};

LinkBox.defaultProps = {
  title: '',
  subtitle: '',
  headbar: false,
  image: null,
  className: '',
  link: '',
  index: 0,
  children: null,
};

// collapsible box HAS to be 34px headbar
export class CollapsibleBox extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    dropShadow: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node,
  }

  static defaultProps = {
    title: '',
    dropShadow: false,
    className: '',
    children: null,
  }

  constructor(props) {
    super(props);
    this.state = { open: true };
  }

  render() {
    const { dropShadow, className, title, children } = this.props;
    const localState = this.state;

    return (
      <div className={`box collapsible${
        dropShadow ? ' dropshadow' : ''
      }${localState.open ? ' open' : ' closed'
      } ${className}`}
      >

        <div
          className={`headbar${localState.open ? '' : ' closed'}`}
          onClick={() => this.setState({ open: !localState.open })}
          onKeyDown={(e) => { if (e.key === 'Enter') this.setState({ open: !localState.open }); }}
          aria-checked={localState.open}
          role="switch"
          tabIndex={0}
        >
          {title}
        </div>
        <div className="container">
          {children}
        </div>
      </div>

    );
  }
}
