'use client'
import { useState, useEffect } from "react"


type CartItem = {
  id: number;
  name: string;
  price: number;
}

export default function ShoppingCart() {

  // ❌ ERROR ORIGINAL: 'usestate' en minúsculas.
  // const [cart, setCart] = usestate([])
  // ✅ CORRECCIÓN TS: Le decimos que el arreglo va a contener objetos tipo 'CartItem'
  const [cart, setCart] = useState<CartItem[]>([])

  // ❌ ERROR ORIGINAL: El estado inicial estaba vacío. 
  // const [isOpen, setIsOpen] = useState( )
  const [isOpen, setIsOpen] = useState<boolean>(false)

  // ❌ ERROR ORIGINAL: .push() modifica directamente el estado. Usamos spread (...).
  // const addItem = (item) => {
  //   setCart(cart.push(item))
  // }
  // ✅ CORRECCIÓN TS: Declaramos que 'item' es un CartItem.
  const addItem = (item: CartItem) => {
    setCart([...cart, item])
  }

  // ❌ ERROR ORIGINAL: La función no recibía el 'id'.
  // const removeItem = () => {
  // ✅ CORRECCIÓN TS: Declaramos que el 'id' es un número.
  const removeItem = (id: number) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  const total = cart.reduce((acc, item) => {
    return acc + item.price
  }, 0)

  const clearCart = () => {
    // ❌ ERROR ORIGINAL: Faltaba pasar el arreglo vacío.
    // setCart( )
    setCart([])
  }

  useEffect(() => {
    // ❌ ERROR ORIGINAL: print() lanza la ventana para imprimir en papel.
    // print("assembled component")
    console.log("assembled component")
  }, [])

  useEffect(() => {
    console.log("Cart updated")
    // ❌ ERROR ORIGINAL: El arreglo de dependencias estaba vacío. Debe vigilar a 'cart'.
    // }, [])
  }, [cart])

  return (
    // ❌ ERROR ORIGINAL: Faltaba envolver todo en un fragmento padre (<>).
    <>
      {/* ❌ ERROR ORIGINAL: onClick estaba vacío. */}
      {/* <button onClick={ }> */}
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Cerrar" : "Abrir"} carrito
      </button>

      <p>
        {/* ❌ ERROR ORIGINAL: Faltaba '===' y uso incorrecto de comillas simples (' '). */}
        {/* {cart.length 0 ? "Carrito vacio" : '${cart.length} productos' } */}
        {cart.length === 0 ? "Carrito vacio" : `${cart.length} productos`}
      </p>

      {/* ❌ ERROR ORIGINAL: Faltaban llaves, palabra 'map', y 'item.id' en la key. */}
      {/* cart.((item) => {
        <p key={id}>
          {item.name} - ${item.price}
        </p>
      }) */}
      {cart.map((item) => (
        <p key={item.id}>
          {item.name}  ${item.price}
        </p>
      ))}

      <p>Total: ${total}</p>
      <button onClick={clearCart}>Limpiar carrito</button>

      <p>
        <button
          onClick={() => addItem({ id: 101, name: "Casco Vento", price: 1500 })}
        >
          Agregar Casco
        </button>
      </p>


      {/* Cierre del Fragmento */}
    </>
  )
}
