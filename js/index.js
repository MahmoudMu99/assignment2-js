

function randomQuotes(){
    var quoteOwner = ["--Frank Sinatra" , "--Epictetus" , "--Wayne Gretzy" ,"--Elbert Hubbard" , "--Nelson Mandela"];
    var quoteText = ["The best revenge is massive success." , "It's not what happens to you, but how you react to it that matters." , "You miss 100% of the shots you don't take." , "Do not take life too seriously. You will not get out alive." , "Resentment is like drinking poison and waiting for your enemies to die."];
    var num = Math.floor(Math.random()*quoteOwner.length);
    document.getElementById("quote").innerHTML=(quoteText[num]);
    document.getElementById("quoteowner").innerHTML=(quoteOwner[num]);
   
}



