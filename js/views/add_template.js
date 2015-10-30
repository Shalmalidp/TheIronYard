export default function(){

return (
`
<h4> Add Members</h4>
<form>
<label>Name <input id="name" type='text' placeholder="Enter Name"  ></label>
<label>Designation<input id='designation' type='text' placeholder="Enter Designation"  ></label>
<label>Phone <input id='phone' type='text' placeholder="Phone"  ></label>
<label>Email <input id='email' type='text' placeholder="Email Address"  ></label>
<label>Location <input id='loc' type='text' placeholder="Location"></label>
<label>State <input id='st' type='text' placeholder="State"  ></label>
<button class='save' data-save-btn='AddTemplate'>Save</button>
<button class = 'cancel' data-cancel-add="HomeTemplate">Cancel </button>
</form>
<button class="add-back-button" data-to="HomeTemplate">
    <i class="fa fa-arrow-left"></i>
</button>
`);
};