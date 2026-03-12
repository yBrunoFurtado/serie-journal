import { useNavigate } from "react-router-dom";

function SerieList({ series, removeSerie, editarSerie }) {

  const navigate = useNavigate();

  const handleEditar = (index) => {
    editarSerie(index);
    navigate("/cadastro");
  };

//deixar a data certa  
const formatarData = (data) => {
  if (!data) return "";

  const d = new Date(data);
  return d.toLocaleDateString("pt-BR");
};




  return (

    <div>

    {series.map((serie, index) => (

    <div key={index} className="serie-item">

    <span>{serie.titulo}</span>

    <span>{serie.temporadas} temporadas</span>

    <span>{formatarData(serie.lancamento)}</span>

    <span>{serie.diretor}</span>

    <span>{serie.produtora}</span>

    <span>{serie.categoria}</span>

    <span>{formatarData(serie.assistido)}</span>

    <button onClick={() => handleEditar(index)}>
      Editar
    </button>

    <button onClick={() => removeSerie(index)}>
      Excluir
    </button>


    </div>

  ))}

    </div>

  );
}

export default SerieList;