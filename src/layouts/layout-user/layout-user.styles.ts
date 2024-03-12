import styled from 'styled-components'

export const LayoutUserWrapper = styled.div<{ $backgroundURL?: string }>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: nowrap;
  max-width: 100dvw;
  width: 100%;
  min-height: 100dvh;
  background-image: url(${(props) => props.$backgroundURL});
  overflow: hidden;
`

export const LayoutUserOutlet = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
`
