export const loadWishlist = () => {
    try {
        const data = localStorage.getItem("quickbite-wishlist");

        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
};

export const saveWishlist = (items) => {
    localStorage.setItem(
        "quickbite-wishlist",
        JSON.stringify(items)
    );
};