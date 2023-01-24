import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { getData } from "../Api";

const ContextStatement = createContext();
export const ContextStatementProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [search, setSearch] = useState("");
  const intialState = {
    products: [],
    cart: [],
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "GET_PRODUCTS":
        return { ...state, products: action.payload };
      case "ADD_TO_CART":
        const item = action.payload;
        const Existed = state.cart.find((c) => c.id === item.id);
        if (Existed) {
          return {
            ...state,
            cart: state.cart.map((c) =>
              c.id === item.id ? { ...item } : { ...c }
            ),
          };
        } else {
          return {
            ...state,
            cart: [...state.cart, { ...item }],
          };
        }

      case "REMOVE_CART":
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        };
      case "EMPTY_CART":
        return {
          ...state,
          cart: (state.cart = []),
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, intialState);
  const getProducts = async () => {
    const data = await getData("/products");
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
    // console.log(state.productList);
  }, []);
  useEffect(() => {
    dispatch({ type: "GET_PRODUCTS", payload: productList });
    const filterProductList = productList.filter((pd) =>
      pd.title.toLowerCase().includes(search.toLocaleLowerCase())
    );
    dispatch({ type: "GET_PRODUCTS", payload: filterProductList });
  }, [productList, search]);
  const data = { state, search, setSearch, dispatch };
  return (
    <ContextStatement.Provider value={data}>
      {children}
    </ContextStatement.Provider>
  );
};
//custom hook
export const useContextStatement = () => useContext(ContextStatement);
