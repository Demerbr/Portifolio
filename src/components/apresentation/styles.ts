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
height: 50vh;
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
            color: orange;
            transition: 0.2s;
        }

        a:hover{
            box-shadow:  0 0 4em orange;
            transform: scale(1.1) translate(10%, 10%);        
            border-radius: 50%;
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

                a{
                    margin: 52px;
                    background-color: transparent;
                    padding: 0;
                }
        
        
                img{
                    padding: 0;
                    background-color: unset ;
                    border-radius: 10%;
                   
                }

                .pasta{
        
                    width: 40px;
                    height: 40px;
                    padding: 0;
                    border-radius: 50%;
                    transition: 0.2s;  


                    
                }

                .pasta:hover{
                    box-shadow:  0 0 2em white;
                    transform: scale(1.2);
                }
        
                .github{
                    margin: 32px;
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
                text-align: center;

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
