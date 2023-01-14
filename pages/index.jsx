import AccBalCard from '@/src/components/dashboard/AccountBalCard'
import Navbar from '@/src/components/utils/Navbar'
import { AppTitle } from '@/src/consts/common'

const Home = () => {
    return (
        <>
            <AppTitle />
            <Navbar />
            <AccBalCard />
        </>
    )
}

export default Home
