import { HIDE_MODAL, SHOW_MODAL } from "./actionTypes";

const initialState = { modalStack: [] };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL: {
      const timeStamp = new Date().getTime();
      return {
        modalStack: [...state.modalStack, { ...action.payload, timeStamp }],
      };
    }
    case HIDE_MODAL: {
      const mModalStack = [...state.modalStack];

      if (action.payload || action.payload === 0) {
        const index = mModalStack.findIndex(
          ({ timeStamp }) => timeStamp === action.payload
        );
        const { onClose } = mModalStack[index];
        onClose();
        index !== -1 && mModalStack.splice(index, 1);
      } else if (mModalStack.length > 0) {
        const { onClose } = mModalStack[mModalStack.length - 1];
        onClose();
        mModalStack.pop();
      }

      return { modalStack: mModalStack };
    }
  }
  return state;
}
