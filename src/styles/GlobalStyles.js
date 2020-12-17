import { createGlobalStyle } from "styled-components"
import bg from "../images/wines-bg-napa.jpg"

const GlobalStyles = createGlobalStyle`
:root {
    --white: #ffffffff;
    --black: #101010;
    --primary: #412234ff;
    --primary-light: #6d466bff;
    --secondary: #b49fccff;
    --secondary-light: #ead7d7ff;
    --bg-backdrop-white:  rgba(255, 255, 255, 0.6);
    --box-shadow:rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}

html {
    font-family: 'Montserrat', sans-serif;
    font-size:10px;
    color:var(--black);
    background-image:url(${bg});
   background-position:fixed;

/* background-color: var(--secondary-light);
background-image: linear-gradient(90deg, var(--secondary-light) 0%, var(--white) 100%); */

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
    padding:0 1rem;


}
.error-msg {
    color: #961818;
    margin-top: 1rem;
    font-size:1.4rem;
    text-align:center;
}
.toast {
    background-color:var(--primary-light);
    color:var(----white);
    font-size:1.8rem;
}

`

export default GlobalStyles
