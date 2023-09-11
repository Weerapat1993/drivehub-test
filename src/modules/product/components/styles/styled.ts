import styled from 'styled-components'

export const Background = styled.div`
  background-color: ${props => props.color};
  height: 100px;
`

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

export const ContainerFilter = styled.div`
  width: 1280px;
  margin: 0 auto;
`

export const ContainerContent = styled.div`
  max-width: 1280px;
  min-height: 720px;
  margin: 0 auto;
  padding: 24px 0;
`

export const MarginAuto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FlexEnd = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`