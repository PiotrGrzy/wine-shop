import { createGlobalStyle } from "styled-components"
import bg from "../images/wines-bg-napa.jpg"

const GlobalStyles = createGlobalStyle`
:root {
    --white: #ffffffff;
    --black: #101010;
    --dark-purple: #412234ff;
    --dark-byzantium: #6d466bff;
    --wisteria: #b49fccff;
    --misty-rose: #ead7d7ff;
}

html {
    font-family: 'Montserrat', sans-serif;
    font-size:10px;
    color:var(--black);
    background-image:url(${bg});
   background-position:fixed;

/* background-color: var(--misty-rose);
background-image: linear-gradient(90deg, var(--misty-rose) 0%, var(--white) 100%); */

}
*,
*::before,
*::after {
    box-sizing:border-box;}
a {
    text-decoration:none;
    color:inherit;
    cursor:pointer;}
button{
    background-color:transparent;
    color:inherit;
    border-width:0;
    padding:0;
    cursor:pointer;}
    figure{margin:0;}
input::-moz-focus-inner {
    border:0;
    padding:0;
    margin:0;}
ul, ol, dd{
    margin:0;
    padding:0;
    list-style:none;}
h1, h2, h3, h4, h5, h6{
    margin:0;
    font-size:inherit;
    font-weight:inherit;}
p {
    margin:0;
}
cite {
    font-style:normal;
}
fieldset { 
    border-width:0;
    padding:0; 
    margin:0;
}

.container {
    max-width:1200px;
    margin: 0 auto;
}


`

export default GlobalStyles
