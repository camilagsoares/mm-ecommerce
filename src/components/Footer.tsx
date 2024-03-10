import React, { useState } from 'react';

const Footer = () => {

  const [hovered, setHovered] = useState(false);


  return (
    <footer className="bg-bgFooter">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 px-4 py-6 lg:py-8">



          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">

              <img
                src="/logo.svg"
                alt="Exemplo"
                width={215}
                height={73}
                draggable={false}
              />
            </h2>
            <ul className="text-white font-medium text-justify">
              <li className="mb-4">
                <p>A M&M Soluções é uma empresa especializada em desenvolver soluções completas, hardwares e softwares, para o setor industrial. Atuante no mercado desde 2017 desenvolvendo soluções e parcerias sólidas visando a satisfação do cliente. Possui um espírito inovador e sempre busca a excelência para se tornar referência no Mercado de soluções tecnológicas.</p>
              </li>
              <li className="mb-4">
                <div className="flex items-center">
                  <a href="#" className="mr-4 hover:underline">
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.14514 29.3176L7.79169 24.7918L6.60228 22.4129C4.32141 17.8512 5.01672 12.3642 8.36334 8.51562C13.0705 3.10239 21.3417 2.70801 26.5425 7.64881L26.9052 7.99332C29.6049 10.5581 31.0234 14.1912 30.7757 17.9067C30.2469 25.839 22.5573 31.2778 14.9019 29.1343L12.0417 28.3334L7.50347 29.6301C7.30609 29.6865 7.11611 29.5208 7.14514 29.3176ZM12.4829 12.0375L11.9575 13.2682C11.5355 14.2565 11.3964 15.3564 11.8049 16.3508C12.2957 17.5451 13.2363 19.2428 14.9773 20.7949C16.7183 22.347 18.5094 23.0845 19.7495 23.433C20.7818 23.7232 21.8543 23.4554 22.7831 22.9189L23.9783 22.2285C24.7886 21.7605 24.9154 20.6391 24.2303 20.0003L23.314 19.1231C22.8085 18.6518 22.0327 18.6298 21.502 19.072C20.9069 19.5679 19.6107 20.2272 18.934 19.8504C18.5303 19.6255 17.57 18.8855 17.2588 18.6081C16.8978 18.2862 16.0034 17.3331 15.7101 16.9096C15.3355 16.3686 15.7626 15.139 16.021 14.5337L16.1834 14.159C16.4188 13.6078 16.2789 12.9697 15.8319 12.5712L14.6825 11.5451C13.9736 10.9131 12.8561 11.1633 12.4829 12.0375Z" fill="#88BB76" />
                    </svg>
                  </a>
                  <a href="#" className="hover:underline">
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 22.6666C19.7384 22.6666 21.9583 20.4467 21.9583 17.7083C21.9583 14.9698 19.7384 12.7499 17 12.7499C14.2616 12.7499 12.0416 14.9698 12.0416 17.7083C12.0416 20.4467 14.2616 22.6666 17 22.6666Z" fill="#88BB76" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.83331 16.9999C2.83331 11.7038 2.83331 9.05568 3.9721 7.08325C4.71813 5.79109 5.79115 4.71807 7.08331 3.97204C9.05575 2.83325 11.7038 2.83325 17 2.83325C22.2961 2.83325 24.9442 2.83325 26.9166 3.97204C28.2088 4.71807 29.2818 5.79109 30.0279 7.08325C31.1666 9.05568 31.1666 11.7038 31.1666 16.9999C31.1666 22.2961 31.1666 24.9442 30.0279 26.9166C29.2818 28.2087 28.2088 29.2818 26.9166 30.0278C24.9442 31.1666 22.2961 31.1666 17 31.1666C11.7038 31.1666 9.05575 31.1666 7.08331 30.0278C5.79115 29.2818 4.71813 28.2087 3.9721 26.9166C2.83331 24.9442 2.83331 22.2961 2.83331 16.9999ZM17 24.7916C20.912 24.7916 24.0833 21.6203 24.0833 17.7083C24.0833 13.7962 20.912 10.6249 17 10.6249C13.088 10.6249 9.91665 13.7962 9.91665 17.7083C9.91665 21.6203 13.088 24.7916 17 24.7916ZM23.375 11.3333C24.5486 11.3333 25.5 10.3819 25.5 9.20825C25.5 8.03465 24.5486 7.08325 23.375 7.08325C22.2014 7.08325 21.25 8.03465 21.25 9.20825C21.25 10.3819 22.2014 11.3333 23.375 11.3333Z" fill="#88BB76" />
                    </svg>
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div>  <h2 className="text-sm font-semibold text-white uppercase dark:text-white">CONTATO</h2>
            <div className="h-2 w-10 bg-textVerde mt-1"></div>

            <ul className="text-white dark:text-gray-400 font-medium mt-10">
              <li className="mb-4 flex items-center">
                <span className="inline-block mr-2">
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.31233 6.71752L4.24338 4.85541C4.90476 3.53267 6.66765 3.24658 7.71337 4.29231L10.1853 6.76419C10.8447 7.42363 11.0082 8.43107 10.5911 9.26522L10.3065 9.83447C9.84856 10.7503 9.84095 11.8341 10.3745 12.708C10.7923 13.3922 11.3271 14.1779 11.8597 14.7105C12.3187 15.1696 12.9658 15.6302 13.5738 16.0162C14.5927 16.663 15.8926 16.541 16.8647 15.8258C17.7316 15.1879 18.9372 15.2927 19.681 16.0705L21.8038 18.2901C22.8119 19.3442 22.5115 21.0732 21.2069 21.7255L19.2825 22.6877C17.787 23.4355 16.0925 23.7531 14.5117 23.2082C12.613 22.5537 9.89174 21.2451 7.32336 18.6767C4.75498 16.1083 3.44633 13.3871 2.7918 11.4883C2.2469 9.90754 2.56456 8.21305 3.31233 6.71752Z" fill="#88BB76" />
                  </svg>
                </span>
                <p className="text-white  font-bold	">(35) 99932 - 9177</p>
              </li>


              <li className="mb-4 flex items-center">
                <span className="inline-block mr-2">
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.49984 4.33331H19.4998C21.8931 4.33331 23.8332 6.27341 23.8332 8.66665V17.3333C23.8332 19.7265 21.8931 21.6666 19.4998 21.6666H6.49984C4.1066 21.6666 2.1665 19.7265 2.1665 17.3333V8.66665C2.1665 6.27341 4.1066 4.33331 6.49984 4.33331ZM7.14984 7.09581C6.8806 6.73683 6.37132 6.66407 6.01234 6.93331C5.65335 7.20255 5.5806 7.71183 5.84984 8.07081L8.88317 12.1153C10.9415 14.8597 15.0582 14.8597 17.1165 12.1153L20.1498 8.07081C20.4191 7.71183 20.3463 7.20255 19.9873 6.93331C19.6284 6.66407 19.1191 6.73683 18.8498 7.09581L15.8165 11.1403C14.4082 13.018 11.5915 13.018 10.1832 11.1403L7.14984 7.09581Z" fill="#88BB76" />
                  </svg>
                </span>
                <p className="text-white  font-bold	">comercial@mmsolind.com</p>
              </li>



              <li className="mb-4 flex items-start">
                <span className="inline-block mr-2">

                  <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.3125 12.375C16.3125 13.9283 15.0533 15.1875 13.5 15.1875C11.9467 15.1875 10.6875 13.9283 10.6875 12.375C10.6875 10.8217 11.9467 9.5625 13.5 9.5625C15.0533 9.5625 16.3125 10.8217 16.3125 12.375Z" fill="#88BB76" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1292 23.9647C19.4957 21.5897 23.1237 17.3581 23.625 12.375C23.625 6.78312 19.0919 2.25 13.5 2.25C7.90812 2.25 3.375 6.78312 3.375 12.375C3.88023 17.3976 7.13496 21.6568 11.8444 24.0208C12.8821 24.5417 14.1091 24.5195 15.1292 23.9647ZM18 12.375C18 14.8603 15.9853 16.875 13.5 16.875C11.0147 16.875 9 14.8603 9 12.375C9 9.88972 11.0147 7.875 13.5 7.875C15.9853 7.875 18 9.88972 18 12.375Z" fill="#88BB76" />
                  </svg>
                </span>
                <div>
                  <p className="text-white font-bold	">Alameda Jatobá, 11 - Portal da Serra,</p>
                  <p className="text-white font-light	">Santa Rita do Sapucaí-MG, 37539-472</p>
                </div>
              </li>
            </ul>

          </div>


          <div>
            <h2 className=" text-sm font-semibold text-white uppercase dark:text-white">Area do Cliente - Sac</h2>
            <div className="h-2 w-20 bg-textVerde mt-1"></div>

            <ul className="text-white dark:text-gray-400 font-medium">
              <li className="mb-4">
                <p className='text-white mt-7'>Perguntas frequentes e suporte ao cliente.</p>

                <button
                  className={`bg-textVerde mt-3 text-white font-bold py-2 px-5 rounded-full text-center transition-colors duration-300 ${hovered ? 'hover:bg-customColor' : 'hover:bg-textVerde'}`}
                  style={{ width: '200px', fontWeight: '400' }}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  Clique aqui
                </button>
              </li>
              <li className="mb-4 mt-14">
                <p className=" text-white">NOVIDADES</p>
                <div className="h-2 w-14 bg-textVerde mt-1"></div>

              </li>
              <li className="mb-4">
                <p className="text-white">Receba todas as novidades dos nossos produtos e serviços em primeira mão em seu e-mail.</p>
              </li>

              <div className="flex items-center">
                <div className="relative">
                  <input type="email" placeholder="Seu email" className="w-300 px-4 py-2 border-t border-b border-l text-gray-800 border-gray-200 bg-white pr-12 rounded-full outline-none" />
                  <button className={`w-70 absolute inset-y-0 right-0 rounded-full transition-colors duration-300 px-3 py-2 border border-transparent text-base font-medium rounded-full text-white bg-textVerde  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center ${hovered ? 'hover:bg-customColor' : 'hover:bg-textVerde'}`}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                  >
                    <span className="mt-1">
                      <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M33.4835 18.2665C32.9222 17.7051 32.9222 16.7949 33.4835 16.2335C34.0449 15.6722 34.9551 15.6722 35.5165 16.2335L41.2625 21.9796C41.2754 21.9924 41.2881 22.0055 41.3006 22.0188C41.5406 22.2757 41.6875 22.6207 41.6875 23C41.6875 23.1928 41.6495 23.3768 41.5807 23.5448C41.5105 23.7164 41.4058 23.8772 41.2665 24.0165L35.5165 29.7665C34.9551 30.3279 34.0449 30.3279 33.4835 29.7665C32.9222 29.2051 32.9222 28.2949 33.4835 27.7335L36.7796 24.4375H5.75C4.95609 24.4375 4.3125 23.7939 4.3125 23C4.3125 22.2061 4.95609 21.5625 5.75 21.5625H36.7796L33.4835 18.2665Z" fill="#041837" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>




            </ul>
          </div>

        </div>
        <hr className="mx-auto w-900" />
        <div className="px-4  bg-bgFooter md:flex md:items-center md:justify-between">
        </div>
        <div className="px-4 py-6  bg-bgFooter md:flex md:items-center md:justify-between">
          <span className="text-sm text-white sm:text-center">© 2024 by M&M Soluções.  | CNPJ: 28.926.408/0001-08
          </span>

          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <a href="/sobre-nos" className="text-white  hover:text-textVerde">Sobre nós</a>
            <span className="text-white">|</span>
            <a href="/seguranca" className="text-white  hover:text-textVerde">Segurança</a>
            <span className="text-white">|</span>
            <a href="/politica-privacidade" className="text-white  hover:text-textVerde">Política de Privacidade</a>
            <span className="text-white">|</span>
            <a href="/envio" className="text-white  hover:text-textVerde">Envio</a>
            <span className="text-white">|</span>
            <a href="/troca-devolucao" className="text-white  hover:text-textVerde">Troca e Devolução</a>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;