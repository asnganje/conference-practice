const dynConnect = document.getElementById('speakers');

const ourSpeakers = [
    {
        img: 'Ariel.png',
        name: 'Ariel Camus',
        profession: 'founder and CEO of Microverse,',
        description: 'he founder and CEO of Microverse, an online school that offers opportunities to people around the world.',

    },
    {
        img: 'tim.jpg',
    name: 'Tim Bray',
    profession: 'Canadian software developer,',
    description: ' A software developer, environmentalist, political activist and one of the co-authors of the original XML specification. He also worked for Amazon Web Services, Google and Sun Microsystems. In addition he co-founded several start-ups such as Antarctica Systems.',

    },
    
    {
        img: 'buchheit.jpg',
    name: 'Paul Buchheit',
    profession: 'Computer engineer and enterpreneur,',
    description: ' An American computer engineer who created Gmail. He developed the original prototype of Google AdSense as part of his work on Gmail.',

    }
]

const loadSpeakers = () => {
    let themSpeak = '';
    for(let count = 0; count < ourSpeakers.length; count += 1) {
    const cards = `
    <div class = "speakersOurs">
    <article class = "speaker-container">
        <div>
            <img class = "speaker-image" class = "img-${count + 1}" src="./images/speakers/${ourSpeakers[count].img}" alt = "images-of-speakers"></img>
        </div>
        <div class = "speaker-content">
        <h2 class="speaker-header">${ourSpeakers[count].name}</h2>
        <p class="speaker-profession">${ourSpeakers[count].profession}</p>
        <p class="speaker-description">${ourSpeakers[count].description}</p>
        </div>
    </article>
    </div>`
    themSpeak += cards;
    }
    dynConnect.innerHTML = themSpeak;
}

loadSpeakers();