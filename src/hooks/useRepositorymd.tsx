import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";


interface RepositoriesProviderProps {
    children: ReactNode
}




interface Repository{
    id: number;
    name: string;
    description: string;
    
}


interface RepositoryContextData{
    repositories: Repository[]
}


const RepositoryContext = createContext <RepositoryContextData> (
    {} as RepositoryContextData
);

export  function RepositoryProvider({children}: RepositoriesProviderProps ){

    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(() =>{
        api.get('/users/Demerbr/repos')
        .then(response => console.table(response.data))
    }, [])

    useEffect(() =>{
        api.get('/users/Demerbr/repos')
        .then(response => setRepositories(response.data))     
    }, [repositories])

   
    



    return(
        <RepositoryContext.Provider value={{repositories}}>
            {children}
        </RepositoryContext.Provider>
    )
}

export function useRepositories(){
    const context = useContext(RepositoryContext)

    return context
}