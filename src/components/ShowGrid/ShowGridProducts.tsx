import { IProduct } from "../../interfaces/IProduct"
import Card from "../Card/Card"

interface IShowGrid {
    data: IProduct[]
}

const ShowGridProducts = ({
    data = []
}: IShowGrid) => {

    return (
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
            {
                data.map((item: IProduct) => (
                    <Card item={item}/>
                ))
            }
        </div>
    )
}

export default ShowGridProducts;