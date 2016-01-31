function display(data) {
  return data.map(function(item){
    return `
      <p class="single-list-item" data-single-id="${item.objectId}">${item.Name} </p>
      <p class="desig" data-desig="${item.objectId}">Designation : ${item.Designation}</p>
    `;
  }).join('');
}

export default function(data) {
  return `
    <div class="members-list">
      <h1>The Iron Yard Atlanta</h1>
      <div>${display(data)}</div>
    </div>
    <button class="collection-back-button" data-to="HomeTemplate">
      <i class="fa fa-arrow-left"></i>
    </button>

  `;
}

