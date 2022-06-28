import { Cabecalho,  Menu  } from "./styles";


export function Header(){
    return(
        <>
       <Cabecalho>
            
                <Menu>
                    <div className="menuName"> 
                        <h2>_DemerBr</h2>
                    </div>
                   
                    <div className="hello">
                        <h2>_hello</h2>
                    </div>

                    <div className="about">
                        <h2>_about-me</h2>
                    </div>


                    <div className="project">
                        <h2>_projects</h2>
                    </div>

                    <div className="gap">
                        
                    </div>
                
                    <div className="contact">
                        <h2>_contact-me</h2>
                    </div>
                </Menu>
           
       </Cabecalho>
        </>
    )
}