import logoBA from '../../assets/images/logo.webp'

function Header (){
    return <>
        <header>
            <picture>
                <img src={logoBA} width={250}/>
            </picture>
        </header>
    </>
}

export default Header