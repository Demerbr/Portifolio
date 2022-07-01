import {  Perfil, Portifolio, Wrapper } from "./styles";
import imgPasta from "../../assets/img/pasta.svg"
import githubicon from "../../assets/img/githubIcon.svg"
import { useRepositories } from "../../hooks/useRepositorymd";






export function Apresentation () {

    const { repositories } = useRepositories()

    // const [repositories, setRepositories] = useState<Repository[]>([])


    // useEffect(()=>{
    //     api.get("/users/Demerbr/repos")
    //     .then(response => setRepositories(response.data))
    // }, [])

    // console.log(repositories)

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
            {repositories.map(repository =>{
                return(

               
                
                <div className="card">

                    <header className="header-card">
                        
                            <img className="pasta" src={imgPasta} alt="icone pasta" />
                            <img className="github" src={githubicon} alt="icone github" />
                    </header>

                    
                            <div className="project">
                          
                                <h2>{repository.name}</h2>
                                <p>{repository.description ?? "Description of projects"}</p>
                                
                            </div>

                            <div className="tecnologias">
                                <p>Tecnologias</p>
                                <p>React</p>
                                <p>TypeScript</p>
                            </div>

                    

                    
                </div>

                
                


                )
            })}
            </Portifolio>


            
                       
        </Wrapper>
        
        </>
    )
}