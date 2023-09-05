"use client";
import useQuiosco from "../../hooks/useQuiosco";
import ResumenProducto from "../../components/ResumenProducto";

const Contenido = () => {
  const { pedido } = useQuiosco();
  return (
    <div>
      <h1 className="text-4xl font-black">Resumen</h1>
      <p className="text-2xl my-10">revisa tu pedido</p>
      {pedido.length === 0 ? (
        <p className="text-center text-2xl">No hay elementos en tu pedido</p>
      ) : (
        pedido.map((producto) => (
            <ResumenProducto key={producto.id} producto={producto} />
        ))
      )}
    </div>
  );
};

export default Contenido;
