import React, { useRef } from "react";

// when we assign this function to a var , the var will contain what this function return
export const useOnDraw = (onDraw, color) => {
  const canvasRef = useRef(null);

  const isDrawingRef = useRef(null);

  const prevPointRef = useRef(null);

  // function to create a ref value to get the current canvas tag
  function setCanvasRef(ref) {
    if (!ref) return;

    canvasRef.current = ref;

    initMouseMoveListener();
    mouseDownEventListener();
    mouseUpEventListener();
  }

  // function to add mouseMove event on the whole window mouse move
  function initMouseMoveListener() {
    const mouseMoveListener = (e) => {
      if (isDrawingRef.current) {
        // console.log("x : " , e.clientX , "y : " , e.clientY )

        const point = computePointInCanvas(e.clientX, e.clientY);

        const ctx = canvasRef.current.getContext("2d");

        if (onDraw) onDraw(ctx, point, color, prevPointRef.current);

        prevPointRef.current = point;

        // console.log("point" , point)
      }
    };

      
        const touchMoveListener = (e) => {
          e.preventDefault(); // Prevent default touch behavior
          if (isDrawingRef.current) {
            const touch = e.touches[0];
            const point = computePointInCanvas(touch.clientX, touch.clientY);
            const ctx = canvasRef.current.getContext("2d");
            if (onDraw) onDraw(ctx, point, color, prevPointRef.current);
            prevPointRef.current = point;
          }
        };

    const mouseoutListener = () => {
      if (isDrawingRef.current) {
        isDrawingRef.current = false;
        prevPointRef.current = null;
      }
    };

    const mouseDownListener = () => {
      isDrawingRef.current = true;
    };
    const touchEndListener = () => {
        isDrawingRef.current = false;
        prevPointRef.current = null;
      };
    const touchStartListener = () => {
        isDrawingRef.current = true;
      };
    const mouseUpListener = () => {
      isDrawingRef.current = false;
      prevPointRef.current = null;
    };

    window.addEventListener("mousemove", mouseMoveListener);
    window.addEventListener("touchmove", touchMoveListener);

    window.addEventListener("mousedown", mouseDownListener);
    window.addEventListener("touchstart", touchStartListener);

    window.addEventListener("mouseup", mouseUpListener);
    window.addEventListener("touchend", touchEndListener);

    window.addEventListener("mouseout", mouseoutListener);
    // window.addEventListener("touchcancel", touchEndListener);

    // window.addEventListener("touchmove", mouseMoveListener)
    // window.addEventListener("touchstart", mouseDownListener)
    // window.addEventListener("touchend", mouseUpListener)
  }

  function mouseDownEventListener() {
    if (!canvasRef.current) return;

    const listener = () => {
      isDrawingRef.current = true;
    };

    canvasRef.current.addEventListener("mousedown", listener);
  }

  function mouseUpEventListener() {
    const listener = () => {
      isDrawingRef.current = false;
    };

    window.addEventListener("mouseup", listener);
  }

  function computePointInCanvas(clientX, clientY) {
    // to check that this block of code will only excecute if we have an active ref tag
    if (canvasRef.current) {
      // canvasBoard will contain a ref to the current canvas
      // get the canvas board full position object using getBoundingClientRect()
      const canvasBoard = canvasRef.current.getBoundingClientRect();

      // return a new position object , to calculate the position after subtract the canvas board limit (left , top) space
      return {
        x: clientX - canvasBoard.left,
        y: clientY - canvasBoard.top,
      };
    }
  }

  return setCanvasRef;
};
