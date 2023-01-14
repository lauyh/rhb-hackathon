import AccBalCard from '@/src/components/dashboard/AccountBalCard'
import Navbar from '@/src/components/utils/Navbar'
import { AppTitle } from '@/src/consts/common'

const Home = () => {
    return (
        <>
            <AppTitle />
            <Navbar />
            {/* Content */}
            <div className="bg-slate-50 h-[calc(100% - 66px)]">
                <AccBalCard />
            </div>
        </>
    )
}

export default Home
