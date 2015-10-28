import Backbone from 'Backbone';
import Single from './single';
import {API_URL} from '../parse_data';

export default Backbone.Collection.extend({
	url   :API_URL,
	model : Single,
	parse(data){
		return data.results;
	} 
});

