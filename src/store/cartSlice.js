import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		value: {},
	},
	reducers: {
		increment: (state, data) => {
			let articul = data.payload;
			if (state.value[articul] === undefined) state.value[articul] = 0;
			state.value[articul]++;
		},
		minus: (state, data) => {
			let articul = data.payload;
			if (state.value[articul] > 1) state.value[articul]--;
			else delete state.value[data.payload];
		},
		deleteGood: (state, data) => {
			delete state.value[data.payload];
		}
	},
});

export const { increment, minus, deleteGood } = cartSlice.actions;
export const selectCart = state => state.cart.value;
export default cartSlice.reducer;