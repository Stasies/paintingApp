import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
}
a{
  text-decoration:none ;
  all: unset;
}
input[type="range"] {
  -webkit-appearance: none;
    border-radius: 3px;
    cursor: pointer;
}

input[type="range"]::-webkit-slider-runnable-track {
  width: 200px;
  height: 5px;
  /* background: #fff; */
  border: none;
  border-radius: 3px;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: none;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: rgb(114,90,193);
  margin-top: -4px;
}

input[type="range"]:focus {
  outline: none;
}


`;
