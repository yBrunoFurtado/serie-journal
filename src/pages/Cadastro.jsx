import SerieForm from "../components/SerieForm/SerieForm";

function Cadastro({ addSerie, atualizarSerie, serieEditando, series }) {

  return (
    <div className="container">

      <h1>Cadastrar séries</h1>

      <SerieForm
        addSerie={addSerie}
        atualizarSerie={atualizarSerie}
        serieEditando={serieEditando}
        series={series}
      />

    </div>
  );
}

export default Cadastro;