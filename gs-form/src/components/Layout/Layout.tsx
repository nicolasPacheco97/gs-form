import Header from "../Header/Header"
import banner from '../../assets/images/banner_lobby.webp'

interface Props {
    children: React.ReactNode
}

function Layout ({ children }: Props) {
    return <main className="relative block h-screen">
        <section className="mx-auto p-2 max-w-screen-xl z-[2] relative h-full">
            <Header></Header>
            { children }
        </section>
        <img 
            src={banner} 
            alt="persona mirando el celular" 
            className="absolute z-0 top-0 right-0 min-h-screen object-cover object-right"
        >
        </img>
    </main>
}

export default Layout