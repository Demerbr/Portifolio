import { Cabecalho,  Menu  } from "./styles";
import githubicon from "../../assets/img/githubIcon.svg"
import linkedinicon from "../../assets/img/linkedinIcon.svg"
import emailicon from "../../assets/img/emailIcon.svg"
import discordicon from "../../assets/img/discordIcon.svg"




export function Header(){
    return(
        <>
       <Cabecalho>
            
                <Menu>
                    <div className="menuName"> 
                        <h2>_DemerBr</h2>

                        <img className="github" src={githubicon} alt="icone github" />
                    </div>
                   
                    <div className="hello">
                        <h2></h2>
                    </div>

                    <div className="about">
                        <h2></h2>
                    </div>


                    <div className="project">
                        <h2>_projects</h2>
                    </div>

                    <div className="gap">
                        
                    </div>
                
                    <div className="contact">
                        <h2>_contact-me</h2>
                        <a href="https://www.linkedin.com/in/demerson-barros/" target={"_blank"} rel="noreferrer">
                            <img src={linkedinicon} alt="icone Linkedin" />
                        </a>

                        <a href="mailto:demerson.b@hotmail.com" target={"_blank"} rel="noreferrer" >
                            <img src={emailicon} alt="icone Email" />
                        </a>

                        <a href="https://discord.gg/WTjUD3T7" target={"_blank"} rel="noreferrer">
                            <img src={discordicon} alt="icone Discord" />
                        </a>
                    </div>
                </Menu>
           
       </Cabecalho>
        </>
    )
}