import db from './mockDb.json';


const mockGet = (filter) => {
    const result = db.filter(x => filter(x)).map(movie => ({ id: movie.imdbID, title: movie.Title, poster: movie.Poster }));
    return { movies: result.slice(0, 7) || [], count: result.length }
}

const getMockChunk = (num) => {
    let result = [];
    for (let i = 0; i < num; i++) {
        result.push(shuffle(db).map(movie => ({ id: movie.imdbID, title: movie.Title, poster: movie.Poster })).slice(0, 7));
    }
    return result;
}

const shuffle = (array) => {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

export { mockGet, getMockChunk }