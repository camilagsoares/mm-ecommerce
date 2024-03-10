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
            <p className="text-bgBlue font-bold underline ">MMS - STARTER</p>
            <h1 className="font-inter font-extrabold text-4xl leading-10 tracking-wider">Basic</h1>

            <p className="text-textCinza mt-1">
                <span className="inline-flex items-center">Kit Bomba Solar</span>
            </p>
            <p className="text-textCinza">
                <span className="inline-flex items-center mt-1">Submersa 1100W até 42m ou 23.000L/dia.</span>
            </p>
            <p className="text-textCinza mt-1">
                <span className="inline-flex items-center">Bomba solar de 13 estágios</span>
            </p>
            <p className="text-textCinza mt-1">
                <span className="inline-flex items-center">1CV com controlador externo MMS Starter.</span>
            </p>

            <p className="font-bold">DE: <span className="line-through">R$10.000,00</span></p>

            <p className="mt-2">POR</p>
            <p>
                <span className="text-textVerde font-bold text-4xl	">R$</span>  
                <span className="font-bold text-5xl">8.000</span>
            </p>
            <button className={`bg-btnBlue mt-3 text-white py-2 px-5 rounded-full text-center flex items-center space-x-2 transition-colors duration-300`}>
                <span>Adicionar ao carrinho</span>
            </button>
        </div>
        <div className="ml-4 flex-shrink-0">
    <img className="object-cover w-full h-full" src="https://i.ibb.co/VYDqMQZ/Mask-group.png" alt="Mask-group" />
</div>
    </div>
    <div className="ml-4 flex-shrink-0 flex">
        <img src="https://i.ibb.co/VYDqMQZ/Mask-group.png" alt="Mask-group" style={{ marginRight: '40px' }} />
        <img src="https://i.ibb.co/VYDqMQZ/Mask-group.png" alt="Mask-group" />
    </div>
</div>


{/* 
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
            </div> */}



        </div>
    )
}