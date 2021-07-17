const btn = $(".btn");
const list = $(".quote-list");

$(".btn").click(async () => {
  try {
    const quotes = await axios.get("https://animechan.vercel.app/api/random");
    console.log(quotes.data);
    quote = quotes.data;
    // $(".quote-list").prepend(`<blockquote class="blockquote mb-3">
    //     <h3 class="list-group-item">${quote.quote}</h3></blockquote>
    //     <p class="lead">${quote.character}(${quote.anime})</p>
    //     `);
    $(".quote-list").prepend(`
    <figure>
      <blockquote class='blockquote'>
        <h5>${quote.quote}</h5>
      </blockquote>
        <figcaption class='blockquote-footer'>
          ${quote.character} (<cite title='Source Title'>${quote.anime}</cite>)
        </figcaption>
    </figure>
    `);
  } catch (err) {
    console.log(err);
  }
});

//For the sake of the girl who will one day tell you she loves you... Don't turn away. Keep training.
//You can’t stop fighting to play. Once you've lost that drive, you’ll start to lose your edge.
//It's not whether it's feasible or not – it's what I'm doing. - Near
//If I try, I fail. If i don't try i'm never going to get it.
//At first, people only play as dots. But when lines of trust and friendship connect those dots, the lines become a circle and that circle is teamwork. As long as you keep playing as a dot, the others won't trust you either.
//Why are you looking for something when you can't even remember what it is?
//All we can do is live while losing things.
//There's always someone better. That's why I can't stop fighting.
//I'm saying that practically nobody feels that they're talented. That's what makes us strive to improve. As we strive to improve, we notice the people around us improving too, which makes us work even harder. I guess you could say friends are like rivals, in a way.
//Those who lack resolve are incapable of even wiping away their own tears.
//I will do what I can, even if my chance of passing is minuscule, if that will allow me to move forward.
//It's okay to make mistakes. In fact, you should. Making mistakes is how you learn to do it right. Getting a good result isn't the only thing. What matters is that you play your best during the game.
//Flattery will get you everywhere.
