import { Outlet } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"
import { initialShopiNavbarLeft } from "../../constants/shopiNavbar"
import { initialShopiNavbarRight } from "../../constants/shopiNavbar"
import { INavbarObject } from "../../interfaces/INavbar"
import Layout from "../../components/Layout/Layout"
import { useState } from "react"

export const NavPage = () => {

    const [navbarLeft, setNavbarLeft] = useState<INavbarObject[]>(initialShopiNavbarLeft);
    const [navbarRight, setNavbarRight] = useState<INavbarObject[]>(initialShopiNavbarRight);

    return (
        <>
            <Navbar navLeft={navbarLeft} navRight={navbarRight} />
            <Layout>
                <Outlet />
            </Layout>
        </>
    )
}