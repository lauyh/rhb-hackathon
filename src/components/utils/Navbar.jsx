import { Bars3Icon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-2 p-4 border-b-2 border-slate-200">
            <div className="flex items-center">
                <div className="flex justify-center items-center py-2 pr-2 mr-3 cursor-pointer">
                    <Bars3Icon width={32} height={32} />
                </div>
                <Image src="/rhb-logo.png" width={100} height={32} alt="RHB logo" priority />
            </div>
            <div className="flex justify-center items-center p-2 rounded-full bg-orange-100 cursor-pointer">
                <Image src="/avatar.png" width={32} height={32} alt="Profile picture" />
            </div>
        </div>
    )
}

export default Navbar
