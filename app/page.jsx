'use client'
import useQuiosco from "@/hooks/useQuiosco";



export default function Home() {
  const { currentCategory } = useQuiosco();
  

  return (
    <>
      <h1 className="text-4xl font-black">{currentCategory?.nombre}</h1>
      <p className="text-2xl my-10">
        Elige y personaliza tu pedido a continuacion 
      </p>
    </>
  );
}
