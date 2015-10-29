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
      <h1>The Iron Yard Family</h1>
      <div>${display(data)}</div>
    </div>

  `;
}

