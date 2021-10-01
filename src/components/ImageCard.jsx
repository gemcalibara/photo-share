import React from 'react';

const ImageCard = ({ image }) => {
	
	return (
		<div className='max-w-sm rounded bg-gray-50 overflow-hidden shadow-lg mx-auto '>
			<div className='flex justify-items-start items-center py-4 px-2 '>
				<img
					className='w-10 h-10 mr-2 rounded-full '
					src={image.url}
					alt={image.name}
				/>
				<h2 className='text-xl'>{image.name}</h2>
			</div>
			<a href={image.url} target='_blank' rel='noreferrer'>
				<img src={image.url} alt='img' className='w-full' style={{height: '80%', objectFit: 'cover', width: '100%'}}/>
				<span className='inline-block rounded-full px-3 py-1 text-sm font-bold mb-2 text-center' style={{width: '100%', textAlign: 'center'}}>
					DOWNLOAD
				</span>
			</a>
		</div>
	);
};

export default ImageCard;
