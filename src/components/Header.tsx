export function Header () {
    return(
        <header>
<nav className="bg-gradient-to-r from-blue-900 to-green-900 border-gray-200 px-4 lg:px-6 py-12 dark:bg-gray-800 h-148">
    <div className="flex justify-between items-center mx-auto max-w-screen-xl">

        <img
            src="/logo.svg"
            alt="Exemplo"
            width={215}
            height={73}
            draggable={false}
        />

        <div className="flex items-center lg:order-2">
            <div className="flex flex-col items-center space-y-2">
                <p className="text-white">Cadastre-se | Entrar</p>
                <div className="flex items-center space-x-4">

                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.2044 14.4719C12.0838 15.3261 10.6845 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667C15.8333 10.8927 15.1774 12.4656 14.1011 13.6495C14.1233 13.6646 14.1447 13.6813 14.1652 13.6995L17.9152 17.0329C18.1732 17.2622 18.1965 17.6572 17.9671 17.9152C17.7378 18.1732 17.3428 18.1965 17.0848 17.9671L13.3348 14.6338C13.2811 14.5861 13.2376 14.5312 13.2044 14.4719ZM14.5833 9.16667C14.5833 12.1582 12.1582 14.5833 9.16667 14.5833C6.17512 14.5833 3.75 12.1582 3.75 9.16667C3.75 6.17512 6.17512 3.75 9.16667 3.75C12.1582 3.75 14.5833 6.17512 14.5833 9.16667Z" fill="white" />
                    </svg>

                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M9 9C11.0711 9 12.75 7.32107 12.75 5.25C12.75 3.17893 11.0711 1.5 9 1.5C6.92893 1.5 5.25 3.17893 5.25 5.25C5.25 7.32107 6.92893 9 9 9Z" fill="white" />
                        <path d="M9 16.5C12.3137 16.5 15 14.989 15 13.125C15 11.261 12.3137 9.75 9 9.75C5.68629 9.75 3 11.261 3 13.125C3 14.989 5.68629 16.5 9 16.5Z" fill="white" />
                    </svg>

                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                    </svg>
                    <svg width="18" height="18" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.375 0.572922C1.04708 0.572922 0.78125 0.838753 0.78125 1.16667C0.78125 1.49459 1.04708 1.76042 1.375 1.76042C2.02183 1.76042 2.58188 2.20967 2.7222 2.8411L3.06256 4.37276C3.06504 4.40995 3.07103 4.44713 3.08065 4.48382L3.12411 4.64971L3.17039 4.85797C3.17949 4.89891 3.19261 4.93792 3.20925 4.97467L4.53542 10.0364C4.96875 11.6903 6.4633 12.8438 8.17306 12.8438H12.2609C14.3377 12.8438 16.0213 11.1602 16.0213 9.08334V6.93846C16.0213 6.49206 15.9569 5.95346 15.654 5.47826C14.9725 4.40902 13.7836 3.73959 12.4832 3.73959H4.13833L3.88142 2.5835C3.62036 1.40874 2.57841 0.572922 1.375 0.572922Z" fill="white" />
                        <path d="M13.25 14.625C13.25 15.0622 12.8956 15.4167 12.4583 15.4167C12.0211 15.4167 11.6667 15.0622 11.6667 14.625C11.6667 14.1878 12.0211 13.8333 12.4583 13.8333C12.8956 13.8333 13.25 14.1878 13.25 14.625Z" fill="white" />
                        <path d="M6.125 15.4167C6.56223 15.4167 6.91667 15.0622 6.91667 14.625C6.91667 14.1878 6.56223 13.8333 6.125 13.8333C5.68777 13.8333 5.33333 14.1878 5.33333 14.625C5.33333 15.0622 5.68777 15.4167 6.125 15.4167Z" fill="white" />
                    </svg>
                </div>
            </div>
        </div>

        <div className="hidden flex w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li><a href="/" className="block py-2 pr-4 pl-3 text-textVerde rounded" aria-current="page">Home</a></li>
                <li>
                    <button  className={`block py-2 pr-4 pl-3 text-white focus:outline-none `}>Produtos</button>

                </li>
                <li><a href="/about-us" className="block py-2 pr-4 pl-3 text-white">Sobre nós</a></li>
            </ul>
        </div>
    </div>
</nav>
</header>
    )
}