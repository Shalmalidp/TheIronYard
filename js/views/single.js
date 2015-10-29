export default function(data) {
  return `
    <div class="single">
      <button class="back-button" data-to="MembersView">
        <i class="fa fa-arrow-left"></i>
      </button>
      <p>${data.Photo}</p>
      <p>${data.Name}</p>
      <p>${data.Designation}</p>
      <p>${data.Phone}</p>      
      <p>${data.Email}</p>
      <p>${data.Location}</p>
      <p>${data.State}</p>      
    </div>
  `;
}
      // <div class="gravatar">
      //   <img src="${data.Gravatar}">
      // </div>