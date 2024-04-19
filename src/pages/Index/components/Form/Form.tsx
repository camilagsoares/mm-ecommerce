import { ContainerForm, BlueBackground, ResponsiveGreenFormContainer, StyledInput, StyledTextArea, SubmitButton, TextCardBlue, ContainerFormBlue, StyledSelect, Title } from "../../style"

export function Form() {

    return (
        <ContainerFormBlue>
            <ContainerForm>
                <BlueBackground>
                    <ResponsiveGreenFormContainer>
                        <form>
                            <div>
                                <div>
                                    <StyledSelect id="sobreImovel" name="sobreImovel">
                                        <option value="">Selecione sobre o imóvel</option>
                                        <option value="casa">Casa</option>
                                        <option value="loja">Loja</option>
                                        <option value="rural">Rural</option>
                                        <option value="industrial">Industrial</option>
                                        <option value="apartamento">Apartamento</option>
                                        <option value="condominio">Condomínio</option>
                                        <option value="outros">Outros</option>
                                    </StyledSelect>
                                </div>
                                <div>
                                    <StyledSelect id="tituloImovel" name="tituloImovel">
                                        <option value="">Selecione o título do imóvel</option>
                                        <option value="proprio">Próprio</option>
                                        <option value="alugado">Alugado</option>
                                        <option value="conjuge">Cônjuge</option>
                                        <option value="pais">Pais</option>
                                        <option value="filhos">Filhos</option>
                                        <option value="outros">Outros</option>
                                    </StyledSelect>
                                </div>
                            </div>
                            <div>
                                <StyledInput type="text" id="ultimaFatura" name="ultimaFatura" placeholder="Última Fatura:" />
                            </div>
                            <div>
                                <label htmlFor="name">Nome:</label>
                                <StyledInput type="text" id="name" name="name" />
                            </div>
                            <div>
                                <label htmlFor="email">E-mail:</label>
                                <StyledInput type="email" id="email" name="email" />
                            </div>
                            <div>
                                <label htmlFor="phone">Telefone:</label>
                                <StyledInput type="text" id="phone" name="phone" />
                            </div>
                            <div>
                                <StyledSelect id="tipoImovel" name="tipoImovel">
                                    <option value="">Selecione o tipo de imóvel</option>
                                    <option value="residencial">Residencial</option>
                                    <option value="comercial">Comercial</option>
                                </StyledSelect>
                            </div>
                            <div>
                                <StyledTextArea id="message" rows={4} placeholder="Mensagem:" name="message" />
                            </div>
                            <SubmitButton type="submit">Enviar</SubmitButton>
                        </form>
                    </ResponsiveGreenFormContainer>
                    <TextCardBlue>
                        <h2 style={{ color: 'white', margin: '0' }}>Solicite um orçamento</h2>
                        <h1 style={{ margin: '0' }}>Como podemos ajudar em seu negócio?</h1>
                    </TextCardBlue>
                    
                </BlueBackground>
            </ContainerForm>
        </ContainerFormBlue>
    )

}
