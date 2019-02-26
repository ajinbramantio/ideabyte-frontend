import React from 'react'
import styled from 'styled-components'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Section = styled.section`
  width: 500px;
  margin: 0 auto;
`

const About = () => {
  return (
    <div>
      <Header />
      <Section>
        <h2>About Page</h2>
        <p>
          Idea Byte helps ideators, innovators, developers, and any other humans
          to find and share ideas for inspiration. To date, there has been
          plenty of ideas — big and small — have come to be shared in the
          community.
        </p>
        <p>Welcome to Idea Byte!</p>
      </Section>
      <Footer />
    </div>
  )
}

export default About
