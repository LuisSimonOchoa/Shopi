import { INavbarObject } from "../interfaces/INavbar"

export const initialShopiNavbarLeft: INavbarObject[] = [
    {
        name: "Shopify",
        url: '/',
        style: 'font-semibold text-lg'
    },
    {
        name: "All",
        url: '/'
    },
    {
        name: "Clothes",
        url: '/clothes'
    },
    {
        name: "Electronics",
        url: '/electronics'
    },
    {
        name: "Furnitures",
        url: '/furnitures'
    },
    {
        name: "Others",
        url: '/others'
    }
]

export const initialShopiNavbarRight: INavbarObject[] = [
    {
        name: "My Orders",
        url: '/my-orders'
    },
    {
        name: "My Account",
        url: '/my-account'
    },
    {
        name: "Sign In",
        url: '/sign-in'
    },
]