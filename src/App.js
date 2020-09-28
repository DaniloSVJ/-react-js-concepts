import React ,{useState,useEffect}from 'react'
import backgroundImage from './assets/background.jpg'
import Header from "./components/Header"
import  "./App.css"
import api from './services/api'

function App(){
    const [projects,setProjects] = useState([])

    // useState retorna um array com 2 posições
    // 1. Variável com o valor inicial
    // 2. Função para atualizarmos o valor da posição
    useEffect(()=>{
       api.get('/projects').then(response=>{
         setProjects(response.data) 
       });
    },[])

   // let i =0;
    
    async function handleAddProject(){
        // setProjects([...projects,`Novo Projeto ${Date.now()}` ])
        const response= await api.post("projects",{
          // id: i++,
            title: `Novo Projeto ${Date.now()}` , 
            owner: "Danilo Vieira"
        })
        const project = response.data;
        setProjects([...projects,project])
      //  setProjects([...projects,project]); //Mostra o que já tem e adiciona no final do array
    }
    return (
        <>
            
            <Header title="Project"/>

            <ul>
             {projects.map(project=><li key={project.id}>{project.title}</li>)}   
             </ul>

             <button type="button" onClick={handleAddProject}>Adicionar Projeto</button> 
        </>
    
    )
}

export default App;
