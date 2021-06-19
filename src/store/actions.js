import { HIDE_MODAL, SHOW_MODAL } from "./actionTypes";

export const showModal = (data) => {
  return { type: SHOW_MODAL, payload: data };
};

export const hideModal = (modalIndex) => {
  return { type: HIDE_MODAL, payload: modalIndex };
};
