import styled from "styled-components";





export const Wrapper = styled.section`
display: flex;
max-width: 100vw;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 100px;
    



`

export const Perfil = styled.section`
display: flex;
flex-direction: column;
align-items: center;
width: 80%;
height: 40vh;
margin: 0px;
    .DadosDev{

    p{
        font-size: 64px;
        color: #E5E9F0;
    }

    h1{
        font-size: 92px;
        font-weight: 400;
        font-family: 'Fira Code';
        color: #E5E9F0;
    }

    h2{
        font-size: 32px;
        color: #4D5BCE;
    }
    }

    .DadosGithub{
    display: flex;
    flex-wrap: wrap;
    margin-top: 16px;
    gap: 14px;

        .const{
            font-size: 32px;
            color: #4D5BCE;
        }

        .variable{
            font-size: 32px;
            color: #43D9AD;
        }

        .operator{
            font-size: 32px;
            color: #ffffff;
        }

        a{
            font-size: 32px;
            text-decoration: none;
            color: #E99287;
        }

        

    }


` 

export const Portifolio = styled.section`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
max-width: 80%;

    .card{
        display: flex;
        flex-direction: column;
        align-items: center;
        
        

        width: 400px;
        height: 350px;
        margin: 32px;
        border-radius: 8px;
        background-color: #345575;

            
            .header-card{
                display: flex;
                width: 100%;
                height: 64px;
                margin-top: 32px;
                justify-content: space-between;
                background-color: #345575;
                align-items: center;
        
        
                img{
                    margin: 52px;
                    padding: 0;
                    background-color: #345575 ;
                }
                .pasta{
        
                    width: 40px;
                    height: 40px;
                    
                }
        
                .github{
                    width: 32px;
                    height: 32px;
                }
        
            }

            .project{
                width: 90%;
                height: 50%;
                color: #ffffff;
                background-color: transparent;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: initial;
                gap: 16px;

                h2{
                    background-color: transparent;
                    margin: 16px;
                }
                p{
                    background-color: transparent;

                }
            }

            .tecnologias{
                width: 90%;
                background-color: transparent;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;
                color: #00F1FF;

                p{
                    background-color: transparent;
                    margin: 8px;
                }
            }
    }


`
