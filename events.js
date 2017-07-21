var randomStrings = [
    "'I am glad that you are here with me,' said Frodo.'Here at the end of all things, Sam.''Yes, I am with you, Master,' said Sam, laying Frodo's wounded hand gently to his breast. 'And you're with me. And the journey's finished. But after coming all that way I don't want to give up yet. It's not like me, somehow, if you understand. 'Maybe not, Sam,' said Frodo, 'but it's like things are in the world. Hopes fail. An end comes. We have only a little time to wait now. We are lost in ruin and downfall,and there is no escape.'",
    "But do you remember Gandalf's words: Even Gollum may have something yet to do? But for him, Sam, I could not have destroyed the Ring. The Quest would have been in vain, even at the bitter end. So let us forgive him! For the Quest is achieved, and now all is over.",
    "Wu-Tang killa bees, We on the swarm!"
  ];

  var randomDiv = document.getElementById("quote");

  document.getElementById("myButton").addEventListener("click", generate);

  function generate() 
  {
    randomIndex = Math.ceil((Math.random() * randomStrings.length - 1));
    newText = randomStrings[randomIndex];
    randomDiv.innerHTML = newText;
  }

  generate();