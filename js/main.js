import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import './ajax_setup';

import Router from './router';

//GRABBING HTML ELEMENT TO DISPLAY INFORMATION
let $app = $('.app');

// var router = new Router($app).start() can be written as below
new Router($app).start();

