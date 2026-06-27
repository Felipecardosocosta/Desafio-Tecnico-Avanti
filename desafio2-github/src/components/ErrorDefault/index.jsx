import React from 'react'

const ErrorDefault = () => {
    return (
        <div className='w-[50%] bg-[#D9D9D9] text-[#FF0000] rounded-md p-4 flex items-center justify-center flex-col' >
            <p className=''>Nenhum perfil foi encontrado com esse nome de usuário.

            </p>

            <p>
                Tente novamente</p>
        </div>
    )
}

export default ErrorDefault
