import { createContext, useReducer } from "react";

export const Cartcontext = createContext();

export const actions = {
  ADD: "ADD",
  INCREASE: "INCREASE",
  DECREASE: "DECREASE",
  REMOVE: "REMOVE",
};

export const Context = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case actions.ADD:
        const existingItem = state.find((item) => action.payload.id === item.id);
        if (existingItem) {
          return state.map((item) => 
          item.id === actions.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
          );
        } else {
          return [...state, { ...action.payload, quantity: 1 }]; 
        }

      case actions.INCREASE:
        return state.map((item) => {
          if (item.id === action.payload.id) {
            const quantity = item.quantity || 0; 
            return { ...item, quantity: quantity + 1 };
          }
          return state;
        });

      case actions.DECREASE:
        return state.map((item) => {
          if (item.id === action.payload.id) {
            const quantity = item.quantity || 0; 
            return { ...item, quantity: quantity > 1 ? quantity - 1 : quantity }; 
          }
          return state;
        });

      case actions.REMOVE:
        return state.filter((item) => item.id !== action.payload.id);

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, []);
  const info = { state, dispatch };

  return (
    <Cartcontext.Provider value={info}>
      {props.children}
    </Cartcontext.Provider>
  );
};
