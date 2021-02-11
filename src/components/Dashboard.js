import React, {useState} from 'react'
import Navbar from './Navbar'
import Menu from './Menu'
import Friends from './Friends'
import {users} from './Users'
import Wall from './Wall'

export function Dashboard() {
    // const [isOpen, setStateSideBar] = useState(false)

    // const handleSideBar = () =>{
    //     setStateSideBar(!stateSideBar);
    // }

    return (
        <div>
            <Navbar />
            <Menu />
            <Wall />
        </div>
    )
}
