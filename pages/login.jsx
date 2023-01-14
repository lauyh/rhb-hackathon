import { AppTitle } from '@/src/consts/common.js'
import Login from '../src/components/login/Login.js'

const Home = () => {
    return (
        <>
            <AppTitle sub="Login" />
            <Login />
        </>
    )
}

export default Home
