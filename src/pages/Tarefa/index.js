import './index.scss'
import {useState} from 'react'
import ItemTarefa from '../../componentes/itemTarefa';

export default function Tarefinha(){
    const[tarefa, setTarefa] = useState('');
    const[lista, setLista] = useState([]);

    function addTarefinha(){
        let Novalista = [...lista, tarefa];
        setLista(Novalista);
        setTarefa('');
    }

    function removerTarefa(t) {
        let novaLista = lista.filter(item => item !== t);
        setLista(novaLista);
    }

   return(
    <section>
        <h1>Tarefinha Do Balacubaco</h1>
        <div>
         Nova tarefinha: <input type="text" value = {tarefa} onChange= {e => setTarefa(e.target.value)} />
        <button onClick={addTarefinha}>Adicionar</button>
         </div>

         <ul>
            {lista.map(item=> 
            <ItemTarefa item = {item} removerTarefa = {removerTarefa}/>
               
            )}
         </ul>
    </section>
   )
}

