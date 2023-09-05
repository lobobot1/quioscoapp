"use client";
import { useEffect, useCallback } from "react";
import { formatearDinero } from "../../helpers/functions";
import useQuiosco from "../../hooks/useQuiosco";

const Contenido = () => {
  const { pedido, nombre, setNombre, colocarOrden, total } = useQuiosco();

  const comprobarPedido = useCallback(() => {
    return pedido.length === 0 || nombre === "" || nombre.length < 2;
  },[pedido,nombre])

  useEffect(() => {
    comprobarPedido();
  }, [pedido,comprobarPedido])

  return (
    <div>
      <h1 className="text-4xl font-black">Total y Confirmar tu Pedido</h1>
      <p className="text-2xl my-10">Confirma tu pedido a continuacion</p>

      <form onSubmit={colocarOrden}>
        <div>
          <label
            className="block uppercase text-slate-800 font-bold text-xl"
            htmlFor="nombre"
          >
            Nombre
          </label>

          <input
            type="text"
            id="nombre"
            className="w-full bg-gray-200 mt-3 lg:w-1/3 p-2 rounded-md"
            placeholder="Tu Nombre"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </div>
        <div className="mt-10">
          <p>
            Total a pagar {""} <span className="font-bold">{formatearDinero(total)}</span>
          </p>
        </div>
        <div className="mt-5">
          <input
            type="submit"
            value={"confirmar Pedido"}
            className={`w-full text-center lg:w-auto px-5 py-2 rounded uppercase font-bold text-white ${comprobarPedido() ? 'bg-indigo-100' : 'bg-indigo-600 hover:bg-indigo-700 cursor-pointer'}   transition-colors duration-300 ease-in-out `}
            disabled={comprobarPedido()}
          />
        </div>
      </form>
    </div>
  );
};

export default Contenido;
