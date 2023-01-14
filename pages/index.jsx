import Image from 'next/image'
import Navbar from '@/src/components/utils/Navbar'
import AccBalCard from '@/src/components/dashboard/AccountBalCard'
import { AppTitle } from '@/src/consts/common'
import { ShoppingCartIcon, BookOpenIcon, BriefcaseIcon } from '@heroicons/react/24/outline'

const Home = () => {
    return (
        <>
            <AppTitle />
            <Navbar />
            {/* Content */}
            <div className="relative bg-slate-50 h-[calc(100%-66px)]">
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
