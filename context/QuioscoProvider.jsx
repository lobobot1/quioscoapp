"use client";
import { useState, useEffect, createContext } from "react";
import { getCategories } from "../fetch/categoria";
import Modal from "react-modal";
import ModalProducto from "../components/ModalProducto";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

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
  const [nombre, setNombre] = useState('');
  const [total, setTotal] = useState(0);


  const router = useRouter();

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
    router.push(`/`);
  };

  const handleSetProducto = (product) => {
    setProducto(product);
  };

  const handleChangeModal = () => {
    setModal(!modal);
  };

  const handleAgregarPedido = ({categoriaId,...producto}) => {
    if(pedido.some(productoState => productoState.id === producto.id)){
      const pedidoActualizado = pedido.map(productoState => 
        productoState.id === producto.id ? producto : productoState
      );
      setPedido(pedidoActualizado);
      toast.success('Producto actualizado en el pedido');
    }else{
      setPedido([...pedido, producto]);
      toast.success('Producto agregado al pedido');
    }
    handleChangeModal();
  }

  const handleEditarCantidades = id => {
    const productoActualizar = pedido.filter(producto=>producto.id === id);
    setProducto(productoActualizar[0]);
    handleChangeModal();
  }

  const handleEliminarProducto = id => {
    const pedidoActualizado = pedido.filter(producto=>producto.id !== id);
    setPedido(pedidoActualizado);
    toast.success('Producto eliminado del pedido');
  }

  const colocarOrden = async (e) => {
    e.preventDefault();
    console.log("colocar orden");
  };

  useEffect(() => {
    const total = pedido.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
    setTotal(total);
  }, [pedido]);

  return (
    <QuioscoContext.Provider
      value={{
        categories,
        currentCategory,
        handleClickCategory,
        handleSetProducto,
        modal,
        handleChangeModal,
        pedido,
        handleEditarCantidades,
        handleEliminarProducto,
        nombre,
        setNombre,
        colocarOrden,
        total
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
