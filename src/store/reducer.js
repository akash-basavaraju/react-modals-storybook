import { HIDE_MODAL, SHOW_MODAL } from "./actionTypes";

const initialState = { modalStack: [] };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL: {
      return { modalStack: [...state.modalStack, action.payload] };
    }
    case HIDE_MODAL: {
      const mModalStack = [...state.modalStack];
      debugger;
      if (action.payload || action.payload === 0) {
        mModalStack.splice(action.payload, 1);
      } else {
        mModalStack.pop();
      }

      return { modalStack: mModalStack };
    }
  }
  return state;
}
