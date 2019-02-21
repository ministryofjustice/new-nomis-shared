import React from 'react'
import PropTypes from 'prop-types'
import { getPrisonDescription, toFullName } from '../../utils'
import {
  MenuWrapper,
  InfoWrapper,
  UserName,
  CaseLoad,
  DropdownMenu,
  DropdownMenuButton,
  DropdownMenuLink,
} from './Dropdown.styles'

const createMenuOptionId = text => `menu-option-${text && text.replace(' ', '-')}`

const Dropdown = ({ user, switchCaseLoad, history, menuOpen, setMenuOpen, extraLinks, caseChangeRedirect }) => {
  const caseLoadDesc = getPrisonDescription(user)
  const options = user.caseLoadOptions.filter(x => x.caseLoadId !== user.activeCaseLoadId)

  return (
    <MenuWrapper>
      <InfoWrapper
        id="info-wrapper"
        className="info-wrapper"
        onClick={() => setMenuOpen(!menuOpen)}
        onKeyPress={event => {
          setMenuOpen(!menuOpen)
          event.preventDefault()
        }}
        role="menu"
        tabIndex="0"
        menuOpen={menuOpen}
      >
        <UserName className="user-name">{toFullName(user)}</UserName>
        {caseLoadDesc && <CaseLoad className="case-load">{caseLoadDesc}</CaseLoad>}
      </InfoWrapper>
      <DropdownMenu className="dropdown-menu">
        {menuOpen && (
          <div>
            {extraLinks.map(link => (
              <DropdownMenuLink
                className="dropdown-menu-option"
                id={createMenuOptionId(link.text)}
                key={link.text}
                href={link.url}
                onClick={() => {
                  setMenuOpen(!menuOpen)
                  if (link.onClick) link.onClick()
                }}
              >
                {link.text}
              </DropdownMenuLink>
            ))}
            {options.map(option => (
              <DropdownMenuButton
                type="button"
                className="dropdown-menu-option"
                id={`menu-option-${option.caseLoadId}`}
                key={option.caseLoadId}
                onClick={() => {
                  setMenuOpen(false)
                  switchCaseLoad(option.caseLoadId)
                  if (caseChangeRedirect) history.push('/')
                }}
              >
                {option.description}
              </DropdownMenuButton>
            ))}
            <DropdownMenuLink className="dropdown-menu-link" key="logout" href="/auth/logout">
              Sign out
            </DropdownMenuLink>
          </div>
        )}
      </DropdownMenu>
    </MenuWrapper>
  )
}

Dropdown.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
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
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  caseChangeRedirect: PropTypes.bool,
  extraLinks: PropTypes.arrayOf(
    PropTypes.shape({ url: PropTypes.string, text: PropTypes.string.isRequired, onclick: PropTypes.func })
  ),
}

Dropdown.defaultProps = {
  user: {
    name: '',
    firstName: '',
    activeCaseLoadId: '',
    isOpen: false,
  },
  menuOpen: false,
  extraLinks: [],
  caseChangeRedirect: true,
}

export default Dropdown
