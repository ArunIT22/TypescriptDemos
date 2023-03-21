//Class Implementation
// class Movie {
//     movieName: string;
//     rating: number;
//     language: string[];
//     year: number;
// }
// let m = new Movie();
// m.movieName = "RRR";
// m.rating = 4.8;
// m.language = ["Tamil", "Telugu", "Hindi"];
// m.year = 2020;
// console.log(m);
class Movie {
    constructor(movieName, rating, languages, year, ...actors) {
        this.movieName = movieName;
        this.rating = rating;
        this.languages = languages;
        this.year = year;
        this.actors = actors;
    }
    display() {
        console.log("Movie Details\n");
        if (this.year == undefined) {
            console.log(`Name :${this.movieName}\tRating :${this.rating}\tLanguage :${this.languages}\tActors :${this.actors}`);
        }
        else {
            console.log(`Name :${this.movieName}\tRating :${this.rating}\tLanguage :${this.languages}\tYear :${this.year}\tActors :${this.actors}`);
        }
    }
}
let obj1 = new Movie("2.0", 4.5, ["Hindi", "Telugu", "Tamil"], 2010, "Rajini", "Aish");
obj1.display();
