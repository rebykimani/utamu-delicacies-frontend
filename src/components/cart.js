import React, { useState } from 'react';
import { Table, Button } from 'react';

const Cart = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    const removeFromCart = (index) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        setCart(updatedCart);
    }

    const updateQuantity = (index, qty) => {
        const updatedCart = [...cart];
        updatedCart[index].quantity = qty;
        setCart(updatedCart);
    }

    const calculateTotal = () => {
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.quantity;
        });
        return total;
    }

    return (
        <div>
            <h1>Cart</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item, index) => (
                        <tr key={item.name}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>
                                <input
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) => updateQuantity(index, e.target.value)}
                                />
                            </td>
                            <td>
                                <Button variant="danger" onClick={() => removeFromCart(index)}>
                                    Remove
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <h3>Total: {calculateTotal()}</h3>
             <Button variant="primary" onClick={() => navigate("/checkout")}>
                Checkout
            </Button> 
        </div>
    );
};

export default Cart;
