import React from 'react';
import ReactDOM from 'react-dom/client';
import Car from './Car';
//import Car from './Car'
import Garage from './Garage'
//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

//const myFirstElement = <h1>Hello World</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));


/*const myElement = (
    <table>
        <tr>
            <th>Name</th>
        </tr>
        <tr>
            <td>
                John
            </td>
        </tr>
        <tr>
            <td>
                Elsa
            </td>
        </tr>
    </table>
)*/
/* -----------If statements are not Allowed in JSX-----------------
const x = 11;
let text = "Goodbye";
if (x < 10) {
  text = "Hello";
}
const myElement = <h1>{text}</h1>;*/

/* ------------Mucho más eficiente pero menos legible-------------
const x = 5;

const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;*/

/* ----------- Asi se renderiza con Objetos ------------
class Car extends React.Component{
    render() {
        return <h2>Hi, im a car</h2>
    }
}

------------- Así se rederiza con funciones ------------



*/




root.render(<Garage/>)