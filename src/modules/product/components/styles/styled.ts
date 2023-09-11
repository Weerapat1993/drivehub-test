import styled from 'styled-components'

export const Background = styled.div`
  background-color: ${props => props.color};
  min-height: 100px;
  padding: 0 50px;
  margin-bottom: 30px;
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
  max-width: 1280px;
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
  margin: 10px 0;
`

export const FlexEnd = styled.div`
  display: flex;
  height: 100px;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`

export const FlexStart = styled.div`
  display: flex;
  height: 100px;
  width: 200px;
  overflow: hidden;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`