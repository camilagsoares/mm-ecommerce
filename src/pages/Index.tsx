import Footer from "../components/Footer";
import SecondTitle from "../components/SecondTitle";
import TitleComponent from "../components/Title";

export function Index() {
    return (
        <div className="">
            <TitleComponent title="Produtos" />


            <SecondTitle title="Bombeamento Solar" />

            <div className="flex items-center justify-center h-screen">
                <div className="bg-white rounded-lg border border-textVerde border-2 p-4 flex">
                    <div className="flex-1">
                        <p className="text-textCinza">
                            <span className="inline-flex items-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" className="h-5 w-5 mr-1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16.7803 9.78033C17.0732 9.48744 17.0732 9.01256 16.7803 8.71967C16.4874 8.42678 16.0126 8.42678 15.7197 8.71967L10.75 13.6893L8.28033 11.2197C7.98744 10.9268 7.51256 10.9268 7.21967 11.2197C6.92678 11.5126 6.92678 11.9874 7.21967 12.2803L10.2197 15.2803C10.5126 15.5732 10.9874 15.5732 11.2803 15.2803L16.7803 9.78033Z" fill="#88BB76" />
                                </svg>

                                Kit Bomba Solar
                            </span>
                        </p>
                        <p className="text-textCinza">
                            <span className="inline-flex items-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" className="h-5 w-5 mr-1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16.7803 9.78033C17.0732 9.48744 17.0732 9.01256 16.7803 8.71967C16.4874 8.42678 16.0126 8.42678 15.7197 8.71967L10.75 13.6893L8.28033 11.2197C7.98744 10.9268 7.51256 10.9268 7.21967 11.2197C6.92678 11.5126 6.92678 11.9874 7.21967 12.2803L10.2197 15.2803C10.5126 15.5732 10.9874 15.5732 11.2803 15.2803L16.7803 9.78033Z" fill="#88BB76" />
                                </svg>

                                Submersa 1100W até 42m ou 23.000L/dia.
                            </span>
                        </p>
                        <p className="text-textCinza">
                            <span className="inline-flex items-center">
                                <svg width="24" height="24" className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16.7803 9.78033C17.0732 9.48744 17.0732 9.01256 16.7803 8.71967C16.4874 8.42678 16.0126 8.42678 15.7197 8.71967L10.75 13.6893L8.28033 11.2197C7.98744 10.9268 7.51256 10.9268 7.21967 11.2197C6.92678 11.5126 6.92678 11.9874 7.21967 12.2803L10.2197 15.2803C10.5126 15.5732 10.9874 15.5732 11.2803 15.2803L16.7803 9.78033Z" fill="#88BB76" />
                                </svg>

                                Bomba solar de 13 estágios
                            </span>
                        </p>
                        <p className="text-textCinza">
                            <span className="inline-flex items-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" className="h-5 w-5 mr-1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16.7803 9.78033C17.0732 9.48744 17.0732 9.01256 16.7803 8.71967C16.4874 8.42678 16.0126 8.42678 15.7197 8.71967L10.75 13.6893L8.28033 11.2197C7.98744 10.9268 7.51256 10.9268 7.21967 11.2197C6.92678 11.5126 6.92678 11.9874 7.21967 12.2803L10.2197 15.2803C10.5126 15.5732 10.9874 15.5732 11.2803 15.2803L16.7803 9.78033Z" fill="#88BB76" />
                                </svg>

                                1CV com controlador externo MMS Starter.
                            </span>
                        </p>

                        <p className="font-bold">
                            DE: <span className="line-through">R$10.000,00</span>
                        </p>
                        <p className="mt-2">
                            POR
                        </p>
                        <p >
                            <span className="text-textVerde font-bold text-4xl	">R$</span>  <span className="font-bold text-5xl">8.000</span>

                        </p>
                        <button className={`bg-btnBlue mt-3 text-white py-2 px-5 rounded-full text-center flex items-center space-x-2 transition-colors duration-300`}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.25 4C2.25 3.58579 2.58579 3.25 3 3.25C4.5201 3.25 5.83625 4.30578 6.166 5.78968L6.49052 7.25H17.0314C18.674 7.25 20.1758 8.0956 21.0367 9.44622C21.4005 10.0171 21.4914 10.6595 21.4999 11.2029C21.5047 11.507 21.3253 11.7839 21.0459 11.9038C20.7664 12.0238 20.4422 11.9631 20.225 11.7502C19.9086 11.44 19.4772 11.25 19 11.25C18.1439 11.25 17.4299 11.8656 17.2793 12.6785C17.2228 12.9838 16.9839 13.2228 16.6785 13.2793C15.8656 13.4299 15.25 14.1438 15.25 15C15.25 15.8562 15.8656 16.5701 16.6785 16.7207C16.9839 16.7772 17.2228 17.0162 17.2793 17.3215C17.3038 17.4535 17.343 17.5801 17.3953 17.6997C17.4966 17.9316 17.4742 18.1989 17.3356 18.4107C17.1971 18.6224 16.9611 18.75 16.708 18.75H11.587C9.42732 18.75 7.53948 17.293 6.99211 15.2039L5.31694 8.8101C5.29593 8.76368 5.27935 8.71441 5.26786 8.6627L5.2094 8.39962L5.1545 8.19008C5.14236 8.14374 5.13478 8.09677 5.13166 8.04979L4.70172 6.11507C4.52448 5.31748 3.81705 4.75 3 4.75C2.58579 4.75 2.25 4.41421 2.25 4Z" fill="white" />
                                <path d="M19.75 13C19.75 12.5858 19.4142 12.25 19 12.25C18.5858 12.25 18.25 12.5858 18.25 13V14.25H17C16.5858 14.25 16.25 14.5858 16.25 15C16.25 15.4142 16.5858 15.75 17 15.75H18.25V17C18.25 17.4142 18.5858 17.75 19 17.75C19.4142 17.75 19.75 17.4142 19.75 17V15.75H21C21.4142 15.75 21.75 15.4142 21.75 15C21.75 14.5858 21.4142 14.25 21 14.25H19.75V13Z" fill="white" />
                                <path d="M10 21C10 21.5523 9.55228 22 9 22C8.44772 22 8 21.5523 8 21C8 20.4477 8.44772 20 9 20C9.55228 20 10 20.4477 10 21Z" fill="white" />
                                <path d="M18 21C18 21.5523 17.5523 22 17 22C16.4477 22 16 21.5523 16 21C16 20.4477 16.4477 20 17 20C17.5523 20 18 20.4477 18 21Z" fill="white" />
                            </svg>

                            <span>Adicionar ao carrinho</span>
                        </button>
                    </div>
                    <div className="ml-4  flex-shrink-0">
                        <img
                            src="/circle.svg"
                            alt="Exemplo"
                            width={215}
                            height={73}
                            draggable={false}
                        />
                    </div>
                </div>

            </div>

            <div className="flex items-center justify-center">
                <div className="w-6 h-6 bg-textVerde rounded-md	"></div>

            </div>
            <div className="flex flex-col items-center justify-center mt-2 text-textCinza font-semibold">
                <p>Todos os kits consideram o fornecimento de módulos,</p>
                <p>moto bomba, cabos e conectores.</p>
            </div>


            <div className="flex items-center justify-center">
                <div className="w-6 h-6 bg-textVerde rounded-md	"></div>

            </div>
            <div className="flex justify-end">
                <div className="bg-btnBlue w-full h-64 absolute"></div>
                <div className="bg-textVerde w-96 p-8 rounded-lg shadow-lg relative z-10">
                    <form>
                        <div className="mb-4">
                            <input placeholder="Nome:" type="text" id="name" name="name" className="border-gray-300 rounded-2xl	 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 w-full  py-3 px-3  	" />
                        </div>
                        <div className="mb-4">
                            <input type="email" id="email" name="email" placeholder="E-mail:" className="border-gray-300 rounded-2xl shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 w-full py-3 px-3" />
                        </div>
                        <div className="mb-4">
                            <input type="email" id="email" placeholder="Telefone:" name="email" className="border-gray-300 rounded-2xl shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 w-full py-3 px-3" />
                        </div>
                        <div className="mb-4">
                            <textarea id="message" rows={4} placeholder="Mensagem:" name="message" className="resize-none border-gray-300 rounded-2xl shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 w-full"></textarea>
                        </div>
                        <button type="submit" className={`bg-btnBlue mt-3 text-white py-2 px-5 rounded-full text-center flex items-center space-x-2 transition-colors duration-300`}>Enviar</button>
                    </form>
                </div>
            </div>



        </div>
    )
}