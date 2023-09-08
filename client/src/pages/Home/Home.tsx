import Carousel from '../../components/Carousel'

const Home = (): JSX.Element => {
	return (
		<div className='flex w-full h-full p-8 items-center justify-evenly'>
		  {/* Contenedor de la tarjeta de presentación */}
		  <figure className='flex rounded-xl p-8'>
			<div className='max-w-2xl text-center items-center flex p-2'>
			  <img src="imagenes/foto.png" alt="foto" className='w-48 h-48 rounded-full mx-auto mt-4' />
			  <div className='pt-6 text-center space-y-4'>
				<p className='text-sm md:text-base lg:text-xl font-special'>
				  Soy un desarrollador Front-end con sólida base en tecnologías clave
				  como JavaScript, Node.js, HTML, CSS, Bootstrap, Tailwind y Next.js.
				  Comprometido con la excelencia, habituado a trabajar con tecnologías
				  ágiles y autodidacta. He desarrollado proyectos personales y grupales
				  demostrando creatividad y capacidad de resolución de problemas.
				</p>
			  </div>
			</div>
		  </figure>
		  {/* Carrusel de imágenes */}
		  <div>
			<Carousel />
		  </div>
		</div>
	  )
	}


export default Home
