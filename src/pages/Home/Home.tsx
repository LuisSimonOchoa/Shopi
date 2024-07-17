import { useEffect, useState } from "react";
import ShowGridProducts from "../../components/ShowGrid/ShowGridProducts";
import ShopPlatziService from "../../services/ShopPlatziService";
import { IProduct } from "../../interfaces/IProduct";

const Home = () => {

    const [products, setProducts] = useState<IProduct[]>([]);
    
    useEffect(() => {
        getFakeProducts();
    }, []);

    const getFakeProducts = async () => {
        try {
            const response = await ShopPlatziService.getProducts();
            if (response.status === 200) {
                const dataFormat = response.data.map((item: IProduct) => {
                    const img = item.images[0].match(/"(.*?)"/);
                    return (
                        {
                            ...item,
                            images: [img ? img[1] : ""]
                        }
                    )
                });
                console.log(dataFormat);
                setProducts(dataFormat);
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <>
            Home
            <ShowGridProducts data={products}/>
        </>
    )
}

export default Home;