let quoteAndName = [
  {
    quote:
      "In the end, it's not the years in your life that count. It's the life in your years",
    name: "Abraham Lincoln",
  },
  {
    quote: "You must be the change you wish to see in the world.",
    name: "Mahatma Gandhi",
  },
  {
    quote:
      "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    name: "Mother Teressa",
  },
  {
    quote: "The only thing we have to fear is fear itself.",
    name: "Franklin D. Roosevelt",
  },
  {
    quote:
      "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that",
    name: "Martin Luther King Jr",
  },
  {
    quote:
      "Do not go where the path may lead, go instead where there is no path and leave a trail",
    name: "Ralph Waldo Emerson",
  },
  {
    quote:
      "It is during our darkest moments that we must focus to see the light",
    name: "Aristotle",
  },
  {
    quote:
      "Go confidently in the direction of your dreams! Live the life you've imagined",
    name: "Henry David Thoreau",
  },
  {
    quote: "Never let the fear of striking out keep you from playing the game",
    name: "Babe Ruth",
  },
  {
    quote:
      "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    name: "Dr. Seuss",
  },
];
document.querySelector(".next-quote").addEventListener("click", function () {
  let length = quoteAndName.length;
  console.log(length);
  let rand = Math.floor(Math.random() * length);
  document.querySelector(".quote").textContent = quoteAndName[rand].quote;
  document.querySelector(".quote-person").textContent = quoteAndName[rand].name;
});
