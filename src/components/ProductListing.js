// components/ProductListing.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductListing = () => {
  const dispatch = useDispatch();

  const products = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "https://img.freepik.com/premium-photo/delicious-pancakes-with-fresh-berries-honey_79782-2527.jpg?size=626&ext=jpg&ga=GA1.1.1491322341.1697913675&semt=ais",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
      },
      {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "https://img.freepik.com/free-photo/tortilla-wrap-with-falafel-fresh-salad-vegan-tacos-vegetarian-healthy-food_2829-6193.jpg?size=626&ext=jpg&ga=GA1.1.1491322341.1697913675&semt=sph  ",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
      },
      {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "https://img.freepik.com/free-photo/milkshake-with-whipped-cream-oreo-cookie-top_140725-3457.jpg?size=626&ext=jpg&ga=GA1.1.1491322341.1697913675&semt=ais",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
      },
      {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "https://img.freepik.com/premium-photo/traditional-turkish-breakfast-table-bright-background_392895-385573.jpg?size=626&ext=jpg&ga=GA1.1.1491322341.1697913675&semt=ais",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
      },
      {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "https://img.freepik.com/free-photo/squid-fried-with-curry-paste-white-plate-with-vegetables-side-dishes-white-wooden-floor_1150-28469.jpg?size=626&ext=jpg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
      },
      {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "https://img.freepik.com/premium-photo/delectable-chocolate-cocktail-infused-with-cookies-cream-resembling-mudslide-this-delightf_908985-14608.jpg?size=626&ext=jpg&ga=GA1.1.1491322341.1697913675&semt=ais",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
      },
      {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "https://img.freepik.com/free-photo/front-view-fresh-sliced-ham-with-bread-slices-buns-dark-meat-color-snack-meal-food-pig_140725-92968.jpg?size=626&ext=jpg&ga=GA1.1.1491322341.1697913675&semt=ais",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
      },
      {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "https://img.freepik.com/free-photo/delicious-fast-food-composition_23-2147695691.jpg?size=626&ext=jpg&ga=GA1.1.1491322341.1697913675&semt=ais",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
      },
      {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "https://img.freepik.com/free-photo/assortment-milkshake-glasses-tray-with-chocolate-fruits_23-2148707764.jpg?size=626&ext=jpg&ga=GA1.1.1491322341.1697913675&semt=ais",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      },
      {
        id: 10,
        title: "bison steak",
        category: "dinner",
        price: 22.99,
        img: "https://img.freepik.com/free-photo/grilled-beef-fillet-medallion-with-sauce-vegetables-white-plate_140725-9210.jpg?size=626&ext=jpg&ga=GA1.1.1491322341.1697913675&semt=ais",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      },
  ];

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="bg-white shadow rounded p-4">
            <img src={product.img} alt={product.title} className="w-full h-48 object-cover mb-4" />
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <span className="text-gray-600">${product.price}</span>
            </div>
            <p className="text-sm text-gray-500 mb-2">{product.desc}</p>
            <button onClick={() => handleAddToCart(product)} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
