import { useState } from "react";
import './index.scss'
import "../../common/common.scss"


export default function Calculadore (){
  const [n1, SetN1] = useState(0);
  const [n2, SetN2] = useState(0);
  const [resp, SeResp] = useState(0);

  function Somar(){
    let x = n1 + n2 ;
    SeResp(x);
  }

  return(
    <section className="p">
        <h1>Calculadore</h1>
        <div className="aj">
        <p className="lt1">Numero 1</p>
        <input className="telinha tl2" type="text" value = {n1} onChange={e => SetN1 (Number(e.target.value)) } />
        <p  className="lt1">Numero 2</p>
        <input className="telinha" type="text" value = {n2} onChange={e => SetN2 (Number(e.target.value)) } />
        <div className="resu"> {resp} </div>
        <div className="a">
       <button className="butt" onClick={Somar}>Somar</button>
       </div>
        </div>       
    </section>
    
  )
}