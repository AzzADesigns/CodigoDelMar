import { Header } from "./components/header"
import { Navbar } from "./components/Navbar"
import { NavMovile } from "./components/NavMovile"
import { useIsXL } from "./hooks/useIsXL"


function App() {
    const isXL = useIsXL()
    return(
        <div className="max-w-full">
            <header 
                className=" flex flex-col justify-center items-center"
            >   
                <div className="w-full justify-center flex">
                    {isXL ? <Navbar /> : <NavMovile/>}
                </div>
                <div className="w-full">
                    <Header/>
                </div>
            </header>
        </div>
    )
}

export default App
