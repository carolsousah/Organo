import { IoCloseCircleSharp, IoHeartSharp, IoHeartOutline } from "react-icons/io5";
import './Colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
    function favoritar() {
        aoFavoritar(colaborador.id);
    }

    const propsfavorito = {
        size: 20,
        onClick: favoritar
    }

    return (<div className="colaborador">
        <IoCloseCircleSharp
            size={25}
            className="deletar"
            onClick={() => aoDeletar(colaborador.id)}
        />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className="favoritar">
                {colaborador.favorito
                ? <IoHeartSharp {...propsfavorito} color='#ff0000'/>
                : <IoHeartOutline {...propsfavorito}/>
                }
            </div>
        </div>
    </div>)
}

export default Colaborador