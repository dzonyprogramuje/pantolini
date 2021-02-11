import React, {useState} from 'react'

import Navbar from './Navbar'
import SideBar from './SideBar'
// import Friends from './Friends'
import Wall from './Wall'

export function Dashboard() {

    return (
        <div>
            <Navbar />
            <SideBar />
            <Wall />
        </div>
    )
}
