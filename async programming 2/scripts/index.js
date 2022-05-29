let container=document.getElementById("slider");

var imgarr=[
    "https://wallpapercave.com/dwp2x/wp1934740.jpg",
    "https://wallpapercave.com/dwp2x/wp8525542.jpg",
    "https://wallpapercave.com/dwp2x/wp10387943.jpg"
];



function start(){
    let images= document.getElementById("img");
    var i=0;
    let slider=setInterval(function(){
        images.src=imgarr[i];
        i=i+1;
        if(i===imgarr.length){
            i=0;
        }
    }, 2000)
    
}
start();



var dataMovie=[
    {
        title:"" ,
        
    }
]
function movieDiv(){

}
let moviesData = [
    {
      name: "Spider-Man:No Way Home",
      poster: "https://cdn.moviestillsdb.com/storage/posters/72/10872600_150.jpg",
      releaseDate: 2021,
      IMDBrating: 8.5,
    },
    {
      name: "The Batman",
      poster: "https://cdn.moviestillsdb.com/storage/posters/6e/1877830_150.jpg",
      releaseDate: 2022,
      IMDBrating: 8.2,
    },
  
    {
      name: "Avengers:Endgame",
      poster: "https://cdn.moviestillsdb.com/storage/posters/46/4154796_150.jpg",
      releaseDate: 2019,
      IMDBrating: 8.8,
    },
  
    {
      name: "The Northman",
      poster:
        "https://cdn.moviestillsdb.com/storage/posters/67/11138512_150.jpg",
      releaseDate: 2022,
      IMDBrating: 8.0,
    },
  
    {
      name: "Scream",
      poster: "https://cdn.moviestillsdb.com/storage/posters/a9/11245972_150.jpg",
      releaseDate: 2022,
      IMDBrating: 7.9,
    },
  
    {
      name: "Star wars:The Rise of Skywalkers",
      poster: "https://cdn.moviestillsdb.com/storage/posters/ce/2527338_150.jpg",
      releaseDate: 2019,
      IMDBrating: 8.4,
    },
  
    {
      name: "West side story",
      poster: "https://cdn.moviestillsdb.com/storage/posters/2b/3581652_150.jpg",
      releaseDate: 2021,
      IMDBrating: 8.1,
    },
  
    {
      name: "Morbius",
      poster: "https://cdn.moviestillsdb.com/storage/posters/52/5108870_150.jpg",
      releaseDate: 2022,
      IMDBrating: 8.6,
    },
  
    {
      name: "Dune",
      poster: "https://cdn.moviestillsdb.com/storage/posters/29/1160419_150.jpg",
      releaseDate: 2021,
      IMDBrating: 5.8,
    },
  ];
  
  localStorage.setItem("allMovies", JSON.stringify(moviesData));
  
  let movies = JSON.parse(localStorage.getItem("allMovies"));
  let moviediv=document.getElementById("movies");
  displayData=(movies) =>{
    document.getElementById("movies").innerHTML = "";
    movies.forEach((movie) => {
      let movieCard = document.createElement("div");
  
      let poster = document.createElement("img");
      poster.src = movie.poster;
  
      let name = document.createElement("p");
      name.innerText = `Name: ${movie.name}`;
  
      let releaseDate = document.createElement("p");
      releaseDate.innerText = `Release Date: ${movie.releaseDate}`;
  
      let rating = document.createElement("p");
      rating.innerText = `IMDB Rating: ${movie.IMDBrating}`;
  
      movieCard.append(poster, name, releaseDate, rating);
  
      moviediv.append(movieCard);
    });
  }
  displayData(movies);
  
  const sortLH=() => {
    movies.sort((a, b) => {
      return a.IMDBrating - b.IMDBrating;
    });
    displayData(movies);
  };
  
 const sortHL=() => {
    movies.sort((a, b) => {
      return b.IMDBrating - a.IMDBrating;
    });
    displayData(movies);
  };