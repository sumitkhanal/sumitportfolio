import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillMail, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import Image from "next/legacy/image";
import deved from '../public/dev-ed-wave.png';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import {useState} from 'react';



export default function Home() {
  const [darkMode, setDarkMode]= useState(false)
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Sumit Khanal</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">developedbysk</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://drive.google.com/file/d/1aLbmfRdbPOQiqYBtOUJD0fVFeGf4Hw7n/view?usp=sharing">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              SUMIT KHANAL
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Developer and designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Freelancer providing services for programming and design content
              needs. Join me down below and lets get cracking!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              
              <AiFillMail />
              <a href="https://www.linkedin.com/in/sumit-khanal-9464a31b3/">
              <AiFillLinkedin />
                </a>
              <a href="https://github.com/sumitkhanal/">
              <AiFillGithub />
                </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} alt="deved" layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
    
    <section>
      <div>
        <h3 className='text-3xl py-1 dark:text-white'>Services I offer</h3>
        <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
          I am software developer. I provide wide range of services including building website. 
          Lets get going
        </p>
      </div>
      <div className='lg:flex gap-10'>
        <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
          <Image src={design} alt="deved" width ={100} height= {100}/>
          <h3 className='text-lg font-medium pt-8 pb-2'>Designs</h3>
          <p className='py-2'>
            Creating beautiful designs suited for your new website.
          </p>
          <h4 className='py-4 text-teal-600'>
            Projects I have done
          </h4>
          <p className='text-gray-800 py-1'>BooksForMe</p>
          <p className='text-gray-800 py-1'>Cryptify</p>
          <p className='text-gray-800 py-1'>Haat</p>
          <p className='text-gray-800 py-1'>Travel Nepal</p>
        </div>
        <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
          <Image src={code} alt="deved" width ={100} height= {100}/>
          <h3 className='text-lg font-medium pt-8 pb-2'>Code</h3>
          <p className='py-2'>
            Creating beautiful designs suited for your new website.
          </p>
          <h4 className='py-4 text-teal-600'>
            Projects I have done
          </h4>
          <p className='text-gray-800 py-1'>BooksForMe</p>
          <p className='text-gray-800 py-1'>Cryptify</p>
          <p className='text-gray-800 py-1'>Haat</p>
          <p className='text-gray-800 py-1'>Travel Nepal</p>
        </div>
        <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
          <Image src={consulting} alt="deved" width ={100} height= {100}/>
          <h3 className='text-lg font-medium pt-8 pb-2'>Consulting</h3>
          <p className='py-2'>
            Creating beautiful designs suited for your new website.
          </p>
          <h4 className='py-4 text-teal-600'>
            Projects I have done
          </h4>
          <p className='text-gray-800 py-1 '>BooksForMe</p>
          <p className='text-gray-800 py-1'>Cryptify</p>
          <p className='text-gray-800 py-1'>Haat</p>
          <p className='text-gray-800 py-1'>Travel Nepal</p>
        </div>
      </div>
    </section>
    <section>
      <div>
        <h3 className='text-3xl py-1 dark:text-white'>Portfolio</h3>
        <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
          I am software developer. I provide wide range of services including building website. 
          Lets get going
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
                alt="deved"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
                alt="deved"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
                alt="deved"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
                alt="deved"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
                alt="deved"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
                alt="deved"
              />
            </div>
          </div>
    </section>
      </main>
    </div>
  )
}
