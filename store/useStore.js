import { create } from "zustand";

const channel = new BroadcastChannel("cart_channel");

const calculateproductTotal = product => {
  const priceString = product.price.replace(/[^\d]/g, "");
  const priceNum = parseInt(priceString);
  return priceNum * product.quantity;
};

const useStore = create((set, get) => ({
  cart: [],

  addProduct: (product, count = 1) =>
    set(prevState => {
      const productIndex = prevState.cart.findIndex(
        prod => prod.id === product.id
      );
      let updatedCart;
      if (productIndex === -1) {
        updatedCart = [...prevState.cart, { ...product, quantity: count }];
      } else {
        updatedCart = [...prevState.cart];
        updatedCart[productIndex] = {
          ...updatedCart[productIndex],
          quantity: updatedCart[productIndex].quantity + count,
        };
      }
      channel.postMessage({ type: "UPDATE", cart: updatedCart });
      return { cart: updatedCart };
    }),

  removeProduct: productId =>
    set(state => {
      const updatedCart = state.cart.filter(
        product => product.id !== productId
      );
      channel.postMessage({ type: "UPDATE", cart: updatedCart });
      return { cart: updatedCart };
    }),

  increaseQuantity: productId => {
    set(state => {
      const productIndex = state.cart.findIndex(
        product => product.id === productId
      );
      if (productIndex === -1) return state;

      const updatedCart = [...state.cart];
      updatedCart[productIndex] = {
        ...updatedCart[productIndex],
        quantity: updatedCart[productIndex].quantity + 1,
      };
      console.log(updatedCart);

      channel.postMessage({ type: "UPDATE", cart: updatedCart });
      return { cart: updatedCart };
    });
  },

  decreaseQuantity: productId =>
    set(state => {
      const productIndex = state.cart.findIndex(
        product => product.id === productId
      );
      if (productIndex === -1) return state;

      let updatedCart = [...state.cart];
      const newQuantity = updatedCart[productIndex].quantity - 1;
      if (newQuantity <= 0) {
        const filteredCart = state.cart.filter(
          product => product.id !== productId
        );
        channel.postMessage({ type: "UPDATE", cart: filteredCart });
        return { cart: filteredCart };
      }

      updatedCart[productIndex] = {
        ...updatedCart[productIndex],
        quantity: newQuantity,
      };
      channel.postMessage({ type: "UPDATE", cart: updatedCart });
      return { cart: updatedCart };
    }),

  totalPrice: product => {
    const total = calculateproductTotal(product);

    const formatter = new Intl.NumberFormat("fa-IR", {
      style: "decimal",
      currency: "IRR",
    });
    return {
      totalProductPrice: total,
      formattedPrice: formatter.format(total),
    };
  },

  totalAmount: () => {
    const { cart } = get();
    const total = cart.reduce(
      (sum, product) => sum + calculateproductTotal(product),
      0
    );

    const formatter = new Intl.NumberFormat("fa-IR", {
      style: "decimal",
      currency: "IRR",
    });
    console.log("total", total);
    console.log("formatted", formatter.format(total));
    return {
      totalAmount: total,
      formatted: formatter.format(total),
    };
  },
}));

channel.onmessage = event => {
  const { type, cart } = event.data;
  if (type === "UPDATE" && cart) {
    useStore.setState({ cart: cart });
  }

  if (type === "REQUEST_STATE") {
    channel.postMessage({ type: "UPDATE", cart: useStore.getState().cart });
  }
};

channel.postMessage({ type: "REQUEST_STATE" });

export default useStore;
