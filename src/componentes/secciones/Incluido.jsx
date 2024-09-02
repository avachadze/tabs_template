import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

function Incluido({ buscar, actual, next }) {
  const [habitaciones, setHabitaciones] = useState([
    {
      id: "habitacion_individual",
      habitacion: "Individual",
      elegido: "false",
    },
    {
      id: "habitacion_doble",
      habitacion: "Doble",
      elegido: "false",
    },
    {
      id: "habitacion_doble_superior",
      habitacion: "Doble superior",
      elegido: "false",
    },
    {
      id: "habitacion_superior",
      habitacion: "Triple",
      elegido: "false",
    },
    {
      id: "habitacion_suit",
      habitacion: "Suit",
      elegido: "false",
    },
  ]);

  const [regimenes, setRegimenes] = useState([
    {
      id: "regimen_SA",
      regimen: "Solo alojamiento",
      elegido: "false",
    },
    {
      id: "alojamiento_AD",
      regimen: "Alojamiento y desayuno",
      elegido: "false",
    },
    {
      id: "regimen_MP",
      regimen: "Media pensión",
      elegido: "false",
    },

    {
      id: "regimen_PC",
      regimen: "Pensión completa",
      elegido: "false",
    },
    {
      id: "regimen_TI",
      regimen: "Todo incluido",
      elegido: "false",
    },
  ]);
  function handleRegimenChange(index) {
    const updatedRegimenes = [...regimenes];
    updatedRegimenes[index].elegido = !updatedRegimenes[index].elegido;
    console.log(updatedRegimenes[index])
    setRegimenes(updatedRegimenes);
  }
  function handleHabitacionChange(index) {
    const updatedRegimenes = [...habitaciones];
    updatedRegimenes[index].elegido = !updatedRegimenes[index].elegido;

    setHabitaciones(updatedRegimenes);
  }
  return (
    <div className="text-start">
      <div>
        <h2 className="text-white font-semibold text-md">
          Tipo habitación {/* doble, doble superior, triple, suit.... */}
        </h2>

        <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
          Identification
        </h3>
        <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          {habitaciones.map((habitacion, index) => (
            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div class="flex items-center ps-3">
                <input
                  onChange={() => handleHabitacionChange(index)}
                  id={habitacion.id}
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  for={habitacion.id}
                  class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {habitacion.habitacion}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-5">
        <h2 className="text-white font-semibold text-md">
          Regimen {/* alojamiento solo, alojamiento y desayuno, cena etc... */}
        </h2>
        <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          {regimenes.map((regimen, index) => (
            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div class="flex items-center ps-3">
                <input
                  onChange={() => handleRegimenChange(index)}
                  id={regimen.id}
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  for={regimen.id}
                  class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {regimen.regimen}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        {regimenes.map((regimen)=>(
          <div>
            {regimen.elegido}

          </div>
        ))}
      </div>
      <div className="flex justify-end dark:text-white mt-5">
        <button
          type="button"
          onClick={() => next(buscar(actual))}
          className="p-4 font-semibold text-white bg-orange-400 rounded hover:bg-orange-500 dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:text-white"
        >
          Empezar
        </button>
      </div>
      )
    </div>
  );
}

export default Incluido;
