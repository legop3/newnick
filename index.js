const { Client, GatewayIntentBits } = require('discord.js')
const { token } = require('./config.json')
const fs = require('fs');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent ]})


client.once('ready', () => {
    console.log('ready')
})


// client.once('message', function(message) {
//     console.log(message)
// })

client.on('messageCreate', (message) => {

    


        //magic multi prefix machine
            const nickprefixes = ['nick', 'Nick', 'wilde', 'Wilde', 'fox', 'Fox'];
            let nickprefix = false;
            for(const thisnickPrefix of nickprefixes) {
              if(message.content.startsWith(thisnickPrefix)) nickprefix = thisnickPrefix;
            }
            if(!nickprefix) return;
          
            // Go ahead with the rest of your code!
        
        //start nick commands
        const args = message.content.slice(nickprefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
    
        //nick speak command
        if(command === 'speak') {
          message.channel.send('bark');
          console.log('nick barked')
        };
    
        //nick carrots command
        // if(command === 'carrots') {
        //   message.channel.send("yum", { files: ["./carrots.jpg"] })
        // };
    
        //nick sniff command
        if(command === 'sniff') {
          message.channel.send('**sniff sniff sniff sniff sniff sniff sniff sniff sniff sniff sniff sniff sniff sniff sniff sniff sniff sniff sniff sniff **')
        };
    
        //nick status command
        if(command === 'status') {
          let nickstatus = message.content.replace(nickprefix + ' status', '')
        nick.user.setActivity(nickstatus);
        };
    
        //nick kiss
        if(command === 'kiss') {
          message.channel.send('***kisses and nuzzles softly***')
        }
    
        //nick pics
    //     if(command === 'pics') {
    
    //       var fs = require('fs');
    // var files = fs.readdirSync('./nickpics/')
    // /* now files is an Array of the name of the files in the folder and you can pick a random name inside of that array */
    // let chosenFile = files[Math.floor(Math.random() * files.length)] 
    // console.log(chosenFile);
    // message.channel.send("heres a pic", { files: ['./nickpics/' + chosenFile] });
    
    //     };
    
    
    




})



client.login(token)