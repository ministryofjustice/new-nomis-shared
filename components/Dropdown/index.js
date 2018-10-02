import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getPrisonDescription, toFullName } from '../../utils';

import './dropdown.scss';
import '../common.scss';

class Dropdown extends Component {
  render () {
    const { user, switchCaseLoad, history, menuOpen, setMenuOpen, extraLinks } = this.props;
    const caseLoadDesc = getPrisonDescription(user);
    const options = user.caseLoadOptions.filter(x => x.caseLoadId !== user.activeCaseLoadId);

    return (
      <div className="menu-wrapper" >
        <div id="info-wrapper" className="info-wrapper clickable" onClick={() => setMenuOpen(!menuOpen)}>
          <strong className="user-name">{toFullName(user)}</strong>
          <span className="case-load">{caseLoadDesc}</span>
        </div>
        <div className="dropdown-menu">
          { menuOpen &&
          <div>
            {extraLinks.map(link => (
              <a className="dropdown-menu-option" key={link.url} href={link.url} onClick={() => setMenuOpen(!menuOpen)}>
                {link.text}
              </a>))}
            {options.map((option) =>
              (<a className="dropdown-menu-option" id={`menu-option-${option.caseLoadId}`} key={option.caseLoadId} onClick={() => {
                setMenuOpen(false);
                switchCaseLoad(option.caseLoadId);
                history.push("/");
              }}>
                {option.description}
              </a>))
            }
            <a className="dropdown-menu-link" key={'logout'} href={'/auth/logout'}>
              Log out
            </a>
          </div> }
        </div>
      </div>
    );
  }
}

Dropdown.propTypes = {
  user: PropTypes.object,
  menuOpen: PropTypes.bool,
  setMenuOpen: PropTypes.func.isRequired,
  switchCaseLoad: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

Dropdown.defaultProps = {
  user: {
    firstName: 'first',
    activeCaseLoadId: 'id',
    isOpen: false
  },
  menuOpen: false,
  extraLinks: []
};


export default Dropdown;
