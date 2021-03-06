import styled, { css } from 'styled-components'
import { BLUE, LIGHT_BLUE } from 'govuk-colours'
import { SPACING, NTA_LIGHT } from '@govuk-react/constants'
import downArrowCircle from './images/down-arrow-circle.png'

export const MenuWrapper = styled('div')`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  min-width: 320px;
  background: ${BLUE};
`

export const InfoWrapper = styled('div')`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 ${SPACING.SCALE_4};
  width: 100%;
  padding: 2px ${SPACING.SCALE_4} 2px 0;

  &:before {
    content: '';
    position: absolute;
    right: 0;
    height: ${SPACING.SCALE_4};
    width: ${SPACING.SCALE_4};
    background-image: url(${downArrowCircle});
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;
    transform: ${props => (props.menuOpen ? 'rotate(180deg)' : undefined)};
  }
`

export const UserName = styled('strong')`
  position: relative;
  margin-left: auto;
  padding: 0 10px 0 0;
  font-size: 19px;
`

export const CaseLoad = styled('span')`
  margin-right: auto;
  padding: 0 18px 0 10px;
  font-size: 19px;
  border-left: solid white 1px;
`

export const DropdownMenu = styled('div')`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
  z-index: 1000;
`

const linkStyle = css`
  box-sizing: border-box;
  color: rgba(51, 51, 51, 0.8);
  cursor: pointer;
  display: block;
  padding: 16px 10px;
  background: ${BLUE};
  color: white;
  font-size: 19px;
  font-family: ${NTA_LIGHT};
  align-items: center;
  text-align: left;
  border-width: 1px 0 0;
  border-style: solid;
  border-color: lightblue;
  height: 60px;
  text-decoration: none;
  width: 100%;
  &:hover {
    background: ${LIGHT_BLUE};
  }
`

export const DropdownMenuLink = styled('a')`
  ${linkStyle};
`
