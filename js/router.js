import Backbone from 'Backbone';
import $ from 'jquery';

//import {Home} from './views';

import {
  Members as MembersCollection
} from './resources';

import {
  Members as MembersView,
  Single as SingleView, 
  Home,
  Add,
  Update,
  Spinner
} from './views';

export default Backbone.Router.extend({
  routes : {
    ""              : "home",
    "members"       : "membersCollection",
    "single/:id"    : "singleList",
     "addForm"      : "addRecord", 
     "updateForm"   : "updateRecord",
     "deleteRecord" : "deleteRecord" 
},

start(){
  Backbone.history.start();
},

initialize(appElement){

  this.$el = appElement;
  //creating collection instance to use to add info to collections or manipulate info;
  this.collection = new MembersCollection();


//home page add button
  this.$el.on('click','.add',(event)=>{
    let $button = $(event.currentTarget);
    let Obj = $button.data('add-me');
    this.navigate(Obj,{trigger : true});
  })

  //save button on the add page

  this.$el.on('click','.save',(event)=>{
    let $button = (event.currentTarget);
    let saveObj = $button.data('save-btn');

  })


//home page update button
this.$el.on('click','.update',(event)=>{
    let $button = $(event.currentTarget);
    let Obj = $button.data('upd-me');
    this.navigate(`updateRecord`, {trigger : true });
  })
//home page View button
this.$el.on('click','.view',(event)=>{
    let $button = $(event.currentTarget);
    let Obj = $button.data('view-me');
    //console.log('im in the click of ', Obj);
    this.navigate(`MembersView`, {trigger : true});
   
  }),

//home page delete button
this.$el.on('click','.delete',(event)=>{
    let $button = $(event.currentTarget);
    let Obj = $button.data('del-me');
    this.navigate(`deleteRecord`, {trigger : true});
  })


//go to single's info page 
  this.$el.on('click','.single-list-item',(event) =>{
    let $p = $(even.currentTarget);
    let sObj = $p.data(single-id);
    this.navigate(`single/${sObj}`,{trigger : true});
  });
}, //end of initialize function

showSpinner(){
this.$el.html(Spinner());
},

home(){
  console.log ('im in the home');
  this.$el.html(Home());
},

membersCollection(){
  this.showSpinner();
  this.collection.fetch().then(()=>{
    this.$el.html(MembersView(this.collection.toJSON()));
    
  });

},


singleList(){
// let single = this.collection.get(id);

//     if (single) {
//       // we found the person from the collection
//       this.$el.html(
//         singleView(
//           person.templateData()
//         )
//       );
//     } else {
//       this.showSpinner();
//       person = this.collection.add({objectId: id});
//       person.fetch().then(() => {
//         this.$el.html(
//           PersonView(
//             person.templateData()
//           )
//         );
//       });
//     }


},


addRecord(){
  this.$el.html(Add());

},
updateRecord(){},

deleteRecord(){
  alert('You are not Authorised to delete data');
}








});
