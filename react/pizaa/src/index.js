import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


function App() {
  return (
    <div>
      <Header></Header>
      <Menu></Menu>
      <Footer></Footer>
    </div>
   
  );
}

function Header() {
  //const style={{color:"red", fontSize:"48px", textTransform:"uppercase"}
  return (<header className='header'>
            <h1>Pizzeria Torre del Mar</h1>
          </header>);
}

function Menu() {
  return (<main className='menu'>
    <h2>Nuestro menu</h2>
    <p>Proident pariatur irure amet mollit nisi proident cupidatat. 
      Aliquip ut quis dolor anim sit cillum duis. Duis enim ullamco aliquip sit sit cupidatat aliqua aliquip deserunt veniam. 
      Proident officia esse occaecat eu.</p>
    {pizzaData.length > 0 ?
      <ul className='pizzas'>
        {pizzaData.map((itemPizza) => <Pizza imagen={itemPizza.photoName}
        nombre={itemPizza.name} ingredientes={itemPizza.ingredients} precio={itemPizza.price}
        key={itemPizza.name}
        />)}
      </ul> : <p>No hay pizzas</p>
    }
    </main>);
}

function Pizza(props) {
  return(<li className='pizza'>
    <img src={props.imagen} alt={props.nombre}></img>
    <h2>{props.nombre}</h2>
    <p>{props.ingredientes}</p>
    <p>{props.precio}</p>
  </li>)
}

function Footer() {
  const currentHour = new Date().getHours();
  const openHour = 8;
  const closeHour = 15;
  const isOpen = currentHour >= openHour && currentHour <= closeHour;
  return <footer className='footer'>
    {isOpen ? 
            <div className='order'>
              <p>Estamos abiertos desde la hora {openHour}:00 hasta la hora {closeHour}:00</p>
              <button>Order</button>
            </div> : <p>Estamos cerrados</p> }
          </footer>;

  }



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


