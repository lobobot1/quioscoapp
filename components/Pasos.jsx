
'use client'
import Link from "next/link";
import { usePathname } from "next/navigation"

const pasos = [
  {
    paso: 1,
    nombre: "Menu",
    url: "/",
  },
  {
    paso: 2,
    nombre: "Resumen",
    url: "/resumen",
  },
  {
    paso: 3,
    nombre: "Datos y Total",
    url: "/total",
  },
];

const Pasos = () => {
  const path = usePathname();
  const currentPaso = path === "/" ? 1 : path === "/resumen" ? 2 : 3;

  const calcularProgreso = () => {
    switch (currentPaso) {
      case 2:
        return 50;
      case 3:
        return 100;
      default:
        return 5;
    }
  };

  return (
    <>
      <div className="flex justify-between mb-5">
        {pasos.map((paso) => (
          <Link
            href={paso.url}
            className={`text-2xl font-bold cursor-pointer ${
              paso.paso === currentPaso ? " text-amber-600" : "text-gray-500"
            }`}
            key={paso.paso}
          >
            {paso.nombre}
          </Link>
        ))}
      </div>
      <div className="bg-gray-100 mb-10">
        <div
          className={`rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white`}
          style={{ width: `${calcularProgreso()}%` }}
        ></div>
      </div>
    </>
  );
};

export default Pasos;
