import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import { flushSync } from 'react-dom'
import axios from 'axios'

import HeaderGitHub from './components/HeaderGitHub'
import FormSearch from './components/FormSearch'
import ErrorDefault from './components/ErrorDefault'
import LoadingSearch from './components/LoadingSearch'
import CardResponse from './components/CardResponse'




function App() {



  const [loading, setLoading] = useState(false)

  const [error, setError] = useState(false)

  const [userData, setUserData] = useState(null)

  const [search, setSearch] = useState("")






  const handleSearch = async (e) => {
    e.preventDefault()
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
      <section className='bg-black z-1 md:w-275 md:h-130 flex flex-col items-center gap-5' >

        <HeaderGitHub />

        <FormSearch
          value={search}
          setValue={setSearch}
          handle={handleSearch}
        />


        {error && (<ErrorDefault/>)}


        {loading &&(<LoadingSearch/>)}



        { userData?.login &&(<CardResponse data={userData} />)}


      </section>
    </main>
  )
}

export default App
