export function getItem() {
  return fetch('/todos/',{method: 'get'})
  .then(res => res.json())          // convert to plain text
  .then(function(json) {
    var listItemJSON = []
    for(let i=0; i<json.length;i++){
      listItemJSON.push(JSON.parse(json[i]))
    }
    console.log(listItemJSON)
    return listItemJSON
  })
  .catch((error) => console.error(error));
}

export function postItem(post_item) {
  return fetch('/todos/',
  {
    method: 'post',
    headers: {
      'Content-Type':'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(post_item)
  })
  .then(res => res.text())          // convert to plain text
  .then(text => console.log(text))  // then log it out
  .catch((error) => console.error(error));
}
