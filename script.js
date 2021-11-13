var app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class','container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
//creating a request variable and assign a new XMLHttpRequest object to it;


//open a new connection, using the get request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);


request.onload = function(){

    //begin accessing JSON data here
    var data = JSON.parse(this.response);

    if(request.status >= 200 && request.status < 400){
        data.forEach((movie)=>{

            const card = document.createElement('div');
            card.classList.add('card');

            const h1 = document.createElement('h1');
            h1.textContent = movie.title;

            const p = document.createElement('p');
            movie.description = movie.description.substring(0, 300)
            p.textContent = `${movie.description}.....`;

            container.appendChild(card);

            card.appendChild(h1);
            card.appendChild(p);
        })
    }else{
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Gah, it's not working`;
        app.appendChild(errorMessage);
    }
}


//send request
request.send()

