import Image from "next/image"
import { formatearDinero } from "../helpers/functions"

const Producto = ({product}) => {
    const { nombre, precio, imagen } = product;
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
        </div>
    </div>
  )
}

export default Producto