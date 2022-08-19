import { useState } from "react"
import './index.scss'
import "../../common/common.scss"

export default function Bocoboco () {
    const [mostrar, setMostrar] = useState(false);
    const[anime, setAnime] = useState('');
    const [respquiz, setRespquiz ] = useState('');
    const [acertou, setAcertou] = useState(false); 
    const [escolheu, setEscolheu] = useState(false);



    function Phoebe(event){
        if(event.target.checked) {
        setRespquiz('Não, ela ficou com o Mike');
        setAcertou(false);
     }
    }

    function Rachel(event){
        if(event.target.checked) {
        setRespquiz('Sim, faltando 1 minuto pra Rachel ir embora, o Ross se declara pra ela por telefone');
        setAcertou(true); 
        
    }
    } 

    function exibir(){
        setMostrar(true);
    }

    return(
        <section className="pagina-r">
            <h1 className="meio">Holaa amigues</h1>
            <div>
                <div className="meio">
             <button className="botao-r" onClick={exibir}> Quiero hacer una pregunta </button>
            </div>
             {mostrar === true &&
             <div className="container">
             <h3 className="centered">Quieres romance?</h3>
             <img src="https://blog.petiko.com.br/wp-content/uploads/2018/05/cachorro-romantico-1.jpg" alt=""/>
             </div>
             }
            </div>
            <div>
                <h2>Com quem Ross fica no final da serie?</h2>
                <input type="radio" name="quiz" onChange={Phoebe} disabled= {escolheu} /> Phoebe
                <input type="radio" name="quiz" onChange={Rachel} disabled= {escolheu} /> Rachel  
                <div>
                    {respquiz}
                </div>
                <div>
                    {acertou && 
                        <h2>eita é isso mesmo em </h2>
                    }
                </div>
                <div>
                    <h3> Top Piores Animes </h3>
                    <div>
                        <span onClick={e => setAnime('NanatsuNoTazai')} className={anime}> Nanatsu no Tazai </span> &nbsp;
                        <span onClick={e => setAnime('TokyoRevengers')} className={anime}> Tokyo Revengers </span> &nbsp;
                        <span onClick={e => setAnime('Kakegurui')} className={anime}> Kakegurui </span> &nbsp;
                        <span onClick={e => setAnime('BokuNoHero')} className={anime}> Boku no Hero </span> &nbsp;

                    {anime === 'NanatsuNoTazai' &&
                        <p> Pessimo, animação podre, pedofilia, assedio, tudo de ruim, so os peitao </p>
                    }

                    {anime === 'TokyoRevengers' &&
                        <p> Ruim, so os rabao dos personagens com uma animaçâo horrivel de ruim, tudo gado com tara em traiçâo </p>
                    }

                    {anime === 'Kakegurui' &&
                        <p> Cartas e sapecagens </p>
                    }

                    {anime === 'BokuNoHero' &&
                        <p> Herois ruins que e bom ate </p>
                    }
                    </div>
                </div>
            </div>
        </section>
    )
}