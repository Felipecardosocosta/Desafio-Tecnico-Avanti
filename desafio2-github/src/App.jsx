import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { RiGithubFill } from "react-icons/ri"
import { flushSync } from 'react-dom'
import axios from 'axios'
import { RingLoader } from "react-spinners"




function App() {



  const [loading, setLoading] = useState(false)

  const [error, setError] = useState(false)

  const [userData, setUserData] = useState(null)

  const [search, setSearch] = useState("")






  const handleSearch = async () => {
    setLoading(true)
    setUserData(null)
    setError(false)

    if (search.length === 0) {
      return
    }


  

    try {
      const response = await axios.get(`https://api.github.com/users/${search.trim()}`)
      console.log(response);


      if (response.status !== 200) {

        setError(true)
        setLoading(false)
        return
      }

      setUserData(response.data)
      setLoading(false)

    } catch (error) {


      setError(true)
      setLoading(false)
      console.error("Erro interno no servidor", error)

    }

  }





  return (
    <main className='flex min-h-screen bg-[#202020] bg-circles justify-center items-center '>
      <img className='fixed z-0 opacity-80 top-5 size-55 left-20' src='./svgs/camada_1.png' />
      <section className='bg-black 
                            z-1 
                        
                            md:w-275 
                            md:h-130 
                            
                            flex 
                            flex-col 
                            items-center 
                            gap-5' >
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
            className='bg-transparent p-3 py-4 rounded-md w-full outline-none'
            type="text"
            placeholder='Digite um usuário do GitHub'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className='flex 
                     justify-center 
                     items-center 
                     p-4 
                     cursor-pointer 
                     bg-[#005CFF] 
                     rounded-md'>


            <img
              src="./svgs/lupa.svg"
              className=''

            />

          </button>

        </div>


        {error && (
          <div className='w-[50%] bg-[#D9D9D9] text-[#FF0000] rounded-md p-4 flex items-center justify-center flex-col' >
            <p className=''>Nenhum perfil foi encontrado com esse nome de usuário.

            </p>

            <p>
              Tente novamente</p>
          </div>
        )}


        {loading &&

          (
            <div className='flex flex-col items-center justify-center h-70'>
              <RingLoader size={60} color='#005CFF'
              />


            </div>
          ) }



          {
          (userData?.login &&
            <div className='bg-[#D9D9D9] w-full max-w-200 p-8 mt-2 rounded-[25px] flex items-center gap-5'>
            <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} className='max-w-55 max-h-55 rounded-[50%] border-2 border-[#005CFF] '  />
            
            <div className='user-info'>
              <h2 className='text-[#005CFF] text-2xl mb-2.5'>{userData.name || userData.login}</h2>
              <p className='text-[#000000]' >{userData.bio || 'Este usuário não possui uma bio.'}</p>
            </div>
          </div>

          )
          }


      </section>
    </main>
  )
}

export default App
