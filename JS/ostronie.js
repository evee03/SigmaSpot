let hamburger = document.querySelector(".hamburger");
hamburger.onclick = function (){
    let navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
};

//Pobieranie filmu za pomoca FETCH API
fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=DLACZEGO%20Puzzle%20s%C4%85%20wa%C5%BCne%20-%20Czy%20warto%20je%20uk%C5%82ada%C4%87%3F&key=AIzaSyAxr4TS-wGtA51WJ63qILTd6sklVtblS90')
    .then(response => response.json())
    .then(data => {
        const videoId = data.items[0].id.videoId;
        const player = document.getElementById('player');
        player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    })
    .catch(error => console.error('Error fetching video:', error));



