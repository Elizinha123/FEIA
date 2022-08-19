import "./index.scss"
import Becobeco from './componentes/becobeco'
import Contador from './componentes/contador'
import VariavelEstado from './VariavelEstado/index'
import Calculadore from "./componentes/Calculadora"
import SituacaoAluno from "./pages/SituacaoAluno"
import Bocoboco from "./pages/Renderizacao"
import Tarefa from "./pages/Tarefa"
import ItemTarefa from "./componentes/itemTarefa"

function App() {
  
  return (
    <div ClassName="pag-p">
      Estudando ReactJS | Componentes
      <div>
        <Becobeco titulo="t" numero = "1" alinhamento="direita" />
        <Becobeco titulo="t" numero = "2" alinhamento="esquerda"/>
        <Becobeco titulo="t2" numero = "3"  alinhamento="baixo"/>

        <Contador/>
        <VariavelEstado />
        <hr></hr>
        <Calculadore/>
        <hr></hr>
        <SituacaoAluno/>

        < Bocoboco />
        <hr></hr>
        <Tarefa/>
        <ItemTarefa/>
      </div>
    </div>
  );
}

export default App;
