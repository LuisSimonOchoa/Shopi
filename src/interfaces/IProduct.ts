export interface IProduct {
    id: string;
    title: string;
    price: number;
    description: string;
    images: string[];
    category: ICategory
}

interface ICategory {
    id: string;
    name: string;
}