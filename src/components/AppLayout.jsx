import React from 'react'
import { Outlet } from 'react-router-dom'

import { BarComponent } from 'cozy-bar'

import Visio from '@/components/Icons/Visio'
import VisioText from '@/components/Icons/VisioText'

const AppLayout = ({ isPublic }) => {
  return (
    <>
      <BarComponent
        isPublic={isPublic}
        appIcon={Visio}
        appTextIcon={VisioText}
        searchOptions={{ enabled: false }}
      />
      <Outlet />
    </>
  )
}

export default AppLayout
