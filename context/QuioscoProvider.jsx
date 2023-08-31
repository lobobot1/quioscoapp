"use client";
import { useState, useEffect, createContext } from "react";
import { getCategories } from "../fetch/categoria";
import Modal from "react-modal";
import ModalProducto from "../components/ModalProducto";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('.__className_20951f');

const QuioscoContext = createContext();

function QuioscoProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});
  const [producto, setProducto] = useState({});
  const [modal, setModal] = useState(false);
  const [pedido, setPedido] = useState([]);

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

  const handleClickCategory = (id) => {
    const category = categories.find((category) => category.id === id);
    setCurrentCategory(category);
  };

  const handleSetProducto = (product) => {
    setProducto(product);
  };

  const handleChangeModal = () => {
    setModal(!modal);
  };

  const handleAgregarPedido = ({imagen,categoriaId,...producto}) => {
    if(pedido.some(productoState => productoState.id === producto.id)){
      const pedidoActualizado = pedido.map(productoState => 
        productoState.id === producto.id ? producto : productoState
      );
      setPedido(pedidoActualizado);
    }else{
      setPedido([...pedido, producto]);
    }
    handleChangeModal();
  }

  return (
    <QuioscoContext.Provider
      value={{
        categories,
        currentCategory,
        handleClickCategory,
        handleSetProducto,
        modal,
        handleChangeModal,
      }}
    >
      {children}
      {modal && (
        <Modal
          isOpen={modal}
          onRequestClose={handleChangeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <ModalProducto producto={producto} handleChangeModal={handleChangeModal} handleAgregarPedido={handleAgregarPedido} pedido={pedido}/>
        </Modal>
      )}
    </QuioscoContext.Provider>
  );
}

export { QuioscoProvider };

export default QuioscoContext;
