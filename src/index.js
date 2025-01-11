/**
* @file Main File for CFujitaHumber.Github.io
* @author Carson Fujita
* @copyright Carson Fujita 2025
*/
import { createRoot } from 'react-dom/client'
import Home from './Home'

// clear existing HTML content
document.body.innerHTML = '<div id="app"></div>';

//import css styles
import 'bootstrap/dist/css/bootstrap.min.css';

// render
const root = createRoot(document.getElementById('app'));
root.render(<Home />)