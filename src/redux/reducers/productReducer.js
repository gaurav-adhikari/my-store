import { ActionTypes } from "../contants/action-types";

const intialState = {
    products: [
        {
            id: 1,
            title: 'Gaurav',
            category: 'software engineer'
        }
    ]
}

export const productsReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;

        default:
            return state;
    }
}