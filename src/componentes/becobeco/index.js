import "./index.scss"
import "../../common/common.scss"

function Becobeco(props){

   

    return (
        <div className="compo-estudo">
            <div className="tudo">
            <h1 className={props.titulo}>Seção {props.numero}</h1>
            <div className={props.alinhamento}>
            <p className="texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex odio, varius non maximus at, consectetur non purus. Ut nec ullamcorper nisl, non porttitor dui.</p>
            <div className="tamanho">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7zhjiV7CCvNwmjpotUjxO8rBxxku9WQH4TPDVhfMhFxKNCDwAwUYLu02wmhyIdifkpiE&usqp=CAU"/>
            </div>
            </div>
            </div>
        </div>
    )

}
export default Becobeco