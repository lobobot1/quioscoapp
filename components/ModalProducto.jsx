import Image from "next/image";
import { formatearDinero } from "../helpers/functions";
import { useState, useEffect } from "react";

const ModalProducto = ({ producto, handleChangeModal, handleAgregarPedido, pedido }) => {
  const { nombre, precio, imagen } = producto;
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    if(pedido.some(productoState => productoState.id === producto.id)){
      const productoPedido = pedido.find(productoState => productoState.id === producto.id);
      setCantidad(productoPedido.cantidad);
    }
  }, [producto,pedido]);

  const handleClick = (e) => {
    setCantidad(e + cantidad);
  };

  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3">
        <Image
          width={300}
          height={400}
          src={`/assets/img/${imagen}.jpg`}
          alt={nombre}
        />
      </div>
      <div className="md:w-2/3">
        <div className="flex justify-end">
          <button onClick={() => handleChangeModal()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <h1 className="text-3xl font-bold mt-5">{nombre}</h1>
        <p className="mt-5 font-black text-5xl text-amber-500">
          {formatearDinero(precio)}
        </p>
        <div className="flex justify-evenly gap-3 my-5">
          <button
            onClick={() => {if(cantidad>1)handleClick(-1)}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>

          <p className="text-3xl">{cantidad}</p>
          <button
            onClick={() => {if(cantidad<=10)handleClick(1)}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md mt-5 uppercase w-full"
          onClick={() => handleAgregarPedido({...producto,cantidad})}
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default ModalProducto;
