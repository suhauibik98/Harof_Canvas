import React, { useEffect, useState, useRef } from 'react';
import { useOnDraw } from '../hook/UseOnDraw';
// import "./canvas.css";

const Canvas = ({ width, height, color, resetCanvas , setResetCanvas }) => {

  const setCanvasRef = useOnDraw(onDraw, color);

  const canvasRef = useRef(null);

  const [DefaultColor, setDefaultColor] = useState();


  useEffect(() => {
    setDefaultColor(color);
  }, [color]);



  useEffect(() => {

    if (resetCanvas) {
      
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      setResetCanvas(prev => !prev)

    }

  }, [resetCanvas]);



  function onDraw(ctx, point, DefaultColor, prevPoint) {
    drawLine(prevPoint, point, ctx, DefaultColor, 2.5);
  }



  function drawLine(start, end, ctx, color, width) {

    start = start ? start : end;

    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();

  }



  return (
    <canvas
      id='canvas'
      width={1000}
      height={500}
      className='canvas'
      ref={(ref) => {
        setCanvasRef(ref);
        canvasRef.current = ref;
      }}
    />
  );
};

export default Canvas;


// This code introduces a useEffect that watches the resetCanvas prop
// . When resetCanvas changes (i.e., when it's updated from the parent component)
// , the effect clears the canvas by using clearRect on the canvas context.
//  This effectively resets the canvas when the resetCanvas prop changes.

// In summary, this line ensures that the canvas reference is set both 
// within the context of the useOnDraw hook (or similar) and 
// also available for direct access using the canvasRef.current property elsewhere in the component.



