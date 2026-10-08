// Importamos hooks de React para el ciclo de vida y el estado
import { useEffect, useState } from 'react'
// Importamos el hook del store
import { useCarritoStore } from '../store/useCarritoStore'

// Tasa de cambio aproximada para mostrar los precios de la API en pesos
const TASA_USD_A_COP = 4100

// URL de la API con productos ficticios (DummyJSON)
const URL_API = 'https://dummyjson.com/products?limit=8'

// Definimos el componente ProductosApi
function ProductosApi() {
  // Del store solo necesitamos la acción para agregar
  const agregarProducto = useCarritoStore((state) => state.agregarProducto)

  // Estado para los productos que llegan de la API
  const [productos, setProductos] = useState([])
  // Estado para saber si la petición sigue en curso
  const [cargando, setCargando] = useState(true)
  // Estado para guardar un posible error de la red
  const [error, setError] = useState(null)

  // useEffect ejecuta la petición una sola vez al montar el componente
  useEffect(() => {
    // Creamos una función asíncrona para poder usar await
    const cargarProductos = async () => {
      try {
        // Traemos los datos de la API
        const respuesta = await fetch(URL_API)

        // Si la respuesta no fue exitosa, lanzamos un error
        if (!respuesta.ok) throw new Error('No se pudo cargar la API')

        // Convertimos la respuesta a JSON
        const datos = await respuesta.json()

        // Adaptamos cada producto de la API al formato de nuestra tienda
        const adaptados = datos.products.map((producto) => ({
          // Prefijo "api-" para que los ids no choquen con los productos locales
          id: `api-${producto.id}`,
          nombre: producto.title,
          // Convertimos el precio en dólares a pesos colombianos
          precio: Math.round(producto.price * TASA_USD_A_COP),
          imagen: producto.thumbnail,
        }))

        setProductos(adaptados)
      } catch (err) {
        setError(err.message)
      } finally {
        // Termine bien o mal, la carga ya no está en curso
        setCargando(false)
      }
    }

    cargarProductos()
  }, []) // El arreglo vacío hace que solo se ejecute una vez

  return (
    <div className="productos-api">
      {/* Subtítulo que identifica la sección */}
      <h3>Productos desde la API</h3>

      {/* Mientras carga mostramos un mensaje */}
      {cargando && <p className="estado-api">Cargando productos...</p>}

      {/* Si hubo error lo mostramos */}
      {error && <p className="estado-api estado-error">{error}</p>}

      {/* Recorremos los productos de la API igual que los locales */}
      {productos.map((producto) => (
        <div key={producto.id} className="fila">
          <div className="producto-info">
            <img
              className="imagen-producto"
              src={producto.imagen}
              alt={producto.nombre}
            />
            <div>
              <p className="fila-nombre">{producto.nombre}</p>
              <p className="fila-detalle">
                ${producto.precio.toLocaleString('es-CO')}
              </p>
            </div>
          </div>
          <button
            className="btn btn-primario"
            onClick={() => agregarProducto(producto)}
          >
            Agregar
          </button>
        </div>
      ))}
    </div>
  )
}

// Exportamos el componente
export default ProductosApi
