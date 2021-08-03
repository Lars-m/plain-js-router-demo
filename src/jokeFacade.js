const url = "http://localhost:3000/jokes";

function jokeFacade() {

  function getAllJokes() {
    return fetch(url).then(r => r.json()).then(d => d);
  }
  function getJoke(id) {
    return fetch(`${url}/${id}`).then(r => r.json()).then(d => d);
  }
  return {
    getAllJokes,
    getJoke

  }

}

export default jokeFacade();