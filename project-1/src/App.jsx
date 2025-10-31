import "./App.css";
import { useState } from "react";
import EcommerceCard from "./components/EcommerceCard";
import Navbar from "./components/Navbar";

function App() {
  const products = [
    {
      id: 1,
      title: "Nike Air Max",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1603036050855-0d77c10e1eb2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      description: "Classic running shoes with air cushioning",
    },
    {
      id: 2,
      title: "Adidas Ultraboost",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1645760330764-7f0ad753e3ea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=627",
      description: "High-performance sneakers with responsive cushioning",
    },
    {
      id: 3,
      title: "Puma RS-X",
      price: 119.99,
      image: "https://images.unsplash.com/photo-1612188852779-079df9e6dcc7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      description: "Retro-inspired design with modern comfort",
    },
    {
      id: 4,
      title: "New Balance 574",
      price: 99.99,
      image: "https://images.unsplash.com/photo-1629443509543-ee45a423f77a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764",
      description: "Timeless silhouette with durable materials",
    },
    {
      id: 5,
      title: "Reebok Classic Leather",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1653868250398-8efc756b601d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      description: "Iconic streetwear shoes with soft leather upper",
    },
    {
      id: 6,
      title: "Converse Chuck Taylor",
      price: 69.99,
      image: "https://images.unsplash.com/photo-1601131831144-5d096d7a832c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764",
      description: "Legendary canvas sneakers with rubber sole",
    },
    {
      id: 7,
      title: "Vans Old Skool",
      price: 74.99,
      image: "https://images.unsplash.com/photo-1620237468009-9bbd18f2de23?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      description: "Skate-style shoes with signature side stripe",
    },
    {
      id: 8,
      title: "ASICS Gel-Kayano",
      price: 159.99,
      image: "https://images.unsplash.com/photo-1560072810-1cffb09faf0f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      description: "Stability running shoes with gel technology",
    },
    {
      id: 9,
      title: "Under Armour HOVR Phantom",
      price: 139.99,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      description: "Lightweight trainers with energy return cushioning",
    },
    {
      id: 10,
      title: "Saucony Jazz Original",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=941",
      description: "Vintage running shoes with suede and nylon upper",
    },
  ];

  const [Theme, setTheme] = useState('light');

  return (
    <>
      <div className="flex flex-wrap gap-4">
        {products.map((product) => (
          <EcommerceCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            description={product.description}
          />
        ))}
        <h2>The theme is {Theme}</h2>
        <Navbar theme={Theme} setTheme={setTheme}/>
      </div>
    </>
  );
}

export default App;
