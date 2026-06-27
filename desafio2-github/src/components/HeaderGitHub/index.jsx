import React from 'react'
import { RiGithubFill } from "react-icons/ri"

const HeaderGitHub = () => {
    return (
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
    )
}

export default HeaderGitHub
