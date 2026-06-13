import Handlebars from 'handlebars';

import template from './template.hbs';
import { products } from './data.js';


const output = template({products});

document.body.innerHTML = output;


