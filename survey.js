const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What\'s your name? Nicknames are also acceptable :)", (answer1) => {
  console.log(`Nice to meet you ${answer1}`),
  rl.question("What's an activity you like doing?", (answer2) => {
    console.log(`That fantastic I love ${answer2}`),
    rl.question("What do you listen to while doing that?", (answer3) => {
      console.log(`That great taste in ${answer3} music`),
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer4) => {
        console.log(`That great taste in ${answer4} food`),
        rl.question("Which sport is your absolute favourite?", (answer5) => {
          console.log(`That a great sport, ${answer5}, everybody loves it `),
          rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer6) => {
            console.log(`Hi ${answer1}, you're favorite activity doing is ${answer2}. 
You like listening to ${answer3} music. Your favorite meal is ${answer4} 
and your favorite sport is ${answer5}. Your superpower is ${answer6}, which wants!`);
          
            
            rl.close();
          });
        });
      });
    });
  });
});