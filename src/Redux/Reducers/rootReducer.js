import { combineReducers } from "redux";
import {
  setCategoryReducer,
  setProductsReducer,
  setSingleProductReducer,
} from "./reducers";

const rootReducer = combineReducers({
  products: setProductsReducer,
  product: setSingleProductReducer,
  category: setCategoryReducer,
});

export default rootReducer;
