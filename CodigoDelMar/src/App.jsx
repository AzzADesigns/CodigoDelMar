import { Header } from "./components/header/Header"
import { SectionMain } from "./components/main/SectionMain"
import { Navbar } from "./components/Navbar"
import { NavMovile } from "./components/NavMovile"
import { useIsXL } from "./hooks/useIsXL"


function App() {
    const isXL = useIsXL()
    return(
        <div className="max-w-full mb-[1000px] bg-indigo-50 h-full">
            <header 
                className=" flex flex-col justify-center items-center"
            >   
                <div className="w-full justify-center flex">
                    {isXL ? <Navbar /> : <NavMovile/>}
                </div>
                <div className="w-full mb-5">
                    <Header/>
                </div>
            </header>
            <main className="w-full flex flex-col justify-center items-center h-screen">
                <SectionMain/>
            </main>
        </div>
    )
}

export default App
