export const loadCart = () => {
    try {
        const data = localStorage.getItem("quickbite-cart");

        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
};

export const saveCart = (items) => {
    localStorage.setItem(
        "quickbite-cart",
        JSON.stringify(items)
    );
};