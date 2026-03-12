import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";


import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Cadastro from "./pages/Cadastro";
import Listagem from "./pages/Listagem";

function App() {

  const [series, setSeries] = useState([]);

  const [serieEditando, setSerieEditando] = useState(null);

  // adicionar serie
  const adicionarSerie = (novaSerie) => {
    setSeries([...series, novaSerie]);
  };

  // excluir serie
  const excluirSerie = (index) => {
    const novas = [...series];
    novas.splice(index, 1);
    setSeries(novas);
  };

  // iniciar edicaoo
  const editarSerie = (index) => {
    setSerieEditando(index);
  };

  // atualizar serie
  const atualizarSerie = (serieAtualizada) => {

    const novasSeries = series.map((serie, index) =>
      index === serieEditando ? serieAtualizada : serie
    );

    setSeries(novasSeries);
    setSerieEditando(null);
  };

  
  return (
    <>
      <NavBar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/sobre" element={<Sobre />} />

        <Route
          path="/cadastro"
          element={
            <Cadastro
              addSerie={adicionarSerie}
              atualizarSerie={atualizarSerie}
              serieEditando={serieEditando}
              series={series}
            />
          }
        />

        <Route
          path="/series"
          element={
            <Listagem
              series={series}
              removeSerie={excluirSerie}
              editarSerie={editarSerie}
            />
          }
        />

      </Routes>
    </>
  );
}

export default App;