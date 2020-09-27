 // sets up the discord module
   const Discord = require('discord.js');
   const client = new Discord.Client();

   // prints out a confirmation
   // after node
   client.once('ready', () =>
   {
	   console.log('Bot Server is Running!!');
   });

   let ranchList = ['Yo brotendo, do you mind if I bathe your wife?',
   'Hashtag real quick, youre being a NARC right now, dude, straight up. Youre like ignoring me and eating Chipotle in my face and you know Im on a hunger strike.',
   'No disrespect, are you circumcised?','Play these spoons, babydoll.',
   'Im addicted to cough syrup. I drink it.',
   'Time to deliver a pizza ball',
   'Ranch me Brotendo', 'Can I get a litte squirt? I drink the stuff','Do you know Margaret Thatcher had girl power? ' +
   'Do you think she effectively utilized girl power by effectively funneling money to illegal paramilitary death squads in Northern Ireland?'];


   function getRandomInt(max)
    {
     return Math.floor(Math.random() * Math.floor(max));
    }

   // responds to ping commands
   client.on('message', message =>
     {
      if (message.content === '!ranchMe')
       {
        let randIndex = getRandomInt(9);
	  	 message.channel.send(ranchList[randIndex]);
       }

      });


client.login('Token goes here');
