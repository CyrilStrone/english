import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const MenuWrapper = styled.div`
  width: 180px;
  min-width: 180px;
  min-height: 100dvh;
  height: 100%;
  position: relative;
  backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  background-color: ${(props) => props.theme.colors.other.e3e3e6};
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`

export const MenuStyledNavLink = styled(NavLink)`
  text-decoration: none;
  & span {
    color: ${(props) => props.theme.colors.black[50]};
    transition: all 0.2s ease;

    &:hover {
      text-shadow: 0px 4px 8px ${(props) => props.theme.colors.other[505050]};
    }
  }
  &.active {
    & span {
      text-shadow: 0px 4px 8px ${(props) => props.theme.colors.other[505050]};
      color: ${(props) => props.theme.colors.black[100]};
      transform: scale(2);
    }
  }
`
