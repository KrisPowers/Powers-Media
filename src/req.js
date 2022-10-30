(function(){

    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1035957373493329920/Upj7rW0Q-IVRx4obxJYIpQ_Cee9n6DrhumMQWI_ff06byvnCfzkCdXEThz8NYP1Uol-8");
  
    request.setRequestHeader('Content-type', 'application/json');
  
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
  
    today = mm + '/' + dd + '/' + yyyy;

    const params = {
        username: 'POWERS MEDIA',
        content:`\`\`[${today}] - CONNECTION REQUEST\`\` \n \`\`\`${window.location.href}\`\`\``
    }
  
    request.send(JSON.stringify(params));
  
})()