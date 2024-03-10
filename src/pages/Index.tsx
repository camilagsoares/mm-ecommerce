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

                        <p className="text-textCinza">


                            DE: R$10.000,00

                        </p>
                        <p >


                            POR

                        </p>
                        <p >


                            R$ 8.000

                        </p>
                        <button className={`bg-btnBlue mt-3 text-white  py-2 px-5 rounded-full text-center transition-colors duration-300 `}
                        >Adicionar ao carrinho</button>
                    </div>
                    <div className="ml-4  flex-shrink-0">
                        <img src="https://canalsolar.com.br/wp-content/uploads/2020/09/energia-solar.jpg" alt="Foto" className="h-359 w-132 rounded-lg" />
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
        </div>
    )
}