
const numberOfFilms = +prompt('', '');

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i = 0; i < 2; i++) {
    const a = prompt('один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDb.movies[a] = b;
        console.log('done')
    }else{
        console.log('error'); 
        i--
    }

}; 

if(personalMovieDb.count < 10){
    console.log("Просмотренно довольно мало фильмов")
} else if(personalMovieDb >= 10 && personalMovieDb.count < 30){
    console.log("вы классический зритель")
} else if(personalMovieDb.count >= 30){
    console.log("Вы киноман")
}else{
    console.log('error')
}; 













