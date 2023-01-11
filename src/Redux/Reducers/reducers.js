import {
  SET_CATEGORY,
  SET_PRODUCTS,
  SET_SINGLE_PRODUCT,
} from "../ActionTypes/actionTypes";

export const setProductsReducer = (state = {}, action) => {
  if (action.type === SET_PRODUCTS) {
    return {
      ...state,
      products: action.payload,
    };
  } else {
    return state;
  }
};

export const setSingleProductReducer = (state = {}, action) => {
  if (action.type === SET_SINGLE_PRODUCT) {
    return {
      ...state,
      product: action.payload,
    };
  } else {
    return state;
  }
};

export const setCategoryReducer = (state = {}, action) => {
  if (action.type === SET_CATEGORY) {
    return {
      ...state,
      category: action.payload,
    };
  } else {
    return state;
  }
};
