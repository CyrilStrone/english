import { LayoutAppWrapper } from '.'
import { AppRoutesUser } from '@core/router'
import React from 'react'

export const LayoutApp: React.FC = () => {
  return (
    <LayoutAppWrapper>
      <AppRoutesUser />
    </LayoutAppWrapper>
  )
}
