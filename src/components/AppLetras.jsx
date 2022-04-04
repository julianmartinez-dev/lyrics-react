import Formulario from "./Formulario"
import useLetras from "../hooks/useLetras"
import Alerta from "./Alerta"
import Letra from "./Letra"

export const AppLetras = () => {

  const { alerta, letra, cargando } = useLetras();

  return (
    <>
      <header>Busqueda de Letras de Canciones</header>
      <Formulario />
      <main>
        {alerta ? <Alerta>{alerta}</Alerta> 
                : letra ? <Letra /> 
                : cargando ? 'Cargando...' 
                : <p className="text-center">Busca letras de tus artistas favoritos</p>
        }
      </main>
    </>
  )
}
