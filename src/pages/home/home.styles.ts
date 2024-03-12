import styled from 'styled-components'

export const HomeWrapper = styled.form`
  display: flex;
  gap: 48px;
  flex-direction: column;
  padding: 60px 68px;
  box-sizing: border-box;
  border-radius: 16px;
  min-height: 100%;
  background: ${(props) => props.theme.colors.white['100']};
`
