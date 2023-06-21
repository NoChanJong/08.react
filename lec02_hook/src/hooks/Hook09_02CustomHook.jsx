import React from 'react';
import { useFetch } from '../customhooks/useFetch';

const baseUrl = 'http://jsonplaceholder.typicode.com/';

const Hook09_02CustomHook = () => {
	// 1. useFetch 커스텀훅 적용 전
	// const [data, setDate] = useState('');

	// const fetchUrl = (type) => {
	// 	fetch('http://jsonplaceholder.typicode.com/' + type)
	// 		.then(res => res.json())
	// 		// .then(res => console.log(res));
	// 		.then(res => setDate(res));
	// }

	// useEffect(() => {
	// 	fetchUrl('posts')
	// }, []);

	// 2. useFetch 커스텀훅 적용 후
	const {data, fetchUrl} = useFetch(baseUrl, 'users');
	
	return (
		<div>
			<h1>useFetch( Custom Hook )</h1>
			<button onClick={() => fetchUrl('users')}>Users</button>{'  '}
			<button onClick={() => fetchUrl('posts')}>Posts</button>{'  '}
			<button onClick={() => fetchUrl('todos')}>Todos</button>{'  '}
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	);
};

export default Hook09_02CustomHook;