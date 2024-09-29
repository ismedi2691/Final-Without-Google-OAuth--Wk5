import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import StreamList from './components/StreamList';
import Movies from './components/Movies';
import Cart from './components/Cart';
import About from './components/About';
import Subscriptions from './components/Subscriptions';
import CreditCard from './components/CreditCard'; // Import your Credit Card component
import './App.css';


function App() {
    const [cartItems, setCartItems] = useState([]);
    

        

    // addToCart function
    const addToCart = (subscription) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === subscription.id);
            if (!existingItem) {
                return [...prevItems, subscription];
            } else {
                
                return prevItems;
            }
        });
    };

    // removeItem function
    const removeItem = (itemId) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== itemId));
    };

    return (
        <Router>
            <div className="App">
                <Navbar cartItems={cartItems} />
                
                    <Routes>
                        <Route path="/" element={<StreamList />} />
                        <Route path="/movies" element={<Movies />} />
                        <Route path="/cart" element={<Cart cartItems={cartItems} removeItem={removeItem} />} />
                        <Route path="/subscriptions" element={<Subscriptions addToCart={addToCart} cartItems={cartItems} removeItem={removeItem} />} />                        
                    <Route path="/credit-card" element={<CreditCard />} /> {/* Credit Card route */}
                    <Route path="/about" element={<About />} />
                    </Routes>
               
            </div>

        </Router>
    );
}

export default App;