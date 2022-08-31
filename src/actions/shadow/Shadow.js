import React, { useState } from "react";
import {
  Container,
  Wrapper,
  SelectAttributeContainer,
  Color,
  Range,
  Label,
} from "./ShadowElements";
import { Hint, Menu, MenuElement } from "../ActionsElements";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Shadow = ({
  shadowColor,
  setShadowColor,
  shadowBlur,
  setShadowBlur,
  shadowOffsetX,
  setShadowOffsetX,
  shadowOffsetY,
  setShadowOffsetY,
}) => {
  const colors = [
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
  const [openMenu, setOpenMenu] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const openHint = (value) => {
    setShowHint(value);
    setTimeout(() => {
      setShowHint(false);
    }, 500);
  };
  const changeShadowColor = (color) => {
    if (color !== shadowColor) {
      setShadowColor(color);
    }
    setOpenMenu(false);
    console.log(shadowColor);
  };
  const toggleMenu = (e, value) => {
    e.stopPropagation();
    setOpenMenu(value);
  };
  return (
    <Container onClick={(e) => toggleMenu(e, false)}>
      <Wrapper>
        <SelectAttributeContainer onMouseEnter={() => openHint(true)}>
          <MenuElement onClick={(e) => toggleMenu(e, true)}>
            {showHint && <Hint>shadow color</Hint>}
            <Color color={shadowColor}></Color>
            <ArrowDropDownIcon />
          </MenuElement>
          {openMenu && (
            <Menu>
              {colors.map((color) => (
                <MenuElement>
                  <Color
                    onClick={() => changeShadowColor(color.color)}
                    color={color.color}
                    border={
                      color.color === "white" ? "1px solid #d3d3d3" : "none"
                    }
                  ></Color>
                </MenuElement>
              ))}
            </Menu>
          )}
        </SelectAttributeContainer>
        <SelectAttributeContainer>
          <Label>shadow blur</Label>
          <Range
            type="range"
            defaultValue={shadowBlur}
            onChange={(e) => setShadowBlur(e.target.value)}
            opacity={shadowBlur / 100}
          ></Range>
          <Label>{shadowBlur}</Label>
        </SelectAttributeContainer>
        <SelectAttributeContainer>
          <Label>shadow offset x</Label>
          <Range
            defaultValue={shadowOffsetX}
            type="range"
            onChange={(e) => setShadowOffsetX(e.target.value)}
            opacity={shadowOffsetX / 100}
          ></Range>
          <Label>{shadowOffsetX}</Label>
        </SelectAttributeContainer>
        <SelectAttributeContainer>
          <Label>shadow offset y</Label>
          <Range
            defaultValue={shadowOffsetY}
            type="range"
            onChange={(e) => setShadowOffsetY(e.target.value)}
            opacity={shadowOffsetY / 100}
          ></Range>
          <Label>{shadowOffsetY}</Label>
        </SelectAttributeContainer>
      </Wrapper>
    </Container>
  );
};

export default Shadow;
