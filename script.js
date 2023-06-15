const googleDatabae = [
    'cats.com',
    'flowers.com',
    'animals.com',
    'souprecipes.com',
    'catpictures.com',
    'myfavoritecats.com'
];

const googleSearch = ( searchInput, db ) => {
    const matches = db.filter(website => {
        return website.includes(searchInput);
    });

    return matches.length > 3 ? matches.slice(0,3) : matches;
}



module.exports = googleSearch