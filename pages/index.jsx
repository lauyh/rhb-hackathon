import { useState } from 'react'
import Image from 'next/image'
import Navbar from '@/src/components/utils/Navbar'
import AccBalCard from '@/src/components/dashboard/AccountBalCard'
import { AppTitle } from '@/src/consts/common'
import { ShoppingCartIcon, BookOpenIcon, BriefcaseIcon, XCircleIcon } from '@heroicons/react/24/outline'

const Popup = ({ closePopup }) => (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="absolute top-0 left-0 bg-gray-700 opacity-40 w-full h-full" onClick={closePopup} />
        <div className="relative w-[calc(100%-32px)] bg-white border-2 rounded-2xl border-slate-400 px-4 py-12 z-10">
            <XCircleIcon
                className="absolute top-4 right-4 cursor-pointer"
                width={32}
                height={32}
                onClick={closePopup}
            />
            <h1 className="font-sans text-xl font-medium text-gray-700">Welcome to your House Simulator</h1>
            <p className="mt-4">In this game, you will be able to build the house of your dreams.</p>
            <p className="mt-2">
                You will be guided to earn by working and helping others. Not just that, you will also expand your
                knowledge with the articles and quizzes we have available for you, so that you can spend wisely, earn
                and save!
            </p>
            <p className="mt-2">
                Now now.. not everything will be smooth sailing, as we all know life can be challenge but not to worry!
                We will help you to be prepared for every situation.
            </p>
            <p className="mt-2">Let us all be financial literate!</p>
        </div>
    </div>
)

const Home = () => {
    const [firstPopup, setFirstPopup] = useState(true)
    const closePopup = () => setFirstPopup(false)

    return (
        <>
            <AppTitle />
            <Navbar />
            {/* Content */}
            <div className="relative bg-slate-50 h-[calc(100%-66px)]">
                {firstPopup && <Popup {...{ closePopup }} />}
                <AccBalCard />
                <h1 className="font-sans text-2xl text-center font-semibold italic text-gray-400">
                    Build your Dream House
                </h1>
                <div className="w-full absolute bottom-[200px] flex justify-center">
                    <Image src="/house-1.png" width={196} height={196} alt="House 1" />
                </div>
                <div className="w-full absolute bottom-[40px] text-center">
                    <button className="inline-flex items-center rounded-md border border-transparent bg-slate-200 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-300 focus:outline-none mb-4">
                        <ShoppingCartIcon className="mr-3" width={24} height={24} />
                        Purchase
                    </button>
                    <div className="flex justify-center items-center">
                        <button className="inline-flex items-center rounded-md border border-transparent bg-blue-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none mr-2">
                            <BookOpenIcon className="mr-3" width={24} height={24} />
                            Learn
                        </button>
                        <button className="inline-flex items-center rounded-md border border-transparent bg-blue-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none">
                            <BriefcaseIcon className="mr-3" width={24} height={24} />
                            Work
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
