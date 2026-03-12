import SerieList from "../components/SerieList/SerieList";

function Listagem({ series, removeSerie, editarSerie }) {

  return (
    <div>

      <h1>Lista de séries</h1>

      <SerieList
        series={series}
        removeSerie={removeSerie}
        editarSerie={editarSerie}
      />

    </div>
  );
}

export default Listagem;