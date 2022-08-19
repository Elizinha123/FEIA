export default function ItemTarefa(props){
    return(
        <li>
            {props.item} 
            <span onClick={e => props.removertarefa(props.item)} >(x)</span>    
        </li>
    )
}