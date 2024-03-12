import { MenuList, MenuWrapper, MenuStyledNavLink } from '.'
import { SpanInterB11, SpanInterR13 } from '@styles/fonts/inter'
import React from 'react'

export const Menu: React.FC = () => {
  return (
    <MenuWrapper>
      <SpanInterB11>Levels</SpanInterB11>
      <MenuList>
        <MenuStyledNavLink to={'/a1'}>
          <SpanInterR13>A1 - Beginner</SpanInterR13>
        </MenuStyledNavLink>
        <MenuStyledNavLink to={'/a2'}>
          <SpanInterR13>A2 - Pre-Intermediate</SpanInterR13>
        </MenuStyledNavLink>
        <MenuStyledNavLink to={'/b1'}>
          <SpanInterR13>B1 - Intermediate</SpanInterR13>
        </MenuStyledNavLink>
        <MenuStyledNavLink to={'/b2'}>
          <SpanInterR13>B2 - Upper-Intermediate</SpanInterR13>
        </MenuStyledNavLink>
        <MenuStyledNavLink to={'/c1'}>
          <SpanInterR13>C1 - Advanced</SpanInterR13>
        </MenuStyledNavLink>
        <MenuStyledNavLink to={'/c2'}>
          <SpanInterR13>C2 - Mastery</SpanInterR13>
        </MenuStyledNavLink>
      </MenuList>
    </MenuWrapper>
  )
}
