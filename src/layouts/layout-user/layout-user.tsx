import { LayoutUserOutlet, LayoutUserWrapper } from '.'
import { Menu } from '@components/menu'
import { Outlet } from 'react-router-dom'

export const LayoutUser: React.FC = () => {
  return (
    <LayoutUserWrapper>
      <Menu />
      <LayoutUserOutlet>
        <Outlet />
      </LayoutUserOutlet>
    </LayoutUserWrapper>
  )
}
