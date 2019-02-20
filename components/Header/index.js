import React from 'react'
import PropTypes from 'prop-types'
import Dropdown from '../Dropdown'
import './header.scss'
import '../common.scss'

const Header = ({
  homeLink,
  logoText,
  title,
  user,
  menuOpen,
  setMenuOpen,
  switchCaseLoad,
  history,
  caseChangeRedirect,
  extraLinks,
}) => (
  <header className="page-header">
    <div className="header-content clickable">
      <div className="left-content">
        <a title="Home link" className="link" href={homeLink}>
          <div className="logo">
            <img src="/images/Crest@2x.png" alt="" width="42" height="35" />
          </div>
        </a>
        <a title="Home link" className="unstyled-link" href={homeLink}>
          <span className="logo-text">{logoText}</span>
          <span className="title">{title} </span>
        </a>
      </div>
      <div className="right-content">
        <div className="right-menu">
          {user &&
            user.username && (
              <Dropdown
                user={user}
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
                switchCaseLoad={switchCaseLoad}
                history={history}
                caseChangeRedirect={caseChangeRedirect}
                extraLinks={extraLinks}
              />
            )}
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  homeLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  logoText: PropTypes.string.isRequired,
  user: PropTypes.shape({
    username: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    activeCaseLoadId: PropTypes.string,
    isOpen: PropTypes.bool,
  }),
  switchCaseLoad: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  menuOpen: PropTypes.bool,
  setMenuOpen: PropTypes.func.isRequired,
  caseChangeRedirect: PropTypes.bool,
  extraLinks: PropTypes.arrayOf(
    PropTypes.shape({ url: PropTypes.string, text: PropTypes.string.isRequired, onclick: PropTypes.func })
  ),
}

Header.defaultProps = {
  user: {},
  menuOpen: false,
  extraLinks: [],
  caseChangeRedirect: true,
}

// noinspection JSUnusedGlobalSymbols
export default Header
