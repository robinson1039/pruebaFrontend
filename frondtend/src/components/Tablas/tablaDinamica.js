import { useState } from "react"

function TablaDinamica() {
  const [elementos, setElementos] = useState([
    { id: "E1", peso: "", calorias: "" },
  ]);

  const [minCalorias, setMinCalorias] = useState(15)
  const [pesoMaximo, setPesoMaximo] = useState(10)
  const [resultado, setResultado] = useState(null)

  const agregarElemento = () => {
    const nuevoId = `E${elementos.length + 1}`
    setElementos([...elementos, { id: nuevoId, peso: "", calorias: "" }])
  };

  const eliminarUltimoElemento = () => {
    if (elementos.length > 1) {
      setElementos((prev) => prev.slice(0, -1))
    }
  };

  const handleChange = (index, campo, valor) => {
    const nuevos = [...elementos]
    nuevos[index][campo] = valor
    setElementos(nuevos)
  };

  const calcularCombinacion = () => {
    const elementosNumericos = elementos.map((el) => ({
      ...el,
      peso: parseInt(el.peso, 10),
      calorias: parseInt(el.calorias, 10),
    }))

    const combinaciones = (arr) => {
      const resultado = []
      const total = 1 << arr.length

      for (let i = 1; i < total; i++) {
        const combo = []
        for (let j = 0; j < arr.length; j++) {
          if (i & (1 << j)) combo.push(arr[j])
        }
        resultado.push(combo)
      }

      return resultado;
    };

    const todas = combinaciones(elementosNumericos);

    const validas = todas
      .map((combo) => {
        const pesoTotal = combo.reduce((acc, e) => acc + e.peso, 0)
        const caloriasTotales = combo.reduce((acc, e) => acc + e.calorias, 0)
        return { combo, pesoTotal, caloriasTotales }
      })
      .filter(
        (e) => e.caloriasTotales >= minCalorias && e.pesoTotal <= pesoMaximo
      );

    if (validas.length === 0) {
      setResultado("No hay combinación válida.")
      return;
    }

    const mejorCombinacion = validas.reduce((a, b) => (a.pesoTotal < b.pesoTotal ? a : b))

    setResultado(
      `Mejor combinación: ${mejorCombinacion.combo
        .map((e) => e.id)
        .join(", ")} | Peso total: ${mejorCombinacion.pesoTotal} | Calorías: ${
        mejorCombinacion.caloriasTotales
      }`
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen space-y-6">
      <div className="flex gap-4">
        <label className="flex flex-col">
          Calorías mínimas
          <input
            type="number"
            value={minCalorias}
            onChange={(e) => setMinCalorias(Number(e.target.value))}
            className="border rounded px-2 py-1"
          />
        </label>
        <label className="flex flex-col">
          Peso máximo
          <input
            type="number"
            value={pesoMaximo}
            onChange={(e) => setPesoMaximo(Number(e.target.value))}
            className="border rounded px-2 py-1"
          />
        </label>
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-lg shadow-md overflow-hidden">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-4 py-2 rounded-tl-lg">Elemento</th>
              <th className="px-4 py-2">Peso</th>
              <th className="px-4 py-2">Calorías</th>
            </tr>
          </thead>
          <tbody>
            {elementos.map((el, index) => (
              <tr key={el.id} className="text-center border-t">
                <td className="px-4 py-2">{el.id}</td>
                <td className="px-4 py-2">
                  <input
                    type="number"
                    value={el.peso}
                    onChange={(e) =>
                      handleChange(index, "peso", e.target.value)
                    }
                    className="w-full border rounded px-2 py-1"
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    type="number"
                    value={el.calorias}
                    onChange={(e) =>
                      handleChange(index, "calorias", e.target.value)
                    }
                    className="w-full border rounded px-2 py-1"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex gap-4">
        <button
          onClick={agregarElemento}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Agregar Elemento
        </button>

        <button
          onClick={eliminarUltimoElemento}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Eliminar Último Elemento
        </button>
        <button
          onClick={calcularCombinacion}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Calcular Combinación
        </button>
      </div>

      {resultado && (
        <div className="mt-4 p-4 bg-white rounded shadow">
          <p>{resultado}</p>
        </div>
      )}
    </div>
  );
}

export default TablaDinamica;
