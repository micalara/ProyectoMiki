import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const CartContext = createContext();

export const useCart = () => {
    const context = useContext (CartContext);
    if (!context) {
        throw new Error("useChart debe usarse dentro de un CartProvider");
    }
    return context;
};

export const CartProvider = ({ children}) => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);

    //Verificar si ya esta el producto
    const isInCart = (item) => {
        const inCart = cart.some((element) => element.id === item.id);
        return inCart;
    };

    //Agregar al carrito
    const addItem = (item) => {
        if(isInCart(item)){
            alert("El producto ya existe en el carrito");
            return;
        }

        setCart([...cart, item]);
        alert("Producto agregado al carrito!!");
    };

    //Eliminar del carrito
    const removeItem = (id) => {
        const updateCard = cart.filtrer((element) => element.id !== id);
        setCart(updateCart);
        alert("Producto eliminado!");
    };

    //Vaciar el carrito
    const clearCart = () => {
        setCart([]);
    };

    //Total de items (sin quantity)
    const getTotalItem = () => {
        return cart.length;
    };

    //Total a pagar
    const getCartTotal = ()=> {
        return cart.reduce((acc, element) => acc + element.price, 0);
    };

    //Checkout
    const checkout = () => {
        alert("Su compra ha sido realizada!!!");
        clearCart();
        navigate("/");
    };

    const values = {
        cart, 
        addItem, 
        clearCart, 
        removeItem, 
        getTotalItem, 
        checkout,
    };

    return <CartContext.Provider value={values}>{children}</CartContext.Provider>
};
