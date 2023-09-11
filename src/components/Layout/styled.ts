import styled from 'styled-components'

export const Title = styled.h3`
  color: white;
`

export const Background = styled.div`
  background-color: ${props => props.color};
`

export const Container = styled.div`
  min-width: 1280px;
  margin: 0 auto;
`

export const FooterContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 16px auto;
  background-color: #111827;
  color: white;
`