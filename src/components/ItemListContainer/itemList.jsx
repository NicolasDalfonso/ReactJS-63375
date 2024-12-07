import item from "./item";
const ItemList = (productos) => { 
  return (
    <div>
      <h2>Productos</h2>
      <div className="productos"> 
      {productos.map((prod) => <Item /> )}
      </div>
    </div>
  );
};