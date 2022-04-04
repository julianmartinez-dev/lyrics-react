import { useState } from "react";
import useLetras from "../hooks/useLetras";

const Formulario = () => {

    const [busqueda, setBusqueda] = useState({
        artista: "",
        cancion: ""
    })
    
    const { alerta, setAlerta, buscarLetra } = useLetras();

    const handleSubmit = e => {
        e.preventDefault();
        
        if(Object.values(busqueda).includes("")){
            setAlerta("Todos los campos son obligatorios");
            return;
        }
        
        buscarLetra(busqueda);
    }
    

  return (
    <form action=""
        onSubmit={handleSubmit}
    >
      <legend>Busca Por Artistas Y Canción</legend>
      <div className="form-grid">
        <div>
          <label htmlFor="artista">Artista</label>
          <input
            type="text"
            id="artista"
            name="artista"
            placeholder="Nombre Artista"
            value={busqueda.artista}
            onChange={e => setBusqueda({ ...busqueda, artista: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="cancion">Canción</label>
          <input
            type="text"
            id="cancion"
            name="cancion"
            placeholder="Nombre Canción"
            value={busqueda.cancion}
            onChange={e => setBusqueda({ ...busqueda, cancion: e.target.value })}
          />
        </div>
        <input type="submit" value="Buscar" />
      </div>
    </form>
  );
};

export default Formulario;
