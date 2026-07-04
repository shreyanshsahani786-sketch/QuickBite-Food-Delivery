import {
    HiOutlineHome,
    HiOutlineBuildingStorefront,
    HiOutlineShoppingCart,
    HiOutlineHeart,
} from "react-icons/hi2";

const navigation = [{
        label: "Home",
        path: "/",
        icon: HiOutlineHome,
    },
    {
        label: "Restaurants",
        path: "/restaurants",
        icon: HiOutlineBuildingStorefront,
    },
    {
        label: "Wishlist",
        path: "/wishlist",
        icon: HiOutlineHeart,
    },
    {
        label: "Cart",
        path: "/cart",
        icon: HiOutlineShoppingCart,
    },
];

export default navigation;