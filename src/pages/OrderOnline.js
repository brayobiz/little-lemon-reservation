import React, { useState, useEffect, useRef } from 'react';
import styles from './OrderOnline.module.css';

function OrderOnline() {
  const [basket, setBasket] = useState([]);
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const basketRef = useRef(null);
  const menuSectionRef = useRef(null);

  const menuItems = [
    { id: 1, name: 'Greek Salad', price: 12.99, image: '/assets/images/capture.jpeg' },
    { id: 2, name: 'Bruschetta', price: 5.99, image: '/assets/images/capture1.jpeg' },
    { id: 3, name: 'Lemon Dessert', price: 5.00, image: '/assets/images/capture2.jpeg' },
    { id: 4, name: 'Shawarma Wrap', price: 8.99, image: '/assets/images/capture3.jpeg' },
  ];

  const addToBasket = (item) => {
    const existingItem = basket.find((basketItem) => basketItem.id === item.id);
    if (existingItem) {
      setBasket(
        basket.map((basketItem) =>
          basketItem.id === item.id
            ? { ...basketItem, quantity: basketItem.quantity + 1 }
            : basketItem
        )
      );
    } else {
      setBasket([...basket, { ...item, quantity: 1 }]);
    }
  };

  const removeFromBasket = (itemId) => {
    setBasket(basket.filter((item) => item.id !== itemId));
  };

  const totalPrice = basket
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  const toggleBasket = () => {
    console.log('Toggling basket. Current state:', isBasketOpen);
    setIsBasketOpen(!isBasketOpen);
  };

  const handleMouseDown = (e) => {
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const parent = basketRef.current.parentElement.getBoundingClientRect();
    const newX = e.clientX - parent.left - basketRef.current.offsetWidth / 2;
    const newY = e.clientY - parent.top - basketRef.current.offsetHeight / 2;

    const maxX = parent.width - basketRef.current.offsetWidth;
    const maxY = parent.height - basketRef.current.offsetHeight;
    const boundedX = Math.max(0, Math.min(newX, maxX));
    const boundedY = Math.max(0, Math.min(newY, maxY));

    setPosition({ x: boundedX, y: boundedY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const touch = e.touches[0];
    const parent = basketRef.current.parentElement.getBoundingClientRect();
    const newX = touch.clientX - parent.left - basketRef.current.offsetWidth / 2;
    const newY = touch.clientY - parent.top - basketRef.current.offsetHeight / 2;

    const maxX = parent.width - basketRef.current.offsetWidth;
    const maxY = parent.height - basketRef.current.offsetHeight;
    const boundedX = Math.max(0, Math.min(newX, maxX));
    const boundedY = Math.max(0, Math.min(newY, maxY));

    setPosition({ x: boundedX, y: boundedY });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);

  useEffect(() => {
    if (menuSectionRef.current && basketRef.current) {
      const mainRect = menuSectionRef.current.parentElement.getBoundingClientRect();
      const menuSectionRect = menuSectionRef.current.getBoundingClientRect();

      const yPosition = menuSectionRect.top - mainRect.top - basketRef.current.offsetHeight - 10;
      const xPosition = menuSectionRect.left - mainRect.left - basketRef.current.offsetWidth - 10;

      setPosition({ x: Math.max(0, xPosition), y: yPosition });
    }
  }, []);

  return (
    <main className={styles.main} data-aos="fade-up" style={{ position: 'relative' }}>
      <section className={styles.orderHeader}>
        <h1 data-aos="fade-down">Order Online</h1>
        <p data-aos="fade-up">
          Enjoy your favorite Mediterranean dishes from Delix, delivered straight to your door in Nairobi!
        </p>
      </section>

      <section ref={menuSectionRef} className={styles.menuSection}>
        <h2 data-aos="fade-down">Our Menu</h2>
        <div className={styles.menuGrid} data-aos="fade-up">
          {menuItems.map((item) => (
            <div key={item.id} className={styles.menuCard}>
              <img src={item.image} alt={item.name} className={styles.menuImage} />
              <h3>
                {item.name} <span className={styles.price}>${item.price.toFixed(2)}</span>
              </h3>
              <p>Delicious {item.name.toLowerCase()} made with fresh ingredients.</p>
              <button onClick={() => addToBasket(item)} className={styles.addButton}>
                Add to Basket
              </button>
            </div>
          ))}
        </div>
      </section>

      <div
        ref={basketRef}
        className={`${styles.basketIcon} ${styles.draggable}`}
        onClick={toggleBasket}
      >
        <div
          className={styles.dragHandle}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          style={{ left: `${position.x}px`, top: `${position.y}px`, transform: 'none' }}
        >
          <img src="/assets/images/basket.jpg" alt="Basket" />
          <span className={styles.basketCount}>{basket.length}</span>
        </div>
      </div>

      {isBasketOpen && (
        <div className={`${styles.basketOverlay} ${styles.active}`}>
          <div className={`${styles.basketSummary} ${styles.animateIn}`}>
            <h2>Your Basket</h2>
            {basket.length === 0 ? (
              <p>Your basket is empty.</p>
            ) : (
              <>
                <div className={styles.basketItems}>
                  {basket.map((item) => (
                    <div key={item.id} className={styles.basketItem}>
                      <span>
                        {item.name} x {item.quantity}
                      </span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                      <button
                        onClick={() => removeFromBasket(item.id)}
                        className={styles.removeButton}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
                <div className={styles.basketTotal}>
                  <strong>Total:</strong> ${totalPrice}
                </div>
                <h3>Payment Options</h3>
                <div className={styles.paymentOptions}>
                  <button className={styles.paymentButton}>M-Pesa</button>
                  <button className={styles.paymentButton}>Card Payment</button>
                </div>
              </>
            )}
            <button onClick={toggleBasket} className={styles.closeButton}>
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default OrderOnline;