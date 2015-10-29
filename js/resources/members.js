import Backbone from 'Backbone';
import Single from './single';
import {APP_URL} from '../parse_data';

export default Backbone.Collection.extend({
	url   :APP_URL,
	model : Single,
	parse(data){
		return data.results;
	} 
});

