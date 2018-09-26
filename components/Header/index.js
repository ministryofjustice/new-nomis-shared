import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../Dropdown';
import './header.scss';
import '../common.scss';

class Header extends Component {
  render () {
    return (
      <header className="page-header">
        <div className="header-content clickable">
          <div className="left-content">
            <a title="Home link" className="link" href={this.props.homeLink}>
              <div className="logo"><img src="/images/Crest@2x.png" alt="" width="42" height="35"/></div>
            </a>
            <a title="Home link" className="unstyled-link" href={this.props.homeLink}>
              <span className="logo-text">{this.props.logoText}</span>
              <span className="title">{this.props.title} </span>
            </a>
          </div>
          <div className="right-content">
            <div className="right-menu">
              {this.props.user && this.props.user.activeCaseLoadId && <Dropdown {...this.props} /> }
            </div>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  homeLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  logoText: PropTypes.string.isRequired,
  user: PropTypes.object,
  history: PropTypes.object.isRequired,
  switchCaseLoad: PropTypes.func.isRequired
};

export default Header;
