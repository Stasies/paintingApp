import styled from "styled-components";

export const Container = styled.div`
  width: inherit;
  height: 60px;
  position: fixed;
  top: 70px;
  z-index: 2;
  background-color: #cac4ce;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;
export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
export const SelectAttributeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 6px;
`;
export const Color = styled.div`
  width: 40px;
  height: 15px;
  background-color: ${(props) => props.color};
  border: ${(props) => props.border};
`;
export const Range = styled.input`
  :focus::-webkit-slider-runnable-track {
    background: ${(props) => `rgba(114,90,193,${props.opacity})`};
  }
  ::-webkit-slider-runnable-track {
    background: ${(props) => `rgba(114,90,193,${props.opacity})`};
  }
`;
export const Label = styled.label`
  font-size: 12px;
`;
