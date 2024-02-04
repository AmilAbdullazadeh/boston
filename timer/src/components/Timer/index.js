import React, { useEffect, useState } from 'react';

export function Timer({ initialState, title, counter }) {
  const [count, setCount] = useState(initialState);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + Number(counter));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

    return (
      <div>
        <h3>
          {title} Timer: {count}{" "}
            </h3>
            {
                count >= 5 && <button>Yeniden gonder</button>
        }    
      </div>
    );
}
