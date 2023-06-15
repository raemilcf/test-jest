const googleSearch = require('./script');


const dbMock = [

'cheese.com',
'plants.com',
'cats.com',
'google.com'

];

it('this is silly test ', () => {
    expect('hello').toBe('hello');
} );
describe('googleSearch', () => {
    
    it('google search ', () => {
        expect( googleSearch('g', dbMock) ).toEqual(['google.com']);
    
    } );
    
    it('expect undefined ', () => {
        expect( googleSearch(undefined, dbMock) ).toEqual([]);
    
    } );
    
    it('expect null ', () => {
        expect( googleSearch(undefined, dbMock) ).toEqual([]);
    
    } );
    
    it('it does not return more than 3 matches  ', () => {
        expect( googleSearch('.com', dbMock).length ).toEqual(3);
    
    } );
})
