import {createGlobalStyle} from "styled-components";
export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Sora:wght@500;600;700&family=Ubuntu:wght@300;400;500;700&display=swap');
body {
  line-height: 1.5;
  font-family: "Ubuntu", sans-serif;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html,
body {
  height: 100%;
}



img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
  outline: none;
  border: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}
:root{
  
}
`;
