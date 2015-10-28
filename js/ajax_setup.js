import $ from 'jquery';
import {APP_ID, API_REST_KEY} from './parse_data';

$.ajaxSetup({
		header : {
			'X-Parse-Application-Id' : APP_ID,
			'X-Parse-REST-API-Key' : API_REST_KEY
	}

});

