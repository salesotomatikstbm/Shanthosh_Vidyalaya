import React, { useEffect, useState } from 'react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add scroll event listener on component mount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="wp-top" className={isVisible ? 'show' : ''}>
      <a
        href="https://wa.me/916383791772"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center align-items-center"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp Chat"
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;