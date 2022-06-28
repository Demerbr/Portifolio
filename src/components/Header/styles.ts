import styled from "styled-components";

  


  export const Cabecalho = styled.section`
  /* border-bottom: 1px solid #607B96; */
  color: #607B96;
  font-size: 12px;
  width: 100vw;
  height: 69px;
  padding: 0;
  margin: 0;
  
  ` 



  export const Menu = styled.div`
  display: flex;
  justify-content:space-between;
 




  div{
    flex: auto;
    display: flex;
    border: 1px solid #607B96;
    border-right: none;
    border-top: none;
    width: 8vw;
    height: 69px;
    align-items: center ;
    justify-content: center;
    flex-wrap: wrap;


  }

  .menuName{
    /* width: 20vw; */
    justify-content: start;
    border-left: none;
    padding: 16px;
    flex: 3;
    h2{
        margin-left: 16px;

      }
     
  }

  .gap{
    /* width: 60vw ; */
    flex: 10;
  }

  .hello{
    padding: 16px;
    flex: 0;
  }
  .about{
    padding: 16px;

    flex: 1;
  }
  .project{
    padding: 16px;
    flex: 1;
  }

  .contact{
    /* width: 11vw; */
    display: flex;
    justify-content: end;
    padding: 16px;
    flex: 2;
      h2{
        margin-right: 16px;

      }
  }
 
  
  `


  

  