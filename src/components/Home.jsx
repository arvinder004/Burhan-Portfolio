import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { FullName } from '../constant/constants';
import Footer from './Footer';

const Home = () => {

	const ref = useRef(0);
	const [text, setText] = useState('');

	useEffect(() => {
		const interval = setInterval(() => {
			if (ref.current < FullName.length) {
				ref.current++;
				setText(() => text + FullName[ref.current - 1]);
			}
		}, 500);
		return () => clearInterval(interval);
	}, [text]);

	return (
		<div className='area relative z-0 bg-black w-screen h-screen'>
			<ul class="circles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			<div className='hero relative h-[calc(100vh)] flex justify-center items-center text-white' id='hero'>
				<div className='pt-4 h-36 backdrop-blur-sm rounded-3xl'>
					<h1 className='text-6xl sm:text-7xl font-extrabold mt-2'>Hi, I'm </h1>
					<h1 className='text-6xl sm:text-7xl font-extrabold mt-2'>Burhanuddin Saifee ;</h1>
					<p className='mt-3 text-xl'>I love to learn and build scalable and optimized project.</p>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Home;