import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  text-align: center;
  background: #333;
  color: #fff;
  padding: 10px 0;
`

const Footer = () => {
  return (
    <StyledFooter>
      <small>Copyright 2019 Idea Byte</small>
    </StyledFooter>
  )
}

export default Footer
