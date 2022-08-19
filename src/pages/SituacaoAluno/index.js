import { useEffect, useState } from "react";

export default function Bicobico(){
    const [n1, setN1]= useState(0)
    const [n2, setN2]= useState(0)
    const [n3, setN3]= useState(0)
    const [media, setMedia]= useState(0)
    const [situacao, setSituacao]= useState('')


    function calcular()
{
    let x= (n1+n2+n3)/3;
    setMedia(x)
}

    useEffect(() =>{
        calcular()
    },[n1,n2,n3])




    function verificacao(){
        if(media < 0 ||  media > 10 ){ 
        setSituacao('nao existe');}

        else if(media <=3  || media < 5 ){ 
        setSituacao('recuperaçao:(');}

        else if(media >=5){
        setSituacao('boa, passou');}
         else
        setSituacao('nao, nao, ja era!')
    }

    useEffect(() =>{
        verificacao()
    }, [media])




    return(
        <header>
        <h1>Verificação da situacao do aluno</h1>
        <div>
        <input type='number' value={n1} onChange={e => setN1(Number (e.target.value))} />
        <input type='number' value={n2} onChange={e => setN2(Number (e.target.value))}/>
        <input type='number'value={n3} onChange={e => setN3(Number (e.target.value))}/>
        <input type='number' value={media} onChange={e => setMedia(Number (e.target.value))} />
        </div>
        <div>
        {situacao === 'boa, passou' && 
            <h1>Eita o homem msm </h1>
        }
        {situacao === 'nao existe' && 
            <h1>invalido alpha</h1>
        }
        {situacao === 'recuperaçao:(' && 
            <h1>vc esta de recuperao ja era</h1>
        }
        {situacao === 'nao, nao, ja era!' && 
            <h1>ta fudido</h1>
        }
        </div>
        </header>
    );
}