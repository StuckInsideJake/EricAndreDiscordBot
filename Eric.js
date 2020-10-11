/**
  * @author Jake Stuck
  * 
  */
   // sets up the discord module
   const Discord = require('discord.js');
   const client = new Discord.Client();

   // prints out a confirmation
   // after node filename.js is ran 
   client.once('ready', () =>
   {
     console.log('Bot Server is Running!!');
   });

   /**
    * global variable
    * RListLength
    * integer variable representing the size of the 
    * ranchList array
    */
   var rlLength = 0;
   /**
    * global variable
    * RaLength
    * integer varaible representing the size of audio
    * array
    */
   var raLength = 0;

   /**
    * ranchList global variable
    * Description:
    * holds in the string values to be 
    * outputted to the discord channel that a command was 
    * pinged in
    */
   const ranchList = ['Bird Up! Its the worst show on television!!',
   'Hashtag real quick, youre being a NARC right now, dude, straight up.',
   'Youre like ignoring me and eating Chipotle in my face and you know Im on a hunger strike.',
   'Play these spoons, Reese Witherspoon.',
   'Time to deliver a pizza ball','Ranch me Brotendo', 
   'Can I get a litte squirt? I drink the stuff',
   'Do you know Margaret Thatcher had girl power? Do you think she effectively utilized girl power by effectively funneling money to illegal paramilitary death squads in Northern Ireland?', 
   'You seem pretty simple whats happening McNuggs?', 'You mind if I air DJ in your personal space right now?', 'Who killed Hanibal?'];

   /**
    * ranchAudio global variable
    * Description:
    * holds in string values that represent the path 
    * to the mp3 files 
    */
   const ranchAudio = ['/Path/to/mp3/file/birdUp.mp3',
                     '/Path/to/mp3/file/carBuying.mp3',
                     '/Path/to/mp3/file/cityCouncil.mp3',
                     '/Path/to/mp3/file/fruitLoops.mp3',
                     '/Path/to/mp3/file/gasoline.mp3',
                     '/Path/to/mp3/file/google.mp3',
                     '/Path/to/mp3/file/pizzaBall.mp3',
                     '/Path/to/mp3/file/ranchAudio.mp3'];
    
  // aquires the length for the two arrays
  rlLength = ranchList.length;
  raLength = ranchAudio.length;

  /**
   * 
   * @param 
   *  max- maximum number that can be randomly generated 
   * @returns
   * integer value representing an index in either array above 
   */
  function getRandomInt(max)
   {
    return Math.floor(Math.random() * Math.floor(max));
   }

   // responds to ping commands
   client.on('message', message =>
     {
      // !ranch will print out an eric andre quoute 
      if (message.content === '!ranch')
       {
        let randIndex = getRandomInt(rlLength-1);
	message.channel.send(ranchList[randIndex]);
       }

     });

   client.on('message', message =>
     {
      let index = 0;
      // how many times this loop will run
      let count = getRandomInt(120);
      // responds to ping commands
      // spams my discord friends several times given a random number between 0 and 120. 
      // usually only stops in a resonable time by stopping the node 
      // server all together
      if (message.content === '!spam')
       {
         while(index < count)
        	 {
        	  let randIndex = getRandomInt(rlLength-1);
	  	  message.channel.send(ranchList[randIndex]);
	  	  index++;
        	 }
       }

      });
   // This block of code plays the Eric Andre intro theme when pinged      
   client.on('message', async message => 
      {
       if(!message.guild)
          {
            return;
          }
       if(message.content === '!intro')
          {
           if(message.member.voice.channel)
              {
               let connection = await message.member.voice.channel.join(); 
               let dispatcher = connection.play('/home/jake/Desktop/EricAndreBot/ericAudio/intro.mp3');
              } 
           else
              {
               message.reply('Someone needs to hop in the VC first!');
              }
          }
       });
   //plays random audio from the eric andre show
   client.on('message', async message => 
      {
       if(!message.guild)
          {
            return;
          }
       if(message.content === '!musicalRanch')
          {
           if(message.member.voice.channel)
              {
               let randIndex = getRandomInt(raLength-1);
               const connection = await message.member.voice.channel.join(); 
               message.reply('Playing:'+ ranchAudio[randIndex]);
               const dispatcher = connection.play(ranchAudio[randIndex]);
              } 
           else
              {
                message.reply('Someone needs to hop in the VC first!')
              }
          }
       });
   // allows for the code to be linked up with the discord api and logs in using a token
   client.login('Token goes here!');
