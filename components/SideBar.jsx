'use client'
import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";
import Categoria from "./Categoria";

const SideBar = () => {
  const { categories } = useQuiosco();
  return (
    <>
      <Image width={120} height={85} src="/assets/img/logo.svg" alt="logo" />
      <nav className="mt-10">
        {categories.map((category) => (
          <Categoria key={category.id} category={category} />
        ))}
      </nav>
    </>
  );
};

export default SideBar;
