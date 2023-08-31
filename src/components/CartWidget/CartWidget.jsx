import React from 'react'; 

const CartWidget = () => { 

  return (<>
      {
      <a style={{ backgroundColor: '#60e4c7', border: 'none', marginLeft: 16, marginRight: 24 }}>
        <img src='/assets/cart.png' alt="cart" width={32} height={32} />
        <button style={{ backgroundColor: '#60e4c7', border: 'none'}}>{0}</button>        
      </a>
      }
  </>
  );
};

export default CartWidget;