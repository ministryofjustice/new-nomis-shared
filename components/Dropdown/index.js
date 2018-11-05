import React from 'react'
import PropTypes from 'prop-types'
import ReactRouterPropTypes from 'react-router-prop-types'
import { getPrisonDescription, toFullName } from '../../utils'

import './dropdown.scss'
import '../common.scss'

const createMenuOptionId = text => `menu-option-${text && text.replace(' ', '-')}`

const Dropdown = ({ user, switchCaseLoad, history, menuOpen, setMenuOpen, extraLinks, caseChangeRedirect }) => {
  const caseLoadDesc = getPrisonDescription(user)
  const options = user.caseLoadOptions.filter(x => x.caseLoadId !== user.activeCaseLoadId)

  return (
    <div className="menu-wrapper">
      <div id="info-wrapper" className="info-wrapper clickable" onClick={() => setMenuOpen(!menuOpen)}>
        <strong className="user-name">{toFullName(user)}</strong>
        <span className="case-load">{caseLoadDesc}</span>
      </div>
      <div className="dropdown-menu">
        {menuOpen && (
          <div>
            {extraLinks.map(link => (
              <a
                className="dropdown-menu-option"
                id={createMenuOptionId(link.text)}
                key={link.text}
                href={link.url}
                onClick={() => {
                  setMenuOpen(!menuOpen)
                  if (link.onClick) {
                    link.onClick()
                  }
                }}
              >
                {link.text}
              </a>
            ))}
            {options.map(option => (
              <a
                className="dropdown-menu-option"
                id={`menu-option-${option.caseLoadId}`}
                key={option.caseLoadId}
                onClick={() => {
                  setMenuOpen(false)
                  switchCaseLoad(option.caseLoadId)
                  caseChangeRedirect && history.push('/')
                }}
              >
                {option.description}
              </a>
            ))}
            <a className="dropdown-menu-link" key="logout" href="/auth/logout">
              Log out
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

Dropdown.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    activeCaseLoadId: PropTypes.string,
    isOpen: PropTypes.bool,
    caseLoadOptions: PropTypes.arrayOf(
      PropTypes.shape({ caseLoadId: PropTypes.string.isRequired, description: PropTypes.string.isRequired })
    ).isRequired,
  }),
  menuOpen: PropTypes.bool,
  setMenuOpen: PropTypes.func.isRequired,
  switchCaseLoad: PropTypes.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  caseChangeRedirect: PropTypes.bool,
  extraLinks: PropTypes.arrayOf(
    PropTypes.shape({ url: PropTypes.string.isRequired, text: PropTypes.string.isRequired, onclick: PropTypes.func })
  ),
}

Dropdown.defaultProps = {
  user: {
    firstName: 'first',
    activeCaseLoadId: 'id',
    isOpen: false,
  },
  menuOpen: false,
  extraLinks: [],
  caseChangeRedirect: true,
}

export default Dropdown
