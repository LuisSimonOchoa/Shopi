import { NavLink } from "react-router-dom";
import { NavbarProps } from "../../interfaces/INavbar";
import { INavbarObject } from "../../interfaces/INavbar";

const Navbar = ({
    navLeft = [],
    navRight = []
}: NavbarProps) => {
    const activeStyle = 'underline underline-offset-4';

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                {
                    navLeft.map((li: INavbarObject) => (
                        <li className={li?.style}>
                            <NavLink to={li.url} className={({ isActive }) => isActive ? activeStyle : undefined}>
                                {li.name}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
            <ul className="flex items-center gap-3">
                {
                    navRight.map((li: INavbarObject) => (
                        <li className={li?.style}>
                            <NavLink to={li.url} className={({ isActive }) => isActive ? activeStyle : undefined}>
                                {li.name}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navbar;