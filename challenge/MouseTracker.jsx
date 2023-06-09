
import  { useState, useEffect } from 'react';
const MouseTracker = () => {
    const [cursorPosition, setCursorPosition] = useState([0,0])

    useEffect(() => {
        const onMove = ({clientX,clientY}) => {
            setCursorPosition([clientX,clientY]);
        }
        window.addEventListener('mousemove', onMove);
            return () => {
          window.removeEventListener('mousemove', onMove);
        }
      }, []); 

      const [x, y] = cursorPosition;
      return (
        <output>
          {x},{y}
        </output>
      );}

export default MouseTracker
