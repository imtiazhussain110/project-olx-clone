import {
  SET_PRODUCTS,
  SET_SINGLE_PRODUCT,
  SET_CATEGORY,
} from "../ActionTypes/actionTypes";

export const setProduct = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const setSingleProduct = (product) => {
  return {
    type: SET_SINGLE_PRODUCT,
    payload: product,
  };
};

export const setCategory = (category) => {
  return {
    type: SET_CATEGORY,
    payload: category,
  };
};
