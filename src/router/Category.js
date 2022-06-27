import { useLocation } from 'react-router-dom';

function Category() {
	let url = useLocation();
	console.log(url);
	return (
		<>
			<a href="/cat">Назад</a>
			<ul>
				
				<li><a href={`${url.pathname}/pay`}>Перейти к оплате</a></li>
			</ul>
		</>
	);
}

export default Category;