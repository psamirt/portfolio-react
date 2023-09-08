import {
	BiLogoTypescript,
	BiLogoReact,
	BiLogoTailwindCss,
	BiSolidFileCss,
	BiLogoJavascript,
	BiLogoRedux,
	BiLogoPostgresql,
	BiLogoMongodb,
	BiLogoGithub,
} from 'react-icons/bi'
import { SiNextdotjs } from 'react-icons/si'

const Projects = (): JSX.Element => {
	return (
		<div className='max-w-[1640px] mx-auto flex flex-col md:flex-row justify-between items-center p-4 flex-wrap '>
			{/* Algo Grill */}
			<div className='items-center flex flex-col'>
				<div className='hover:scale-[1.02] ease-in duration-300 '>
					<figure className='rounded-lg shadow-lg p-6 w-[300px] h-[510px] bg-red-950 bg-opacity-75 m-6 ring-4 ring-white'>
						<div className='mb-4'>
							<img
								src='imagenes/algoGrill.png'
								alt='algogrill'
								className='w-96 h-auto mx-auto'
							/>
						</div>
						<div className='mb-4'>
							<h1 className='text-xl font-bold font-special text-center'>
								Algo Grill
							</h1>
							<p className=' text-center italic'>
								Aplicación dedicada la creación y búsqueda de descripción de
								videojuegos.
							</p>
						</div>
						<div>
							<h3 className='text-xl font-semibold mb-2 font-special text-center'>
								Tecnologías Aplicadas
							</h3>
							<ul className='flex items-center justify-center space-x-4 flex-wrap'>
								<li className='flex flex-col items-center'>
									<BiLogoTypescript size={35} className='text-blue-500' />
									<span className='text-xs'>Typescript</span>
								</li>
								<li className='flex flex-col items-center'>
									<BiLogoReact size={35} className='text-blue-400' />
									<span className='text-xs'>React</span>
								</li>
								<li className='flex flex-col items-center'>
									<BiLogoTailwindCss size={35} className='text-teal-400' />
									<span className='text-xs'>Tailwind</span>
								</li>
								<li className='flex flex-col items-center'>
									<BiSolidFileCss size={35} className='text-gray-600' />
									<span className='text-xs'>CSS</span>
								</li>
							</ul>
						</div>
					</figure>
				</div>
				<div className='items-center flex justify-evenly w-full'>
					<a
						href='https://algogrill.vercel.app/'
						target='_blank'
						className=' bg-white rounded-full text-black font-bold p-2 hover:translate-y-[0.7px] hover:bg-slate-200'
					>
						<span>Algo Grill</span>
					</a>{' '}
					<a
						href='https://github.com/psamirt/algogrill'
						target='_blank'
						className='hover:translate-y-[0.7px] hover:text-gray-200'
					>
						<BiLogoGithub size={45} />
					</a>
				</div>
			</div>

			{/* gamerzone */}
			<div className='items-center flex flex-col'>
			<div className='hover:scale-[1.02] ease-in duration-300 '>
					<figure className='rounded-lg shadow-lg p-6 w-[300px] h-[510px] bg-red-950 bg-opacity-75 m-6 ring-4 ring-white'>
						<div className='mb-4'>
							<img
								src='imagenes/homePageGZ.png'
								alt='gamerzone'
								className='w-96 h-auto mx-auto'
							/>
						</div>
						<div className='mb-4'>
							<h1 className='text-xl font-bold font-special text-center'>
								Gamer Zone
							</h1>
							<p className=' text-center italic'>
								Aplicación dedicada la creación y búsqueda de descripción de
								videojuegos.
							</p>
						</div>
						<div>
							<h3 className='text-xl font-semibold mb-2 font-special text-center'>
								Tecnologías Aplicadas
							</h3>
							<ul className='flex items-center justify-center space-x-4 flex-wrap'>
								<li className='flex flex-col items-center'>
									<BiLogoJavascript size={35} className='text-yellow-500' />
									<span className='text-xs'>Javascript</span>
								</li>
								<li className='flex flex-col items-center'>
									<BiLogoReact size={35} className='text-blue-400' />
									<span className='text-xs'>React</span>
								</li>
								<li className='flex flex-col items-center'>
									<BiLogoRedux size={35} className='text-violet-600' />
									<span className='text-xs'>Redux</span>
								</li>
								<li className='flex flex-col items-center'>
									<BiSolidFileCss size={35} className='text-gray-600' />
									<span className='text-xs'>CSS</span>
								</li>
								<li className='flex flex-col items-center'>
									<BiLogoPostgresql size={35} className='text-sky-600' />
									<span className='text-xs'>PostgreSQL</span>
								</li>
							</ul>
						</div>
					</figure>
				</div>
				<div className='items-center flex justify-evenly w-full'>
					<a
						href='https://gamezone-six.vercel.app/'
						target='_blank'
						className=' bg-white rounded-full text-black font-bold p-2 hover:translate-y-[0.7px] hover:bg-slate-200'
					>
						<span>Gamer Zone</span>
					</a>{' '}
					<a
						href='https://github.com/psamirt/Gamer-Zone'
						target='_blank'
						className='hover:translate-y-[0.7px] hover:text-gray-200'
					>
						<BiLogoGithub size={45} />
					</a>
				</div>
			</div>

			{/* ReStore */}
			<div className='items-center flex flex-col'>
			<div className='hover:scale-[1.02] ease-in duration-300 '>
					<figure className='rounded-lg shadow-lg p-6 w-[300px] h-[510px] bg-red-950 bg-opacity-75 m-6 ring-4 ring-white'>
						<div className='mb-4'>
							<img
								src='imagenes/restore.png'
								alt='restore'
								className='w-96 h-auto mx-auto'
							/>
						</div>
						<div className='mb-4'>
							<h1 className='text-xl font-bold font-special text-center'>
								ReStore
							</h1>
							<p className=' text-center italic'>
								E-commerce inspirada en venta de artefactos tecnológicos
								reutilizables.
							</p>
						</div>
						<div>
							<h3 className='text-xl font-semibold mb-2 font-special text-center'>
								Tecnologías Aplicadas
							</h3>
							<ul className='flex items-center justify-center space-x-4 flex-wrap'>
								<li className='flex flex-col items-center'>
									<BiLogoJavascript size={35} className='text-yellow-500' />
									<span className='text-xs'>Javascript</span>
								</li>
								<li className='flex flex-col items-center'>
									<SiNextdotjs
										size={35}
										className='text-slate-950 bg-white rounded-full'
									/>
									<span className='text-xs'>Next.js</span>
								</li>
								<li className='flex flex-col items-center'>
									<BiLogoRedux size={35} className='text-violet-600' />
									<span className='text-xs'>Redux</span>
								</li>
								<li className='flex flex-col items-center'>
									<BiLogoTailwindCss size={35} className='text-teal-400' />
									<span className='text-xs'>Tailwind</span>
								</li>
								<li className='flex flex-col items-center'>
									<BiSolidFileCss size={35} className='text-gray-600' />
									<span className='text-xs'>CSS</span>
								</li>
								<li className='flex flex-col items-center'>
									<BiLogoMongodb size={35} className='text-green-700' />
									<span className='text-xs'>MongoDB</span>
								</li>
							</ul>
						</div>
					</figure>
				</div>
				<div className='items-center flex justify-evenly w-full'>
					<a
						href='https://re-store-six.vercel.app/'
						target='_blank'
						className=' bg-white rounded-full text-black font-bold p-2 hover:translate-y-[0.7px] hover:bg-slate-200'
					>
						<span>ReStore</span>
					</a>{' '}
					<a
						href='https://github.com/psamirt/ReStore'
						target='_blank'
						className='hover:translate-y-[0.7px] hover:text-gray-200'
					>
						<BiLogoGithub size={45} />
					</a>
				</div>
			</div>
		</div>
	)
}

export default Projects
