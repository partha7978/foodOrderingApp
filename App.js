import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'

// !Component structure
//? Header
//*  - Logo
//*  - NavItems
//? Body
//*  - SearchBar
//*  - RestaurantContainer
//todo     - RestaurantCard
//? Footer
//*  - Copyright
//*  - Links
//*  - Address
//*  - Contact


const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">  
                <img className="logo" src="https://i.pinimg.com/originals/d2/82/c8/d282c8b0f4af7e8354081882ea4ae191.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}


const AppLayout = () => {
    return(
        <div className="app">
            <Header />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <AppLayout />
)
