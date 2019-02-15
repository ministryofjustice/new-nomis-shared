import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../Footer'

const FooterContainer = ({ feedbackEmail, prisonStaffHubUrl }) => {
  const footerNavigation = [
    {
      title: 'Useful links',
      items: [
        { text: 'Features', href: `${prisonStaffHubUrl}/content/features`, target: '_blank' },
        { text: 'Roadmap', href: `${prisonStaffHubUrl}/content/roadmap`, target: '_blank' },
        { text: 'Support', href: `${prisonStaffHubUrl}/content/support`, target: '_blank' },
        { text: "What's new", href: `${prisonStaffHubUrl}/content/whats-new`, target: '_blank' },
      ],
    },
  ]

  const footerMeta = {
    items: [
      { text: 'Contact', href: `mailto:${feedbackEmail}` },
      { text: 'Terms and conditions', href: `${prisonStaffHubUrl}/content/terms-conditions`, target: '_blank' },
    ],
  }
  return <Footer meta={footerMeta} navigation={footerNavigation} />
}

FooterContainer.propTypes = {
  feedbackEmail: PropTypes.string.isRequired,
  prisonStaffHubUrl: PropTypes.string.isRequired,
}

export default FooterContainer
