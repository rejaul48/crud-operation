import React from 'react'
import Header from '../../components/Header/Header'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <>
            <section className='max-w-7xl mx-auto'>
                <div>
                    <Header ></Header>
                </div>
                <Outlet ></Outlet>
            </section>
        </>
    )
}

export default MainLayout
