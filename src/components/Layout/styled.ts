import styled from 'styled-components'

export const Title = styled.div`
  color: white;
  height: 80px;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Background = styled.div`
  background-color: ${props => props.color};
`

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  height: 80px;
`

export const FooterContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 16px auto;
  background-color: #111827;
  color: white;
`