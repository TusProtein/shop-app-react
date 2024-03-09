import DetailProduct from '../pages/DetailProduct/DetailProduct';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Order from '../pages/Order/Order';
import OrderConfirm from '../pages/OrderConfirm/OrderConfirm';
import Register from '../pages/Register/Register';

export const routes = [
    {
        path: '/home',
        page: Home,
        isShowHeader: true,
    },
    {
        path: '/detailProduct',
        page: DetailProduct,
        isShowHeader: true,
    },
    {
        path: '/login',
        page: Login,
    },
    {
        path: '/order',
        page: Order,
        isShowHeader: true,
    },
    {
        path: 'orderConfirm',
        page: OrderConfirm,
        isShowHeader: true,
    },
    {
        path: 'register',
        page: Register,
    },
];
