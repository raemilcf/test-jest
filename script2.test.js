const fetch = require('node-fetch');
const swapi = require('./script2');

//check if count equals to 82
//must be 87
it("calls swapi async", (done) => {
    //with async calls  always add assertions 
    expect.assertions(1); //how many test cases you expect to run in this
    //failed because is async call, the expect is called right away the async request is call 
    //it doesnt wait for the response 
    //we add done to tell the test case we have to wait for the async response 
    swapi.getPeopleAsync(fetch).then(data => {
        expect(data.count).toEqual(82);
        done();
    });
});


//check if count equals to 82
//must be 87
it("calls swapi async", () => {

    expect.assertions(1); //how many test cases you expect to run in this
    //failed because is async call, the expect is called right away the async request is call 
    //it doesnt wait for the response 
    //we add return to wait for the return 
    return swapi.getPeopleAsync(fetch).then(data => {
        expect(data.count).toEqual(82);
       
    });
});


it("calls swapi promise ", () => {
    expect.assertions(2); //how many test cases you expect to run in this
    return swapi.getPeoplePromise(fetch).then(data => {
        expect(data.count).toEqual(82);
        expect(data.results.length).toBeGreaterThan(5);
    })
});



it('getPeople returns count and results', ()=> {
    //mock function let you spy on the function 
    const mockFetch = jest.fn()
    .mockReturnValue(Promise.resolve({
        json : () => Promise.resolve({
            count: 87,
            results: [0,1,2,3,4,5]
        })
    }));
                        
    expect.assertions(4);
    return swapi.getPeoplePromise(mockFetch).then(data => {
        //spy what function did
        expect(mockFetch.mock.calls.length).toBe(1);
        expect(mockFetch).toBeCalledWith('https://swapi.dev/api/people');
        expect(data.count).toEqual(87);
        expect(data.results.length).toBeGreaterThan(2);
    })
})