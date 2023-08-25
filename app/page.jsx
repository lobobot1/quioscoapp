import { getCategories } from "@/fetch/categoria";
//import { useEffect, useState } from "react";

const getData = await (await getCategories()).json(); 


export default async function Home() {
  let { data } = await getData;
 /*  console.log(categories) */
  return (
    <div>
      {data && JSON.stringify(data)}
    </div>
  );
}
