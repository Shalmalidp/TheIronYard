export default function(){

return (
`
<h4> Add Members</h4>
<form>
<label class='field-labels'>Name 
</label>
  <input id="name" type='text' placeholder="Enter Name"  >

<label class='field-labels'>Designation
</label>
  <input id='designation' type='text' placeholder="Enter Designation"  >

<label class='field-labels'>Phone 
</label>
  <input id='phone' type='text' placeholder="Phone"  >

<label class='field-labels'>Email 
</label>
  <input id='email' type='text' placeholder="Email Address"  >

<label class='field-labels'>Location 
</label>
  <input id='loc' type='text' placeholder="Location">

<label class='field-labels'>State 
</label>
  <input id='st' type='text' placeholder="State"  >

<button class='save' data-save-btn='AddTemplate'>Save</button>
<button class = 'cancel' data-cancel-add="HomeTemplate">Cancel </button>
</form>
<button class="add-back-button" data-to="HomeTemplate">
    <i class="fa fa-arrow-left"></i>
</button>
`);
};