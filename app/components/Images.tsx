import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const Images = () => {

    const Avatars = [
        "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?semt=ais_hybrid&w=740",
    ]
  return (
    <div> 
        <div className='flex flex-row gap-4 rounded-ull'>
           {Avatars.map((avatar,index)=>{
            return(
                <div key={index} >
                    <Image className='flex flex-row gap-4 rounded-ull'src={avatar} alt="avatar" width={100} height={100}/>
                </div>
            )
           })}
        </div>

    </div>
  )
}

export default Images