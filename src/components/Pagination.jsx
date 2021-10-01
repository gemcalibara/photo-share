import React from 'react';

const PaginationItem = ({ index, choosePage, page }) => (
	<div
		onClick={() => choosePage(index)}
		className={`relative justify-center inline-flex  items-center  border rounded-full w-10 h-10 cursor-pointer mr-1 text-sm font-medium ${
			index === page
				? ' bg-blue-400 text-white '
				: 'border-gray-300 bg-white  text-gray-700'
		} `}>
		{index}
	</div>
);

const Pagination = ({ page, total, choosePage, imagesPerPage }) => {
	// Calculate images number
	const pagesNumber = Math.floor(total / imagesPerPage);

	let pages = [];
	for (let index = 1; index <= 8; index++) {
		pages.push(index);
	}

	return (
		<div className='max-w-xl rounded overflow-hidden my-10 mx-auto flex justify-between  '>
			{page !== 1 && (
				<div
					className='relative justify-center inline-flex  items-center  border rounded-full w-10 h-10 cursor-pointer mr-2 border-gray-300 bg-white text-sm font-medium text-gray-700'
					onClick={() => choosePage(page - 1)}>
					<svg
						className='h-3 w-3'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 20 20'
						fill='currentColor'
						aria-hidden='true'>
						<path
							fillRule='evenodd'
							d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
							clipRule='evenodd'
						/>
					</svg>
				</div>
			)}
			{pages.map((item) => (
				<PaginationItem
					key={item}
					index={item}
					page={page}
					choosePage={choosePage}
				/>
			))}
			{page !== pagesNumber && (
				<div
					onClick={() => choosePage(page + 1)}
					className='relative  justify-center inline-flex items-center  border rounded-full w-10 h-10 cursor-pointer mr-2 border-gray-300 bg-white text-lg font-medium text-gray-700'>
					<svg
						className='h-3 w-3'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 20 20'
						fill='currentColor'
						aria-hidden='true'>
						<path
							fillRule='evenodd'
							d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
							clipRule='evenodd'
						/>
					</svg>
				</div>
			)}
		</div>
	);
};

export default Pagination;
