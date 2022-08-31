import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Container, Wrapper } from "./CanvasElements";
import Actions from "../actions/Actions";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import Shadow from "../actions/shadow/Shadow";

const Canvas = () => {
  const canvas = useRef();
  const [color, setColor] = useState("black");
  const [size, setSize] = useState(5);
  const [opacity, setOpacity] = useState(100);
  const [shadowBlur, setShadowBlur] = useState(0);
  const [shadowColor, setShadowColor] = useState("black");
  const [strokeType, setStrokeType] = useState("round");
  const [shadowOffsetX, setShadowOffsetX] = useState(0);
  const [shadowOffsetY, setShadowOffsetY] = useState(0);
  const [drawing, setDrawing] = useState(false);
  const [fillWithColor, setFillWithColor] = useState(false);
  const [addShadow, setAddShadow] = useState(false);
  const [openShadowMenu, setOpenShadowMenu] = useState(false);
  const [ctx, setCtx] = useState();
  const icon = useRef();

  useEffect(() => {
    canvas.current.height = window.innerHeight;
    canvas.current.width = window.innerWidth;
    setCtx(canvas.current.getContext("2d"));
    window.addEventListener("resize", handleResize);
  }, []);
  const handleResize = () => {
    canvas.current.height = window.innerHeight;
    canvas.current.width = window.innerWidth;
  };

  const startPosition = (e) => {
    setDrawing(true);
    if (!fillWithColor) {
      draw(e);
    } else {
      fillAllCanvas(e);
    }
  };
  const finishedPosition = (e) => {
    setDrawing(false);
    ctx.beginPath();
  };
  const draw = (e) => {
    if (!drawing) {
      return;
    } else {
      ctx.shadowColor = shadowColor;
      ctx.shadowBlur = shadowBlur;
      ctx.lineWidth = size;
      ctx.shadowOffsetX = shadowOffsetX;
      ctx.shadowOffsetY = shadowOffsetY;
      ctx.lineCap = strokeType;
      ctx.lineTo(e.clientX, e.clientY);
      ctx.strokeStyle = color;
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.clientX, e.clientY);
      ctx.globalAlpha = opacity / 100;
    }
  };
  const fillAllCanvas = (e) => {
    console.log(fillWithColor);
    ctx.fillStyle = color;
    ctx.globalAlpha = opacity / 100;
    ctx.fillRect(0, 0, canvas.current.width, canvas.current.height);
  };
  useEffect(() => {
    setOpenShadowMenu(addShadow);
  }, [addShadow]);
  return (
    <Container>
      <Actions
        currentColor={color}
        setColor={setColor}
        size={size}
        setSize={setSize}
        strokeType={strokeType}
        setStrokeType={setStrokeType}
        opacity={opacity}
        setOpacity={setOpacity}
        fillWithColor={fillWithColor}
        setFillWithColor={setFillWithColor}
        setAddShadow={setAddShadow}
        addShadow={addShadow}
      />
      {openShadowMenu && (
        <Shadow
          shadowColor={shadowColor}
          setShadowColor={setShadowColor}
          shadowBlur={shadowBlur}
          setShadowBlur={setShadowBlur}
          shadowOffsetX={shadowOffsetX}
          setShadowOffsetX={setShadowOffsetX}
          shadowOffsetY={shadowOffsetY}
          setShadowOffsetY={setShadowOffsetY}
        />
      )}
      <Wrapper
        onMouseDown={(e) => startPosition(e)}
        onMouseUp={(e) => finishedPosition(e)}
        onMouseMove={(e) => draw(e)}
        ref={canvas}
      />
    </Container>
  );
};

export default Canvas;
