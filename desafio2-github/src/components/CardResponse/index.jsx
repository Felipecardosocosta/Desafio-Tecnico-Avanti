import React from 'react'

const CardResponse = ({data}) => {
  return (
        <div className='bg-[#D9D9D9] w-full max-w-200 p-8 mt-2 rounded-[25px] flex items-center gap-5'>
              <img src={data?.avatar_url} alt={`${data?.login}'s avatar`} className='max-w-55 max-h-55 rounded-[50%] border-2 border-[#005CFF] ' />

              <div className='user-info'>
                <h2 className='text-[#005CFF] text-2xl mb-2.5'>{data?.name || data.login}</h2>
                <p className='text-[#000000]' >{data?.bio || 'Este usuário não possui uma bio.'}</p>
              </div>
            </div>
  )
}

export default CardResponse
