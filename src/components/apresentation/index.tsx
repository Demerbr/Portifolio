import {  Perfil, Portifolio, Wrapper } from "./styles";
import imgPasta from "../../assets/img/pasta.svg"
import githubicon from "../../assets/img/githubIcon.svg"





export function Apresentation () {

    const maior = ">"
    return(

        <>

        <Wrapper>


            <Perfil>

                <div className="DadosDev">
                    <p>Hi all. I am</p>
                    <h1>Demerson Barros</h1>
                    <h2> {maior} Full-stack developer </h2>
                </div>

                <div className="DadosGithub">
                    <p className="const">const</p>
                    <p className="variable">github</p>
                    <p className="operator">=</p>
                    <a href="https://github.com/Demerbr" target="_blank" rel="noreferrer">"https://github.com/Demerbr"</a>
                        
                </div>


            </Perfil>

            <Portifolio>

               

                <div className="card">
                    <header className="header-card">
                        
                            <img className="pasta" src={imgPasta} alt="icone pasta" />
                            <img className="github" src={githubicon} alt="icone github" />
                    </header>

                    <div className="project">
                        <h2>Title</h2>
                        <p>description of project on Github</p>
                    </div>

                    <div className="tecnologias">
                        <p>Tecnologias</p>
                        <p>React</p>
                        <p>TypeScript</p>
                    </div>
                </div>

                
                
            </Portifolio>
        
        </Wrapper>
        
        </>
    )
}