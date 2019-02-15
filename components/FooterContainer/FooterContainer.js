import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../Footer'

const FooterContainer = ({ feedbackEmail, prisonStaffHubUrl }) => {
  const link = (text, href, newTab) => ({ text, href, target: newTab ? '_blank' : undefined })

  const footerNavigation = [
    {
      title: 'Useful links',
      items: [
        link('Features', `${prisonStaffHubUrl}/content/features`, true),
        link('Roadmap', `${prisonStaffHubUrl}/content/roadmap`, true),
        link('Support', `${prisonStaffHubUrl}/content/support`, true),
        link("What's new", `${prisonStaffHubUrl}/content/whats-new`, true),
      ],
    },
  ]

  const footerMeta = {
    items: [
      { text: 'Contact', href: `mailto:${feedbackEmail}` },
      link('Terms and conditions', `${prisonStaffHubUrl}/content/terms-conditions`, true),
    ],
  }
  return <Footer meta={footerMeta} navigation={footerNavigation} />
}

FooterContainer.propTypes = {
  feedbackEmail: PropTypes.string.isRequired,
  prisonStaffHubUrl: PropTypes.string.isRequired,
}

export default FooterContainer
