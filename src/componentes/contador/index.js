import './index.scss'
import {useState} from 'react';

export default function Contador(props) {
    const [cont, setCount] = useState(0); 

    function add() {
        setCount (cont + 1);
    }

    return (
       <section classname= "">
        <h1> {props.titulo} </h1>
        <div>{cont}</div>

        <button onClick={add} > Adicionar</button>
       </section>


        )
}

