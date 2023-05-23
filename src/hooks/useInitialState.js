'use client';

import { useState } from 'react';

const initialState = {
  cart: [],
  orderIsOpen: false,
  menuIsOpen: false,
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      //mantén el estado que se encuentra actualmente, porque pueden haber más elementos
      ...state,
      //ahora a cart, el elemento que se que existe, agregar lo que esté actualmente ...state.cart y además lo que viene en el payload
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (id) => {
    setState({
      ...state,
      cart: state.cart.filter((item) => item.id !== id),
    });
  };

  const toogleOrder = () => {
    setState({
      ...state,
      orderIsOpen: !state.orderIsOpen,
    });
  };

  const toogleMenu = () => {
    setState({
      ...state,
      menuIsOpen: !state.menuIsOpen,
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
    toogleOrder,
    toogleMenu,
  };
};

export default useInitialState;
