import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"



// challenge:
//       Make the header component working again!

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}
