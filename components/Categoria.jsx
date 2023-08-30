import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";

const Categoria = ({ category }) => {
  const { nombre, icono, id } = category;
  const { handleClickCategory, currentCategory } = useQuiosco();
  return (
    <div className={`flex items-center gap-3 w-full border p-5 hover:bg-amber-400 ${currentCategory?.id === id ? 'bg-amber-400' : ''}`}>
      <Image
        width={70}
        height={70}
        src={`/assets/img/icono_${icono}.svg`}
        alt={nombre}
      />
      <button type="button" className="text-2xl font-bold hover:cursor-pointer"
        onClick={() => handleClickCategory(id)}
      >
        {nombre}
      </button>
    </div>
  );
};

export default Categoria;
