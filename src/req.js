(function(){

    const request = new XMLHttpRequest();
    request.open("POST", "");
  
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