"use client";
import useQuiosco from "../hooks/useQuiosco";
import Producto from "../components/Producto";

export default function Home() {
  const { currentCategory } = useQuiosco();
  return (
    <>
      <h1 className="text-4xl font-black">{currentCategory?.nombre}</h1>
      <p className="text-2xl my-10">
        Elige y personaliza tu pedido a continuacion
      </p>
      <div className="grid gap-4 grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {currentCategory?.productos?.map((producto) => (
          <Producto key={producto.id} product={producto} />
        ))}
      </div>
    </>
  );
}
