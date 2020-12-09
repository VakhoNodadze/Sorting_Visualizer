import React, { useState, useCallback } from 'react';

import Toast from '../components/primitives/Toast';

import { generateId } from '../utils/helpers';

const useToasts = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = (variant, message) => {
    setToasts([...toasts, { variant, message, id: generateId() }]);
  };

  const handleHide = (id) => {
    setToasts([...toasts.filter((t) => t.id !== id)]);
  };

  const renderToasts = useCallback(() => (
    <>
      {toasts.map((item, index) => (
        <Toast 
          key={item.id} 
          position="top right" 
          currentIndex={index} 
          visible={toasts.
            filter((t) => t.id === item.id).
            length > 0} variant={item.variant} 
          onHide={() => handleHide(item.id)} 
          content={item.message} />
      ))}
    </>
  ));

  return [addToast, renderToasts];
};

export default useToasts;
