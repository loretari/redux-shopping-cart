import React from "react";
import Product from "./Product";
const DUMMY_PRODUCTS = [
    {
        id: 1,
        name: "Jacquard-knit mini dress",
        imgURL:
            "https://www.net-a-porter.com/variants/images/1647597321589419/in/w920_q60.jpg",
        price: 2190,
    },
    {
        id: 2,
        name: "Off-the-shoulder bow-detailed taffeta-trimmed flocked tulle mini dress",
        imgURL:
            "https://www.net-a-porter.com/variants/images/1647597310901508/in/w920_q60.jpg",
        price: 1795,
    },
    {
        id: 3,
        name: "Off-the-shoulder wool and silk-blend crepe midi dress",
        imgURL:
            "https://www.net-a-porter.com/variants/images/1647597310877086/in/w920_q60.jpg",
        price: 4750,
    },
    {
        id: 4,
        name: "Embellished silk-chiffon gown",
        imgURL:
            "https://www.net-a-porter.com/variants/images/1647597310906677/in/w920_q60.jpg",
        price: 8500,
    },
    {
        id: 5,
        name: "Ruffled printed silk-satin mini dress",
        imgURL:
            "https://www.net-a-porter.com/variants/images/1647597316378987/in/w920_q60.jpg",
        price: 1590,
    },
];
const Products = () => {
    return (
        <div>
            <ul className="products-container">
                {DUMMY_PRODUCTS.map((product, index) => (
                    <li key={index}>
                        <Product
                            id={product.id}
                            name={product.name}
                            imgURL={product.imgURL}
                            price={product.price}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;
