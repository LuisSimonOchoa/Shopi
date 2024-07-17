
export interface INavbarObject {
    name: string;
    url: string;
    style?: string;
}

export interface NavbarProps {
    navLeft?: INavbarObject[];
    navRight?: INavbarObject[];
}