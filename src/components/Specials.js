import React from 'react';
import styles from './Specials.module.css';
import SpecialCard from './SpecialCard';

const specialsData = [
  {
    name: 'Greek Salad',
    price: '$12.99',
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    image: '/assets/images/5a56cb0a6cea7dd9e4260ae87b268bd3eee8527d.jpg',
  },
  {
    name: 'Bruschetta',
    price: '$5.99',
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    image: '/assets/images/5b33e9cd6067eb9aa7ce588a24f8a5d73bf37ee0.jpg',
  },
  {
    name: 'Lemon Dessert',
    price: '$5.00',
    description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: '/assets/images/9beeddcd9d22dc711cd9fddc4a3393a7278299c7.jpg',
  },
];

function Specials() {
  return (
    <div className={styles.specials}>
      {specialsData.map((special, index) => (
        <SpecialCard
          key={index}
          special={special}
          data-aos="fade-up"
          data-aos-delay={index * 100}
        />
      ))}
    </div>
  );
}

export default Specials;