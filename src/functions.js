export function containerInformation(search, i) {
  var key = "3c255e54";
  var url = `http://www.omdbapi.com/?${i}=${search}&apikey=${key}`;
  return fetch(url)
    .then(Response => {
      return Response.json();
    })
    .catch(e => console.log(`Error ${e}`));
}
