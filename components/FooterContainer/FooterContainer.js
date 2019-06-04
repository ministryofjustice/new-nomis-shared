import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Footer from '@govuk-react/footer'
import { MEDIA_QUERIES, GUTTER, GUTTER_HALF, GUTTER_PX } from '@govuk-react/constants'
import crest from './images/govuk-crest-2x.png'

const MAX_WIDTH_PX = 1170
const MAX_WIDTH = `${MAX_WIDTH_PX}px`

const WideContainer = styled(Footer.WidthContainer)`
  max-width: ${MAX_WIDTH};
  margin: 0 ${GUTTER_HALF};

  ${MEDIA_QUERIES.TABLET} {
    margin: 0 ${GUTTER};
  }

  @media screen and (min-width: ${MAX_WIDTH_PX + GUTTER_PX * 2}px) {
    margin: 0 auto;
  }
`

const FooterContainer = ({ feedbackEmail, prisonStaffHubUrl }) => {
  const copyright = {
    text: 'Crown copyright',
    link:
      'https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/',
    image: {
      source: crest,
      height: 102,
      width: 125,
    },
  }

  const meta = (
    <Footer.MetaLinks heading="Support links">
      <Footer.Link href={`mailto:${feedbackEmail}`}>Contact</Footer.Link>
      <Footer.Link href={`${prisonStaffHubUrl}content/terms-conditions`} target="_blank">
        Terms and conditions
      </Footer.Link>
    </Footer.MetaLinks>
  )

  return (
    <Footer copyright={copyright} meta={meta} container={WideContainer}>
      <Footer.Navigation>
        <Footer.NavigationLinks heading="Useful links">
          <Footer.Link href={`${prisonStaffHubUrl}content/features`} target="_blank">
            Features
          </Footer.Link>
          <Footer.Link href={`${prisonStaffHubUrl}content/roadmap`} target="_blank">
            Roadmap
          </Footer.Link>
          <Footer.Link href={`${prisonStaffHubUrl}content/support`} target="_blank">
            Support
          </Footer.Link>
          <Footer.Link href={`${prisonStaffHubUrl}content/whats-new`} target="_blank">
            What&apos;s new
          </Footer.Link>
        </Footer.NavigationLinks>
      </Footer.Navigation>
    </Footer>
  )
}

FooterContainer.propTypes = {
  feedbackEmail: PropTypes.string.isRequired,
  prisonStaffHubUrl: PropTypes.string,
}

FooterContainer.defaultProps = {
  prisonStaffHubUrl: undefined,
}

export default FooterContainer
