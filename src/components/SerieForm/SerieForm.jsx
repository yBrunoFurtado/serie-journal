import { useState, useEffect } from "react";

function SerieForm({ addSerie, atualizarSerie, serieEditando, series }) {

  const [form, setForm] = useState({
    titulo: "",
    temporadas: "",
    lancamento: "",
    diretor: "",
    produtora: "",
    categoria: "",
    assistido: ""
  });

  // preencher formulario ao editar
  useEffect(() => {

    if (serieEditando !== null && series[serieEditando]) {
      setForm(series[serieEditando]);
    }

  }, [serieEditando, series]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!form.titulo) {
      alert("Título obrigatório");
      return;
    }

    if (serieEditando !== null) {
      atualizarSerie(form);
    } else {
      addSerie(form);
    }

    // limpar formulário
    setForm({
      titulo: "",
      temporadas: "",
      lancamento: "",
      diretor: "",
      produtora: "",
      categoria: "",
      assistido: ""
    });

  };

  return (

    <form onSubmit={handleSubmit}>

      <input name="titulo" value={form.titulo} placeholder="Título" onChange={handleChange} />

      <input name="temporadas" value={form.temporadas} type="number" placeholder="Número de Temporadas" onChange={handleChange} />

      <input name="lancamento" value={form.lancamento} type="date" onChange={handleChange} />

      <input name="diretor" value={form.diretor} placeholder="Diretor" onChange={handleChange} />

      <input name="produtora" value={form.produtora} placeholder="Produtora" onChange={handleChange} />

      <input name="categoria" value={form.categoria} placeholder="Categoria" onChange={handleChange} />

      <input name="assistido" value={form.assistido} type="date" onChange={handleChange} />

      <button type="submit">
        {serieEditando !== null ? "Atualizar Série" : "Cadastrar Série"}
      </button>

    </form>

  );
}

export default SerieForm;