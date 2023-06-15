// create test for async call or request 

//installl node fetch 
const fetch = require('node-fetch');

//little dependency injection 
//create a request promise 
const getPeoplePromise = fetch => {
    return fetch('https://swapi.dev/api/people')
    .then(response => response.json())
    .then(data => {
        return {
            count: data.count,
            results: data.results
        }
    })
}

//use request with async await 
const getPeopleAsync =  async (fetch) => {
    const getRequest = await fetch('https://swapi.dev/api/people');
    const data = await getRequest.json();
    return {
        count: data.count,
        results: data.results
    }
    
}

module.exports ={
    getPeopleAsync,
    getPeoplePromise
} ;
