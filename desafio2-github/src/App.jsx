import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { RiGithubFill } from "react-icons/ri"



function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='flex min-h-screen bg-[#202020] bg-circles justify-center items-center '>
      <img className='fixed z-0 opacity-80 top-3 size-55 left-25' src='./svgs/camada_1.png' />
      <section className='bg-black z-1 md:w-240 md:h-110 flex flex-col items-center gap-5' >
        <div className='flex justify-center items-center gap-1 pt-8'>
          <RiGithubFill color='white' size={58} />
          <h1 className='text-white' >
            <span className='text-5xl flex gap-3'>
              Perfil
              <strong>
                GitHub
              </strong>
            </span>
          </h1>
        </div>

        <div className='w-md flex items-center bg-white rounded-md  '  >

          <input
            className='bg-transparent p-3 py-0 rounded-md w-full outline-none'
            type="text"
            placeholder='Digite um usuário do GitHub'
          />
          <button className='flex justify-center items-center p-3 cursor-pointer bg-[#005CFF] rounded-md'>

            <img
              src="./svgs/lupa.svg"
              className=''
              
            />

          </button>



        </div>


      </section>
    </main>
  )
}

export default App
