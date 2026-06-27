import React from 'react'

const FormSearch = ({value,setValue,handle}) => {
  return (
    <form onSubmit={handle} className='w-md flex items-center bg-white rounded-md  '  >

          <input
            className='bg-transparent p-3 py-4 rounded-md w-full outline-none'
            type="text"
            placeholder='Digite um usuário do GitHub'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            type='submit'
            className='flex 
                     justify-center 
                     items-center 
                     p-4 
                     cursor-pointer 
                     bg-[#005CFF] 
                     rounded-md'>


            <img
              src="../svgs/lupa.svg"
              className=''

            />

          </button>

        </form>
  )
}

export default FormSearch
