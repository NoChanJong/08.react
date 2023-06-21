import React from 'react';
import { useFetch } from '../customhooks/useFetch';

const baseUrl = 'http://jsonplaceholder.typicode.com/';

const Hook09_03CustomHook = () => {

	const {data: userData} = useFetch(baseUrl, 'users');
	const {data: postData} = useFetch(baseUrl, 'posts');
	const {data: todoData} = useFetch(baseUrl, 'todos');
	
	return (
		<div>
			<h1>useFetch( Custom Hook )</h1>
			<h3>😉 Users</h3>
			{userData && <pre>{JSON.stringify(userData[0], null, 2)}</pre>}
			<h3>😃 Posts</h3>
			{userData && <pre>{JSON.stringify(userData[0], null, 2)}</pre>}
			<h3>🐱 Todos</h3>
			{userData && <pre>{JSON.stringify(userData[0], null, 2)}</pre>}
		</div>
	);
};

export default Hook09_03CustomHook;