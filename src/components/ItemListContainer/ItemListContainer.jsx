import { useState, useEffect } from "react";
import { pedirData } from "../../helpers/pedirData.js";
import itemList from "./itemList.jsx";
function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    pedirData()
      .then((res) => {
        setProductos(res); 
      })
      .catch((error) => {
        console.error("Error al cargar los datos:", error);
      });
  }, []);

  return (
    <div>
      <itemLIst productos={productos} />
    </div>
  );
}

export default ItemListContainer;
