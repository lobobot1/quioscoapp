"use client";
import { useState, useEffect, createContext } from "react";
import { getCategories } from "@/fetch/categoria";

const QuioscoContext = createContext();

function QuioscoProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});

  const getCategory = async () => {
    const res = await getCategories();
    const { data } = await res.json();
    setCategories(data);
  };

  useEffect(() => {
    getCategory();
  }, []);

  useEffect(() => {
    setCurrentCategory(categories[0]);
  }, [categories]);

  const handleClickCategory = id => {
    const category = categories.find(category => category.id === id);
    setCurrentCategory(category);
    };

  return (
    <QuioscoContext.Provider
      value={{
        categories,
        currentCategory,
        handleClickCategory,
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
}

export { QuioscoProvider };

export default QuioscoContext;
