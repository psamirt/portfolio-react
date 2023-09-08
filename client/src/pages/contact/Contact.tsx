import React, { useState } from 'react';

const Contact = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
	// Creando backend
    console.log('Formulario enviado:', formData);
  };

  return (
    <div className='py-8'>
      <section className='max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg'>
        <h3 className='text-2xl font-semibold text-center text-black'>
          {' '}
          <span>Contactame</span>
        </h3>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='name' className='block text-gray-700'>
              Nombre
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className='w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-700'>
              Correo electrónico
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='message' className='block text-gray-700'>
              Mensaje
            </label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              cols={30}
              rows={6}
              className='w-full px-4 py-2 mt-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-blue-500'
            ></textarea>
          </div>
          <button
            type='submit'
            className='w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none'
          >
            Enviar
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
