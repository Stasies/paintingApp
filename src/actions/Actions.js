import React, { useState } from "react";
import { useRef } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import BrushIcon from "@mui/icons-material/Brush";
import ClearIcon from "@mui/icons-material/Clear";
import RefreshIcon from "@mui/icons-material/Refresh";
import {
  Container,
  Wrapper,
  ColorPicker,
  Color,
  SelectAttributeContainer,
  Size,
  Stroke,
  SelectOpacity,
  Label,
  Menu,
  MenuElement,
  Text,
  Hint,
} from "./ActionsElements";
export const colors = [
  { color: "white", hex: "#fff" },
  { color: "red", hex: "#ff0000" },
  { color: "orange", hex: "#FFA500" },
  { color: "yellow", hex: "#FFFF00" },
  { color: "green", hex: "#008000" },
  { color: "lightblue", hex: "#ADD8E6" },
  { color: "blue", hex: "#0000ff" },
  { color: "purple", hex: "#800080" },
  { color: "pink", hex: "#FFC0CB" },
  { color: "grey", hex: "#808080" },
  { color: "black", hex: "#000" },
];
const Actions = ({
  setColor,
  size,
  setSize,
  opacity,
  setOpacity,
  fillWithColor,
  setFillWithColor,
  strokeType,
  setStrokeType,
  currentColor,
  setAddShadow,
  addShadow,
}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const width = [3, 5, 7, 10, 13, 20, 30, 50];
  const openHint = (e, value) => {
    setShowHint(value);
    e.stopPropagation();
    setTimeout(() => {
      setShowHint(false);
    }, 500);
  };

  const changeSize = (e, s) => {
    setSize(s);
    setOpenMenu(false);
  };
  const changeStroke = (type) => {
    setStrokeType(type);
    setOpenMenu(false);
  };
  const toggleMenu = (e, value) => {
    e.stopPropagation();
    setOpenMenu(value);
  };
  return (
    <Container onClick={(e) => toggleMenu(e, false)}>
      <Wrapper>
        <BrushIcon
          onClick={() => setFillWithColor(false)}
          className={!fillWithColor ? "current icon" : "icon"}
        />
        <FormatColorFillIcon
          onClick={() => setFillWithColor(true)}
          className={fillWithColor ? "current icon" : "icon"}
        />

        <ColorPicker>
          {colors.map((color) => (
            <Color
              className={color.hex === currentColor ? "selected" : "color"}
              color={color.hex}
              size="20px"
              onClick={() => setColor(color.hex)}
            ></Color>
          ))}
        </ColorPicker>
        <SelectAttributeContainer>
          {showHint === "size" && <Hint>width</Hint>}
          <MenuElement
            onClick={(e) => toggleMenu(e, "size")}
            className="main-size"
            onMouseEnter={(e) => openHint(e, "size")}
          >
            <Size size={`${size / 2 - 1}px`}></Size>
            <ArrowDropDownIcon className="icon" />
          </MenuElement>
          {openMenu === "size" && (
            <Menu>
              {width.map((w, i) => (
                <MenuElement key={i} onClick={(e) => changeSize(e, w)}>
                  <Size size={`${(i + 1) * 2}px`}></Size>
                </MenuElement>
              ))}
            </Menu>
          )}
        </SelectAttributeContainer>
        <SelectAttributeContainer>
          <Label>opacity</Label>
          <SelectOpacity
            type="range"
            // ref={opacity}
            defaultValue={opacity}
            opacity={opacity / 100}
            onChange={(e) => setOpacity(e.target.value)}
          ></SelectOpacity>
          <Label>{opacity}</Label>
        </SelectAttributeContainer>
        <SelectAttributeContainer>
          {showHint === "brush" && <Hint>brush type</Hint>}
          <MenuElement
            onClick={(e) => toggleMenu(e, "stroke")}
            onMouseEnter={(e) => openHint(e, "brush")}
          >
            <Stroke radius={strokeType === "square" ? "0" : "50%"}></Stroke>
            <ArrowDropDownIcon />
          </MenuElement>
          {openMenu === "stroke" && (
            <Menu>
              <MenuElement>
                <Stroke
                  radius="50%"
                  onClick={() => changeStroke("round")}
                ></Stroke>
              </MenuElement>
              <MenuElement>
                <Stroke
                  radius="0"
                  onClick={() => changeStroke("square")}
                ></Stroke>
              </MenuElement>
            </Menu>
          )}
        </SelectAttributeContainer>
        <SelectAttributeContainer
          style={{ flexDirection: "row" }}
          onClick={() => setAddShadow(!addShadow)}
        >
          <Text>shadow editor</Text>
          {addShadow ? (
            <ArrowDropUpIcon className="icon" />
          ) : (
            <ArrowDropDownIcon className="icon" />
          )}
        </SelectAttributeContainer>

        <RefreshIcon
          onClick={() => window.location.reload()}
          className="icon"
        />
      </Wrapper>
    </Container>
  );
};

export default Actions;
