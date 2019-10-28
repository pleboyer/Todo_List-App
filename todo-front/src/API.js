export function getItemAPI() {
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

export function postItemAPI(post_item) {
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

export function deleteItemAPI(id) {
  return fetch('/todos/'+id,
  {
    method: 'delete'
  })
  .then(res => res.text())          // convert to plain text
  .then(text => console.log(text))  // then log it out
  .catch((error) => console.error(error));
}

export function putItemAPI(id, put_item) {
  return fetch('/todos/'+id,
  {
    method: 'put',
    headers: {
      'Content-Type':'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(put_item)
  })
  .then(res => res.text())          // convert to plain text
  .then(text => console.log(text))  // then log it out
  .catch((error) => console.error(error));
}
