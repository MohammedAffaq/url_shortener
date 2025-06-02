"use client"
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

const Shorten = () => {
  const [url, setUrl] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [generated, setGenerated] = useState("")

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        setUrl("")
        setshorturl("")
        console.log(result)
        alert(result.message)
      }
      )
      .catch((error) => console.error(error));
  }



  return (
    <div className='mx-auto max-w-lg w-full bg-purple-100 rounded-lg my-10 p-6 sm:p-8 flex flex-col gap-5'>
      <h1 className='font-bold text-xl sm:text-2xl text-center sm:text-left'>Generate your short URLs</h1>
      <div className='flex flex-col gap-4'>
        <input type="text"
          value={url}
          className='w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600 rounded-md'
          placeholder='Enter your URL'
          onChange={e => { setUrl(e.target.value) }} />

        <input type="text"
          value={shorturl}
          className='w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600'
          placeholder='Enter your preferred short URL text'
          onChange={e => { setshorturl(e.target.value) }} />

        <button onClick={generate} className='w-full bg-purple-500 text-white rounded-md shadow-lg px-4 py-2 font-bold hover:bg-purple-600 transition'>Generate</button>
      </div>

      {generated && <>
        <span className='font-bold text-lg mt-4 text-center sm:text-left'>Your Links</span>
        <code className="break-words text-center sm:text-left">
          <Link target="_blank" href={generated} className="text-purple-700 underline">{generated}</Link>
        </code></>}
    </div>
  )
}

export default Shorten