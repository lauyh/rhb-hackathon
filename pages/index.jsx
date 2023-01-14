import { useEffect, useState } from 'react'
import Image from 'next/image'
import Navbar from '@/src/components/utils/Navbar'
import AccBalCard from '@/src/components/dashboard/AccountBalCard'
import { AppTitle } from '@/src/consts/common'
import {
    ArrowRightIcon,
    BookOpenIcon,
    BriefcaseIcon,
    ChevronDoubleRightIcon,
    ClockIcon,
    ShoppingCartIcon,
    XCircleIcon,
} from '@heroicons/react/24/outline'

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
    const [CashIn, setCashIn] = useState(0)
    const [CashOut, setCashOut] = useState(0)

    const [workPage, setWorkPage] = useState(false)
    const [contentWork, setContentWork] = useState(false)
    const [progressWork, setProgressWork] = useState(false)
    const [doneWork, setDoneWork] = useState(false)

    const [learnPage, setLearnPage] = useState(false)
    const [contentLearn, setContentLearn] = useState(false)
    const [progressLearn, setProgressLearn] = useState(0)

    const closePopup = () => setFirstPopup(false)
    const toggleMenuPopup = () => setMenuPopup(!menuPopup)
    const toggleWorkPage = () => setWorkPage(!workPage)
    const toggleLearnPage = () => setLearnPage(!learnPage)

    const handleAddItem = () => {
        if (progress < 7) {
            setProgress(progress + 1)
            setNW(NW - 500)
            setCashOut(CashOut - 500)
        }
        toggleMenuPopup()
    }

    const handleDoneWork = () => {
        setNW(NW + 50)
        setCashIn(CashIn + 50)
        setWorkPage(false)
        setContentWork(false)
        setProgressWork(false)
        setDoneWork(false)
    }

    const handleDoneLearn = () => {
        setNW(NW + 150)
        setCashIn(CashIn + 150)
        setLearnPage(false)
        setContentLearn(false)
        setProgressLearn(0)
    }

    const titleHouse = progress == 7 ? 'Your Dream House is Built!' : 'Build your Dream House'
    const textNW = new Intl.NumberFormat('en-US').format(NW)
    const textTotal = new Intl.NumberFormat('en-US').format(CashOut)
    const textCashOut = CashOut < 0 ? `${textTotal} (Shortfall)` : 0
    const textCashIn = new Intl.NumberFormat('en-US').format(CashIn)

    useEffect(() => {
        if (progressWork) {
            setTimeout(() => {
                setDoneWork(true)
            }, 1500)
        }
    }, [progressWork])

    return (
        <>
            <AppTitle />
            <Navbar />
            {/* Content */}
            <div className="relative bg-slate-50 h-[calc(100%-66px)]">
                {progressWork ? (
                    <div className="p-4 pt-16">
                        {doneWork ? (
                            <>
                                <div className="flex justify-center items-center mb-8">
                                    <Image src="/melisa-7.png" width={200} height={200} alt="Melisa" />
                                </div>
                                <p className="text-2xl text-center font-medium">VRM 50 Received!</p>
                                <div className="text-center mt-8">
                                    <button
                                        className="inline-flex justify-center items-center rounded-3xl border border-transparent bg-green-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-600 focus:outline-none"
                                        onClick={handleDoneWork}
                                    >
                                        Return to Home
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="flex justify-center items-center mb-8">
                                    <Image src="/melisa-8.png" width={200} height={200} alt="Melisa" />
                                </div>
                                <div className="flex items-center bg-emerald-100 text-emerald-700 rounded-lg border-2 border-emerald-600 p-4 my-4">
                                    <ClockIcon width={24} height={24} />
                                    <p className="text-lg font-semibold ml-2">Chore in progress...</p>
                                </div>
                                <div className="text-center mt-8">
                                    <button className="inline-flex justify-center items-center rounded-3xl border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-600 focus:outline-none">
                                        Cancel Chore
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                ) : contentWork ? (
                    <div className="p-4">
                        <div className="flex justify-center items-center mb-4">
                            <button className="w-1/2 inline-flex justify-center items-center rounded-md border border-transparent bg-blue-300 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-400 focus:outline-none mr-2">
                                Easy Chores
                            </button>
                            <button className="w-1/2 inline-flex justify-center items-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none">
                                Hard Chores
                            </button>
                        </div>
                        <div className="flex justify-end mb-8">
                            <button className="inline-flex justify-center items-center rounded-l-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none">
                                Prev
                            </button>
                            <button className="inline-flex justify-center items-center rounded-r-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none">
                                Next
                            </button>
                        </div>
                        <div className="bg-white shadow-lg shadow-gray-400 rounded-b-md">
                            <div className="w-full h-[240px] border-2 border-gray-400">
                                <Image src="/dish.png" width={420} height={240} alt="Dishwashing" />
                            </div>
                            <div className="p-4">
                                <p className="text-lg font-semibold mb-2">Wash Dishes</p>
                                <p className="mb-6">Help out the family by washing the dishes after family meal!</p>
                                <div className="flex items-center mb-8">
                                    <button className="inline-flex justify-center items-center rounded-3xl border border-transparent bg-green-500 px-6 py-1 mr-4 text-sm font-medium text-white shadow-sm focus:outline-none">
                                        15 minutes
                                    </button>
                                    <button className="inline-flex justify-center items-center rounded-3xl border border-transparent bg-slate-400 px-6 py-1 text-sm font-medium text-white shadow-sm focus:outline-none">
                                        Easy
                                    </button>
                                </div>
                                <div
                                    className="w-full flex justify-between items-center rounded-3xl border border-transparent bg-indigo-600 px-2 py-2 pr-3 mb-4 text-sm font-medium text-white shadow-sm focus:outline-none cursor-pointer"
                                    onClick={() => setProgressWork(true)}
                                >
                                    <div className="flex justify-between items-center">
                                        <div className="flex justify-between items-center rounded-3xl bg-indigo-400 px-4 py-1 mr-2">
                                            VRM50
                                        </div>
                                        Let&apos;s Start Working!
                                    </div>
                                    <ArrowRightIcon width={24} height={24} />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : contentLearn ? (
                    <div className="p-4">
                        {progressLearn == 3 ? (
                            <>
                                <div className="flex justify-center items-center mb-8">
                                    <Image src="/melisa-7.png" width={200} height={200} alt="Melisa" />
                                </div>
                                <p className="text-2xl text-center font-medium">VRM 150 Received!</p>
                                <div className="text-center mt-8">
                                    <button
                                        className="inline-flex justify-center items-center rounded-3xl border border-transparent bg-green-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-600 focus:outline-none"
                                        onClick={handleDoneLearn}
                                    >
                                        Return to Home
                                    </button>
                                </div>
                            </>
                        ) : progressLearn == 2 ? (
                            <div className="bg-white shadow-lg shadow-gray-400 rounded-b-md">
                                <div className="w-full flex justify-center items-center">
                                    <Image
                                        src="/quiz1.png"
                                        width={377}
                                        height={485}
                                        className="w-full h-auto object-contain"
                                        alt="Quiz"
                                    />
                                </div>
                                <div className="text-center mt-8">
                                    <button
                                        className="inline-flex justify-center items-center rounded-3xl border border-transparent bg-green-500 px-4 py-2 mb-6 text-sm font-medium text-white shadow-sm hover:bg-green-600 focus:outline-none"
                                        onClick={() => setProgressLearn(progressLearn + 1)}
                                    >
                                        Next Question
                                    </button>
                                </div>
                            </div>
                        ) : progressLearn == 1 ? (
                            <>
                                <div className="bg-white shadow-lg shadow-gray-400 rounded-b-md">
                                    <div className="w-full h-[213px] border-2 border-gray-400">
                                        <Image
                                            src="/video.png"
                                            width={420}
                                            height={210}
                                            className="h-[210px] object-contain"
                                            alt="Learning"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <p className="text-lg font-semibold mb-2">
                                            15 Finance Habits to Master before 2023
                                        </p>
                                        <Image
                                            src="/indv.png"
                                            width={170}
                                            height={87}
                                            className="h-[87px] object-contain mb-2"
                                            alt="Learning"
                                        />
                                        <p className="mb-2 text-sm">
                                            “Habits are the compound interest of self-improvement.”
                                        </p>
                                        <p className="mb-2 text-sm">
                                            Whether you&apos;re looking to save more money, invest better, or manage
                                            your finances more effectively in 2023, it all starts with your daily
                                            habits.
                                        </p>
                                        <p className="mb-2 text-sm">
                                            As James Clear said in Atomic Habits:
                                            <br />
                                            “Your habits have a powerful effect on your life. They can be the difference
                                            between success and failure. They can determine whether you are healthy or
                                            unhealthy, wealthy or broke.” To help you build better daily financial
                                            habits, we&apos;ll go over five practical habit-building methods from Atomic
                                            Habits.
                                        </p>
                                        <div
                                            className="w-full flex justify-between items-center rounded-3xl border border-transparent bg-indigo-600 px-2 py-2 pr-3 mt-4 mb-2 text-sm font-medium text-white shadow-sm focus:outline-none cursor-pointer"
                                            onClick={() => setProgressLearn(progressLearn + 1)}
                                        >
                                            <div className="flex justify-between items-center">
                                                <div className="flex justify-between items-center rounded-3xl bg-indigo-400 px-4 py-1 mr-2">
                                                    VRM150
                                                </div>
                                                Take Quiz!
                                            </div>
                                            <ArrowRightIcon width={24} height={24} />
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="flex justify-center items-center mb-4">
                                    <button className="w-1/3 inline-flex justify-center items-center rounded-md border border-transparent bg-blue-300 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-400 focus:outline-none mr-2">
                                        Time
                                    </button>
                                    <button className="w-1/3 inline-flex justify-center items-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none mr-2">
                                        Habit
                                    </button>
                                    <button className="w-1/3 inline-flex justify-center items-center rounded-md border border-transparent bg-blue-300 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-400 focus:outline-none">
                                        Save
                                    </button>
                                </div>
                                <div className="flex justify-end mb-8">
                                    <button className="inline-flex justify-center items-center rounded-l-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none">
                                        Prev
                                    </button>
                                    <button className="inline-flex justify-center items-center rounded-r-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none">
                                        Next
                                    </button>
                                </div>
                                <div className="bg-white shadow-lg shadow-gray-400 rounded-b-md">
                                    <div className="w-full h-[240px] border-2 border-gray-400">
                                        <Image
                                            src="/learn.png"
                                            width={420}
                                            height={236}
                                            className="h-[236px] object-contain "
                                            alt="Learning"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <p className="text-lg font-semibold mb-2">Learn Helpful Habits</p>
                                        <p className="mb-6">Read more to learn</p>
                                        <div className="flex items-center mb-8">
                                            <button className="inline-flex justify-center items-center rounded-3xl border border-transparent bg-green-500 px-6 py-1 mr-4 text-sm font-medium text-white shadow-sm focus:outline-none">
                                                15 minutes
                                            </button>
                                            <button className="inline-flex justify-center items-center rounded-3xl border border-transparent bg-slate-400 px-6 py-1 text-sm font-medium text-white shadow-sm focus:outline-none">
                                                Easy
                                            </button>
                                        </div>
                                        <div
                                            className="w-full flex justify-between items-center rounded-3xl border border-transparent bg-indigo-600 px-2 py-2 pr-3 mb-4 text-sm font-medium text-white shadow-sm focus:outline-none cursor-pointer"
                                            onClick={() => setProgressLearn(progressLearn + 1)}
                                        >
                                            <div className="flex justify-between items-center">
                                                <div className="flex justify-between items-center rounded-3xl bg-indigo-400 px-4 py-1 mr-2">
                                                    VRM150
                                                </div>
                                                Let&apos;s Learning!
                                            </div>
                                            <ArrowRightIcon width={24} height={24} />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                ) : (
                    <>
                        {firstPopup && <Popup {...{ closePopup }} />}
                        {menuPopup && <PurchaseMenu {...{ toggleMenuPopup, handleAddItem }} />}
                        <AccBalCard netWorth={textNW} cashIn={textCashIn} cashOut={textCashOut} totalFlow={textTotal} />
                        {workPage ? (
                            <>
                                <div className="w-full flex justify-center mt-16 mb-10">
                                    <Image src="/melisa-8.png" width={200} height={200} alt="Melisa" />
                                </div>
                                <div className="text-center">
                                    <button
                                        className="inline-flex items-center rounded-3xl border border-transparent bg-blue-600 px-4 py-2 text-lg font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none"
                                        onClick={() => setContentWork(true)}
                                    >
                                        Let&apos;s Earn!
                                    </button>
                                </div>
                            </>
                        ) : learnPage ? (
                            <>
                                <div className="w-full flex justify-center mt-16 mb-10">
                                    <Image src="/melisa-12.png" width={200} height={200} alt="Melisa" />
                                </div>
                                <div className="text-center">
                                    <button
                                        className="inline-flex items-center rounded-3xl border border-transparent bg-blue-600 px-4 py-2 text-lg font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none"
                                        onClick={() => setContentLearn(true)}
                                    >
                                        Let&apos;s Learn!
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <h1 className="font-sans text-2xl text-center font-semibold italic text-gray-400">
                                    {titleHouse}
                                </h1>
                                <div className="w-full absolute bottom-[200px] flex justify-center">
                                    <Image src={`/house-${progress}.png`} width={196} height={196} alt="House 1" />
                                </div>
                                <div className="w-full absolute bottom-[40px] text-center">
                                    {progress == 7 ? (
                                        <>
                                            <button className="inline-flex items-center rounded-3xl border border-transparent bg-green-600 px-4 py-2 mb-10 text-lg font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none">
                                                Next Goal
                                                <ChevronDoubleRightIcon className="ml-2" width={24} height={24} />
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button
                                                className="inline-flex items-center rounded-md border border-transparent bg-slate-200 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-300 focus:outline-none mb-4"
                                                onClick={toggleMenuPopup}
                                            >
                                                <ShoppingCartIcon className="mr-3" width={24} height={24} />
                                                Purchase
                                            </button>
                                            <div className="flex justify-center items-center">
                                                <button
                                                    className="inline-flex items-center rounded-md border border-transparent bg-blue-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none mr-2"
                                                    onClick={toggleLearnPage}
                                                >
                                                    <BookOpenIcon className="mr-3" width={24} height={24} />
                                                    Learn
                                                </button>
                                                <button
                                                    className="inline-flex items-center rounded-md border border-transparent bg-blue-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none"
                                                    onClick={toggleWorkPage}
                                                >
                                                    <BriefcaseIcon className="mr-3" width={24} height={24} />
                                                    Work
                                                </button>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </>
                        )}
                    </>
                )}
            </div>
        </>
    )
}

export default Home
