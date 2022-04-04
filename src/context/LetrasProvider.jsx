import { useState, createContext } from 'react';
import axios from 'axios';

const letrasContext = createContext();

const LetrasProvider = ({ children }) => {
  const [alerta, setAlerta] = useState('');
  const [letra, setLetra] = useState('');
  const [cargando, setCargando] = useState(false);

  const buscarLetra = async ({ artista, cancion }) => {

    setCargando(true);
    try {
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const {data} = await axios(url);
      setLetra(data.lyrics)
      setAlerta('');
    } catch (error) {
      setAlerta('Cancion no encotrada');
    }
    finally {
      setCargando(false);
    }
  };

  return (
    <letrasContext.Provider
      value={{
        buscarLetra,
        alerta,
        setAlerta,
        letra,
        cargando
      }}
    >
      {children}
    </letrasContext.Provider>
  );
};

export { LetrasProvider };

export default letrasContext;
