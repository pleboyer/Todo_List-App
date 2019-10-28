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
