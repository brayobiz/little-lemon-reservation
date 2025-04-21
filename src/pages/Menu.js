import React from 'react';
import Slider from 'react-slick';
import styles from '../components/SpecialCard.module.css';
import greekSaladImage from '../assets/images/96de1a8e84d5b60e17f4e8a752e3825e17a622bf.jpg';
import bruschettaImage from '../assets/images/957db75e6b654e07f65da12b96dc858c5995ed28.jpg';
import lemonDessertImage from '../assets/images/9beeddcd9d22dc711cd9fddc4a3393a7278299c7.jpg';

const menuItems = [
  {
    name: 'Greek Salad',
    description: 'Fresh lettuce, peppers, olives, feta cheese, and croutons',
    price: '$12.99',
    image: greekSaladImage,
  },
  {
    name: 'Bruschetta',
    description: 'Grilled bread with garlic, salt, and olive oil',
    price: '$5.99',
    image: bruschettaImage,
  },
  {
    name: 'Lemon Dessert',
    description: "Authentic lemon dessert from grandma's recipe",
    price: '$5.00',
    image: lemonDessertImage,
  },
];

function Menu() {
  
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop the slider
    speed: 500, // Transition speed (ms)
    slidesToShow: 2, // Show 2 slides at a time on desktop
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Auto-scroll
    autoplaySpeed: 3000, // 3 seconds per slide
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
  <main data-aos="fade-up">
    <div className={styles.specials}>
      <h1 data-aos="fade-down">Our Menu</h1>
      <div data-aos="zoom-in">
      <Slider {...settings}>
        {menuItems.map((item, index) => (
          <div key={index} className={styles.card}>
            <img
              src={item.image}
              alt={item.name}
              className={styles.image}
            />
            <div className={styles.content}>
              <h3>{item.name}</h3>
              <p>{item.description} - {item.price}</p>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  </main>
  );
}

export default Menu;