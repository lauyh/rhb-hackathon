import { Drawer } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    return (
        <div className="flex justify-between items-center py-2 p-4 border-b-2 border-slate-200">
            <Image src="/rhb-logo.png" width={100} height={32} alt="RHB logo" priority />
            <div
                className="flex justify-center items-center p-2 rounded-full bg-orange-100 cursor-pointer"
                onClick={() => setIsDrawerOpen(true)}
            >
                <Image src="/avatar.png" width={32} height={32} alt="Profile picture" />
            </div>
            <Drawer anchor="top" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <Link href="/">
                    <p className="text-lg mb-2">Home</p>
                </Link>
                <Link href="/incident">
                    <p className="text-lg mb-2">Incident</p>
                </Link>
            </Drawer>
        </div>
    )
}

export default Navbar
