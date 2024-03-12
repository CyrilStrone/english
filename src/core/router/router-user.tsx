import { LayoutUser } from '@layouts/layout-user'
import { Home } from '@pages/home'
import { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

export const AppRoutesUser: FC = () => {
  return (
    <Routes>
      <Route element={<LayoutUser />}>
        <Route path="home" element={<Home />} />
        <Route path="a1" element={<Home />} />
        <Route path="a2" element={<Home />} />
        <Route path="b1" element={<Home />} />
        <Route path="b2" element={<Home />} />
        <Route path="c1" element={<Home />} />
        <Route path="c2" element={<Home />} />
        <Route index element={<Navigate to="/home" />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Route>
    </Routes>
  )
}
