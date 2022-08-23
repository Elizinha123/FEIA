import './index.scss'
import {useState} from 'react'


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
            {lista.map(item => 
             <li>
                {item}
                <span onClick={e => removerTarefa(item) }>(x)</span>
             </li>
               
            )}
         </ul>
    </section>
   )
}

