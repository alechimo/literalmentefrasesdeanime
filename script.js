const quotes = [
  {
    character: "Naruto Uzumaki",
    phrase: "¡Nunca me rindo!",
    anime: "Naruto"
  },
  {
    character: "Monkey D. Luffy",
    phrase: "¡Voy a ser el Rey de los Piratas!",
    anime: "One Piece"
  },
  {
    character: Goku,
    phrase: ¡No importa cuántas veces caiga, siempre me levantaré más fuerte que antes!,
    anime: Dragon Ball
  },
  {
    character: Saber,
    phrase: La verdadera nobleza no proviene del nacimiento, sino de la rectitud del corazón.,
    anime: Fate/stay night
  },
  {
    character: Spike Spiegel,
    phrase: No vivas en el pasado, no sueñes en el futuro, concentra la mente en el momento presente.,
    anime: Cowboy Bebop
  },
  {
    character: Revy,
    phrase: En este mundo podrido, los que son capaces de moverse adelante sin importar nada, tienen el mayor valor.,
    anime: Black Lagoon
  },
  {
    character: Killua Zoldyck,
    phrase: Incluso en los días más oscuros, podemos encontrar la luz si solo recordamos encender la llama dentro de nosotros.,
    anime: Hunter x Hunter
  },
  {
    character: Taiga Aisaka,
    phrase: La distancia entre dos personas no importa cuando sus corazones están conectados.,
    anime: Toradora!
  },
  {
    character: Gintoki Sakata,
    phrase: En este mundo, si quieres vivir, debes aceptar todo, incluso los momentos más crueles.,
    anime: Gintama
  },
  {
    character: Holo,
    phrase: A veces, las decisiones más difíciles son las que nos llevan a nuestro verdadero destino.,
    anime: Spice and Wolf
  },
  {
    character: Vegeta,
    phrase: La fuerza no proviene de la habilidad física, sino de la fuerza indomable de voluntad.,
    anime: Dragon Ball Z
  },
  {
    character: Hachiman Hikigaya,
    phrase: A veces, la soledad es preferible a la falsa compañía.,
    anime: My Teen Romantic Comedy SNAFU
  },
  {
    character: Mikasa Ackerman,
    phrase: Aquellos que no pueden aceptar su propio fracaso nunca pueden alcanzar la grandeza.,
    anime: Attack on Titan
  },
  {
    character: Yukino Yukinoshita,
    phrase: La verdadera belleza no reside en la apariencia, sino en la autenticidad del alma.,
    anime: My Teen Romantic Comedy SNAFU
  },
  {
    character: Kiritsugu Emiya,
    phrase: La justicia puede ser cruel, pero a veces, es necesaria para proteger lo que amamos.,
    anime: Fate/Zero
  },
  {
    character: Eikichi Onizuka,
    phrase: La verdadera educación no se encuentra en los libros, sino en la vida misma.,
    anime: Great Teacher Onizuka
  },
  {
    character: Rin Tohsaka,
    phrase: La fuerza no es solo física, sino también mental y emocional.,
    anime: Fate/stay night
  },
  {
    character: Ken Kaneki,
    phrase: A veces, debemos enfrentar nuestros demonios internos para encontrar la verdadera fuerza.,
    anime: Tokyo Ghoul
  },
  {
    character: Nami,
    phrase: El tesoro más valioso no se encuentra en oro ni joyas, sino en los lazos que creamos con los demás.,
    anime: One Piece
  },
  {
    character: Hachikuji Mayoi,
    phrase: La vida es un viaje, y cada encuentro es una oportunidad para crecer y aprender.,
    anime: Monogatari Series
  },
  {
    character: Guts,
    phrase: El pasado puede doler, pero siempre podemos elegir cómo responder y seguir adelante.,
    anime: Berserk
  },
  {
    character: Megumin,
    phrase: La pasión es el fuego que arde dentro de nosotros, siempre listo para estallar en acción.,
    anime: KonoSuba
  },
  {
    character: Rintarou Okabe,
    phrase: La ciencia puede ser fría y calculadora, pero también puede llevarnos a descubrimientos asombrosos.,
    anime: Steins;Gate
  },
  {
    character: Shouya Ishida,
    phrase: El perdón no borra el pasado, pero nos permite liberarnos del peso del arrepentimiento.,
    anime: A Silent Voice
  },
  {
    character: Levi Ackerman,
    phrase: El verdadero liderazgo no se trata de dar órdenes, sino de proteger a aquellos que están a tu cargo.,
    anime: Attack on Titan
  },
  {
    character: Haruhi Suzumiya,
    phrase: El mundo está lleno de misterios esperando ser descubiertos, solo necesitamos abrir nuestros ojos y mirar.,
    anime: The Melancholy of Haruhi Suzumiya
  },
  {
    character: Saitama,
    phrase: La verdadera fuerza no radica en la capacidad de destruir, sino en la capacidad de proteger y salvar vidas.,
    anime: One Punch Man
  },
  {
    character: Asuka Langley Soryu,
    phrase: La valentía no es la ausencia de miedo, sino la determinación de seguir adelante a pesar de él.,
    anime: Neon Genesis Evangelion
  },
  {
    character: Yuu Otosaka,
    phrase: Los poderes pueden ser una bendición o una maldición, depende de cómo elijamos usarlos.,
    anime: Charlotte
  },
  {
    character: Kenshin Himura,
    phrase: La espada puede ser una herramienta de destrucción o de protección, depende del corazón del que la empuña.,
    anime: Rurouni Kenshin
  },
  {
    character: Hiyori Iki,
    phrase: Los lazos que creamos con otros pueden ser más fuertes que las cadenas que nos atan al pasado.,
    anime: Noragami
  },
  {
    character: Edward Elric,
    phrase: Los errores del pasado son lecciones que nos enseñan a ser mejores en el futuro.,
    anime: Fullmetal Alchemist
  },
];

const generateButton = document.getElementById("generate-btn");
const quoteContainer = document.getElementById("quote-container");
const characterElement = document.getElementById("character");
const phraseElement = document.getElementById("phrase");
const animeElement = document.getElementById("anime");

generateButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const { character, phrase, anime } = quotes[randomIndex];

  characterElement.textContent = character;
  phraseElement.innerHTML = replaceEmojis(phrase);
  animeElement.textContent = anime;

  quoteContainer.style.display = "block";

  // Reiniciar la animación
  void quoteContainer.offsetWidth; // Truco para reiniciar la animación
  quoteContainer.classList.remove("fade-out");
  quoteContainer.classList.add("fade-in");

  // Desaparecer la frase después de un tiempo
  setTimeout(() => {
    quoteContainer.classList.remove("fade-in");
    quoteContainer.classList.add("fade-out");
  }, 2000); // Cambia 2000 por el tiempo deseado en milisegundos
});

// Esta función reemplaza los emojis en el texto con la representación de imagen correspondiente de Twemoji
function replaceEmojis(text) {
  return twemoji.parse(text);
}
