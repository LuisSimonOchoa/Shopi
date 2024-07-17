import axiosStore from "./httpCommon";

const getProducts = () => {
    return axiosStore.get('/products');
}

const ShopPlatziService = {
    getProducts
}

export default ShopPlatziService;