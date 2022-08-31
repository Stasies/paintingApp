import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  z-index: 100;
  background-color: #cac4ce;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Wrapper = styled.div`
  width: 962px;
  box-sizing: border-box;
  padding: 0 32px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  .icon {
    cursor: pointer;
  }
  .current {
    color: rgb(114, 90, 193);
  }
`;
export const ColorPicker = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  flex-wrap: wrap;
  min-width: 145px;
`;
export const Color = styled.div`
  background-color: ${(props) => props.color};
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  cursor: pointer;
  &.selected {
    border: 3px solid rgb(114, 90, 193);
    box-sizing: border-box;
  }
`;
export const SelectAttributeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 6px;

  .main-size {
    justify-content: space-between;
  }
`;
export const Size = styled.div`
  height: ${(props) => props.size};
  width: 100%;
  background-color: black;
`;
export const Opacity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SelectOpacity = styled.input`
  :focus::-webkit-slider-runnable-track {
    background: ${(props) => `rgba(114,90,193,${props.opacity})`};
  }
  ::-webkit-slider-runnable-track {
    background: ${(props) => `rgba(114,90,193,${props.opacity})`};
  }
`;
export const StrokeType = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const MenuElement = styled.div`
  width: 80px;
  height: 28px;
  padding: 12px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 3px;
  cursor: pointer;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  background-color: white;
  border-radius: 3px;
  padding: 8px 0;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  z-index: 2000;
`;
export const Stroke = styled.div`
  width: 20px;
  height: 20px;
  background-color: black;
  border-radius: ${(props) => props.radius};
`;

export const Text = styled.p`
  padding: 0;
  margin: 0;
  cursor: pointer;
`;
export const Label = styled.label`
  font-size: 12px;
`;
export const Hint = styled.div`
  position: absolute;
  padding: 4px 10px;
  background-color: grey;
  font-size: 10px;
  color: white;
  border-radius: 3px;
  right: -10%;
  bottom: -50%;
`;
