const SteamUser = require('steam-user');
const TeamFortress2 = require('tf2');

let client = new SteamUser();
let tf2Client = new TeamFortress2(client);

client.logOn({
    accountName: '',
    password: ''
});

client.on('loggedOn', function(details) {
    console.log('Logged into Steam as ' + client.steamID.getSteam3RenderedID());
    client.setPersona(SteamUser.EPersonaState.Online);

    client.gamesPlayed(440);
});

tf2Client.on('connectedToGC', () => {
    console.log('connected to TF2 GC')
})

tf2Client.on('backpackLoaded', () => {
    // AssetID
    tf2Client.useItem('');
    console.log('Item Used');
})