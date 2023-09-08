// import React from 'react'

type CardProps = {
	id:number
	nombre: string
	descripcion: string
	precio: number
	imagen: string
}

const Card: React.FC<CardProps> = props => {
	return (
		<div
		key={props.id}
			className='max-w-[300px] sm:max-w-[900px] sm:flex-row flex flex-col m-5 p-4 items-center justify-between
		 bg-zinc-900 rounded shadow-sm shadow-white'
		>
			<img src={props.imagen} alt='imagen' className='w-[250px] p-2' />
			<div className='flex flex-col justify-between text-xs sm:text-base m-2'>
				<div className='flex justify-between pt-2 mt-0 items-center'>
					<h2 className='sm:text-3xl text-lg font-bold underline decoration-wavy mb-2 '>
						{props.nombre}
					</h2>
					<h2 className='text-xl sm:text-3xl font-bold'>.S/ {props.precio.toFixed(2)}</h2>
				</div>
				<p className='italic sm:text-xl text-base '>{props.descripcion}</p>
			</div>
			<button
				className='px-4 py-2 bg-blue-500 text-white rounded
			 hover:bg-blue-600 transition duration-300 ease-in-out'
			>
				Agregar al carrito
			</button>
		</div>
	)
}

export default Card
