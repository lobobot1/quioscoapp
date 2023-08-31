"use client"
import Image from "next/image"
import { formatearDinero } from "../helpers/functions"
import useQuiosco from "../hooks/useQuiosco";

const Producto = ({product}) => {
    const { nombre, precio, imagen } = product;

    const {handleSetProducto, handleChangeModal} = useQuiosco();

  return (
    <div className="border p-3">
        <Image
            src={`/assets/img/${imagen}.jpg`}
            alt={nombre}
            width={325}
            height={250}
        />
        <div className="p-5">
            <h3 className="text-2xl font-bold">
                {nombre}
            </h3>
            <p className="mt-5 font-black text-4xl text-amber-500">
                {formatearDinero(precio)}
            </p>
            <button
                type="button"
                className="bg-indigo-600 w-full text-white mt-5 p-3 uppercase font-bold hover:bg-indigo-800 transition-colors duration-300 ease-in-out"
                onClick={() => {
                    handleSetProducto(product)
                    handleChangeModal()
                }}
            >
                Agregar pedido
            </button>
        </div>
    </div>
  )
}

export default Producto