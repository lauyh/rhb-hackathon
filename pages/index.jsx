import AccBalCard from '@/src/components/dashboard/AccountBalCard'
import Navbar from '@/src/components/utils/Navbar'
import { AppTitle } from '@/src/consts/common'
import { BookOpenIcon, BriefcaseIcon, ShoppingCartIcon, XCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useState } from 'react'

const ITEMS = [
    {
        text: 'AC',
        img: '/items/ac.png',
    },
    {
        text: 'Bed',
        img: '/items/bed.png',
    },
    {
        text: 'Brick',
        img: '/items/brick.png',
    },
    {
        text: 'Cement',
        img: '/items/cement.png',
    },
    {
        text: 'Door',
        img: '/items/door.png',
    },
    {
        text: 'Hammer',
        img: '/items/hammer.png',
    },
    {
        text: 'Nail',
        img: '/items/nail.png',
    },
    {
        text: 'E-Outlet',
        img: '/items/outlet.png',
    },
    {
        text: 'Paint',
        img: '/items/paint.png',
    },
    {
        text: 'Screw Driver',
        img: '/items/s-driver.png',
    },
    {
        text: 'Sand',
        img: '/items/sand.png',
    },
    {
        text: 'Saw',
        img: '/items/saw.png',
    },
    {
        text: 'Sofa',
        img: '/items/sofa.png',
    },
    {
        text: 'Table',
        img: '/items/table.png',
    },
    {
        text: 'TV',
        img: '/items/tv.png',
    },
    {
        text: 'Wardrobe',
        img: '/items/wardrobe.png',
    },
    {
        text: 'Washer',
        img: '/items/washer.png',
    },
    {
        text: 'Window',
        img: '/items/window.png',
    },
]

const Popup = ({ closePopup }) => (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="absolute top-0 left-0 bg-gray-700 opacity-40 w-full h-full z-10" onClick={closePopup} />
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

const PurchaseMenu = ({ toggleMenuPopup, handleAddItem }) => {
    const [select, setSelect] = useState(null)

    return (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="absolute top-0 left-0 bg-gray-700 opacity-40 w-full h-full" onClick={toggleMenuPopup} />
            <div className="relative w-[calc(100%-32px)] h-[95%] bg-white border-2 rounded-2xl border-slate-400 p-4 z-10">
                <h1 className="font-sans text-xl font-medium text-center text-gray-700 mb-4">
                    Pick tools to build your dream house!
                </h1>
                <div className="flex justify-between items-center flex-wrap">
                    {ITEMS.map((v, i) => {
                        return (
                            <div
                                key={i}
                                className={`box-border w-[calc(100%/3-6px)] h-[92px] p-3 rounded-xl bg-slate-300 flex justify-between items-center flex-col cursor-pointer mb-2 ${
                                    select === i ? 'border-2 border-emerald-400' : 'border-2 border-slate-300'
                                }`}
                                onClick={() => setSelect(i)}
                            >
                                <div className="w-[64px] h-[40px] flex justify-center items-center">
                                    <Image
                                        className="object-center object-contain h-[48px]"
                                        src={v.img}
                                        width={56}
                                        height={32}
                                        alt="Item"
                                    />
                                </div>
                                <p className="text-sm font-sans font-medium mt-2">{v.text}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="w-full text-center mt-2">
                    <button
                        className={`inline-flex items-center rounded-3xl border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none ${
                            select === null ? 'bg-gray-400 hover:bg-gray-400 cursor-not-allowed' : ''
                        }`}
                        disabled={select === null}
                        onClick={select !== null ? handleAddItem : () => {}}
                    >
                        Select & Build
                    </button>
                </div>
            </div>
        </div>
    )
}

const Home = () => {
    const [firstPopup, setFirstPopup] = useState(true)
    const [menuPopup, setMenuPopup] = useState(false)
    const [progress, setProgress] = useState(1)
    const [NW, setNW] = useState(10000)
    const [CashOut, setCashOut] = useState(0)

    const closePopup = () => setFirstPopup(false)
    const toggleMenuPopup = () => setMenuPopup(!menuPopup)
    const handleAddItem = () => {
        if (progress < 7) {
            setProgress(progress + 1)
            setNW(NW - 500)
            setCashOut(CashOut - 500)
        }
        toggleMenuPopup()
    }

    const titleHouse = progress == 7 ? 'Your Dream House is Built!' : 'Build your Dream House'
    const textNW = new Intl.NumberFormat('en-US').format(NW)
    const textTotal = new Intl.NumberFormat('en-US').format(CashOut)
    const textCashOut = CashOut < 0 ? `${textTotal} (Shortfall)` : 0

    return (
        <>
            <AppTitle />
            <Navbar />
            {/* Content */}
            <div className="relative bg-slate-50 h-[calc(100%-66px)]">
                {firstPopup && <Popup {...{ closePopup }} />}
                {menuPopup && <PurchaseMenu {...{ toggleMenuPopup, handleAddItem }} />}
                <AccBalCard netWorth={textNW} cashOut={textCashOut} totalFlow={textTotal} />
                <h1 className="font-sans text-2xl text-center font-semibold italic text-gray-400">{titleHouse}</h1>
                <div className="w-full absolute bottom-[200px] flex justify-center">
                    <Image src={`/house-${progress}.png`} width={196} height={196} alt="House 1" />
                </div>
                <div className="w-full absolute bottom-[40px] text-center">
                    <button
                        className="inline-flex items-center rounded-md border border-transparent bg-slate-200 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-300 focus:outline-none mb-4"
                        onClick={toggleMenuPopup}
                    >
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

export default Home;
