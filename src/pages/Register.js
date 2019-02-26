import React from 'react'
import styled from 'styled-components'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Section = styled.section`
  width: 500px;
  margin: 0 auto;
`

const Register = () => {
  return (
    <div>
      <Header />
      <Section>
        <h2>Register your account</h2>
        <div>
          <label>Name:</label>
          <input type="text" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" />
        </div>
        <input type="submit" value="Register" />
      </Section>
      <Footer />
    </div>
  )
}

export default Register
