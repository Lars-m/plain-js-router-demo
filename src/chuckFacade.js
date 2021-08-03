const url = "https://api.chucknorris.io/jokes/random";

function chuckFacade() 
{

  function getChuckNorrisJoke() {
    return fetch(url).then(r => r.json()).then(d => d.value);
  }
  return { getJoke: getChuckNorrisJoke }

}

export default chuckFacade();
