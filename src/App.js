/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import './assets/main.css';
import './assets/style.css';
import ImageCard from './components/ImageCard';
import Pagination from './components/Pagination';

function App() {
	const [images, imagesSet] = useState([]);
	const [isLoading, isLoadingSet] = useState(true);
	const [imagesPerPage, imagesPerPageSet] = useState(3);
	const [page, pageSet] = useState(1);
	const [totalImages, totalImagesSet] = useState(null);
	const [category, categorySet] = useState('architecture');

	const choosePage = async (pageChosen) => {
		await pageSet(pageChosen);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	useEffect(() => {
		isLoadingSet(false);
		const url = process.env.REACT_APP_IMAGE_API
		fetch(`${url}=${category}&page=${page}`)
			.then((res) => res.json())
			.then((data) => {
				isLoadingSet(false);
				imagesSet(data);
				totalImagesSet(data.length);
			})
			.catch((err) => {
				isLoadingSet(false);
				console.log(err);
			});
	}, [category, page]);

	const handleChange=(e)=>{
		categorySet(e.target.value)
		pageSet(1);
		console.log(e.target.value)
    }

	return (
		<div className='container mx-auto'>
			<h1 className='text-5xl text-center mx-auto mt-32' style={{marginTop: '20px' }}>Photo Sharing</h1>
			<div className="flex items-center justify-center mt-6">
				<div>
					<label className="flex items-center space-x-3 mb-3">
						<input type="radio" name="architecture" id="architecture" value="architecture" onChange={handleChange} className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none"/>
						<span className="text-gray-700 dark:text-white font-normal">
							Architecture
						</span>
					</label>
					<label className="flex items-center space-x-3 mb-3">
					<input type="radio" name="fashion" id="fashion" value="fashion" onChange={handleChange} className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-pink-500 checked:border-transparent focus:outline-none"/>
						<span className="text-gray-700 dark:text-white font-normal">
							Fashion
						</span>
					</label>
					<label className="flex items-center space-x-3 mb-3">
					<input type="radio" name="nature" id="nature" value="nature" onChange={handleChange} className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-pink-500 checked:border-transparent focus:outline-none"/>
						<span className="text-gray-700 dark:text-white font-normal">
							Nature
						</span>
					</label>
				</div>
			</div>
			<center><h2 className='text-3xl text-center mx-auto mt-32' style={{marginTop: '10px', marginBottom: '10px'}}>Your current image category is {category}</h2></center>
			{!isLoading && images.length === 0 && (
				<h1 className='text-5xl text-center mx-auto mt-32'>No Images Found</h1>
			)}
			{isLoading ? (
				<h1 className='text-6xl text-center mx-auto mt-32'>Loading</h1>
			) : (
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
					{images.map((image) => (
						<ImageCard key={image.name.replace(/\D+/g,'')} image={image} />
					))}
				</div>
			)}
			<Pagination
				total={totalImages}
				page={page}
				choosePage={choosePage}
				imagesPerPage={imagesPerPage}
			/>
		</div>
	);
}

export default App;
