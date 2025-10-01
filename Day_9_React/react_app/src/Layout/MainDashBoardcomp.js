import React from 'react'
import {Outlet } from 'react-router-dom'
import NavComp from './NavComp'
const MainDashBoardcomp = () => {
    return (
        <div className='container mt3'>
            <div className='card-border-primary'>
                <div className='card-header border-primary'>
                    <NavComp/>
                </div>
                <div className='card-body border-primary'>
                    <Outlet/>
                </div>
                <div className='card-footer border-primary'>
                    
                </div>
            </div>
            <outlet/>
        </div>
    )
}

export default MainDashBoardcomp
