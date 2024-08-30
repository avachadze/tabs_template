import React from "react";

function FormularioPrecios({ handleSubmit, onSubmit, register }) {
  const fechas = [
    {
      fecha: "fecha_inicio",
    },
    {
      fecha: "fecha_fin",
    },
  ];
  const diasSemana = [
    {
      id: "lunes",
      texto: "lun",
    },
    {
      id: "martes",
      texto: "mar",
    },
    {
      id: "miercoles",
      texto: "mié",
    },
    {
      id: "jueves",
      texto: "jue",
    },
    {
      id: "viernes",
      texto: "vie",
    },
    {
      id: "sabado",
      texto: "sab",
    },
    {
      id: "domingo",
      texto: "dom",
    },
  ];
  const inputsPrecio = [
    {
      texto: "Precio individual",
      name: "precio_individual",
      className:
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
      placeholder: "Precio habitación individual",
    },
    {
      texto: "Precio doble",
      name: "precio_doble",
      className:
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
      placeholder: "Precio habitación doble",
    },
    {
      texto: "Precio triple",
      name: "precio_triple",
      className:
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
      placeholder: "Precio habitación triple",
    },
  ];
  return (
    <form
      key={1}
      onSubmit={handleSubmit((data) => onSubmit(data))}
      className="mb-10"
    >
      <div
        id="date-range-picker"
        className="grid grid-cols-2  md:grid-cols-1 lg:grid-cols-6  flex-row items-center "
      >
        {fechas.map((fecha) => (
          <>
            <div className="relative  ">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <input
                {...register(fecha.fecha)}
                type="date"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            {fecha.fecha === "fecha_inicio" && (
              <span className="mx-4 text-gray-500 flex justify-center">a</span>
            )}
          </>
        ))}
      </div>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 mt-3">
        {inputsPrecio.map((input) => (
          <div>
            <label
              htmlFor={input.name}
              className="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Precio individual
            </label>
            <input
              {...register(input.name)}
              type="number"
              id={input.name}
              className={input.className}
              placeholder={input.placeholder}
            />
          </div>
        ))}
      </div>
      <ul class="mt-5 items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {diasSemana.map((dia) => (
          <li class="w-full border-b  border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div class="flex items-center ps-3">
              <input
                {...register(dia.id)}
                id={dia.id}
                type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for={dia.id}
                class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {dia.texto}
              </label>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-start w-full gap-3 mt-3">
        <button
          type="submit"
          className="p-4 font-semibold text-white bg-slate-700 my-3 rounded  dark:bg-pink-600 dark:hover:bg-pink-700 dark:text-white"
        >
          Actualizar
        </button>
      </div>
    </form>
  );
}

export default FormularioPrecios;
