import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
	selectGoods
} from '../store/goodsSlice';

import {
	selectCart,
	minus,
	deleteGood,
} from "../store/cartSlice";

function Cart() {
	const dispatch = useDispatch();
	const goods = useSelector(selectGoods);
	const cart = useSelector(selectCart);

	// переиндексирую массив товаров
	const goodsObj = goods.reduce((accum, item) => {
		accum[item['articul']] = item;
		return accum;
	}, {});
	console.log(goodsObj);

	// считаем общую сумму
	const totalCost = Object.keys(cart).reduce((accum, item) => {
		accum += goodsObj[item]['cost'] * cart[item];
		return accum;
	}, 0);

	let minusHandler = (event) => {
		event.preventDefault();
		let t = event.target;
		console.log(t);
		dispatch(minus(t.getAttribute('data-key')));
	}

	let deleteHandler = (event) => {
		event.preventDefault();
		let t = event.target;
		dispatch(deleteGood(t.getAttribute('data-key')));
	}

	return (
		<>
			<table>
				<thead>
					<tr>
						<td>Название товара</td>
						<td></td>
						<td>Цена (за еденицу)</td>
						<td>Количество</td>
						<td>Стоимость всего товара</td>
						<td><b>-</b></td>
						<td>Удалить</td>
					</tr>
				</thead>
				{Object.keys(cart).map(item => <tbody key={goodsObj[item]['title']}><tr>
					<td>{goodsObj[item]['title']}</td>
					<td><img className="icon-good" src={goodsObj[item]['image']} alt=''/></td>
					<td>{goodsObj[item]['cost']}</td>
					<td>{cart[item]}</td>
					<td>{goodsObj[item]['cost'] * cart[item]}</td>
					<td onClick={minusHandler}><button className="button-minus"  data-key={goodsObj[item]['articul']}>-</button></td>
					<td onClick={deleteHandler}><button className="button-delete"  data-key={goodsObj[item]['articul']}>X</button></td>
				</tr></tbody>
				)}
				<tfoot>
					<tr>
						<td colSpan={6}>Общая стоимость:</td>
						<td>{totalCost}</td>
					</tr>
				</tfoot>
			</table>
		</>
	);
}

export default Cart;