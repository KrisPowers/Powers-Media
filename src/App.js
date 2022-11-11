const mediaData = {
    "10": {
        "id":"10",
        "type":"jpg"
    },
    "9": {
        "id":"9",
        "type":"jpeg"
    },
    "8": {
        "id":"8",
        "type":"jpeg"
    },
    "7": {
        "id":"7",
        "type":"jpeg"
    },
    "6": {
        "id":"6",
        "type":"jpeg"
    },
    "5": {
        "id":"5",
        "type":"jpeg"
    },
    "4": {
        "id":"4",
        "type":"jpeg"
    },
    "3": {
        "id":"3",
        "type":"jpeg"
    },
    "2": {
        "id":"2",
        "type":"jpeg"
    },
    "1": {
        "id":"1",
        "type":"jpeg"
    }
}

var home_display = '';
var vertical_display = '';
var horizontal_display = '';

for (i in mediaData){
    
    vertical_display += `<div class="css-item" style="background-image: url('./media/${mediaData[i].id}.${mediaData[i].type}')"> <div class="css-download"> <div class="css-buttons"> <a download="./media/${mediaData[i].id}.jpeg">DOWNLOAD JPG</a></div> </div> </div>`

}

function downloadMedia(mediaID){
   
    var filename = `../media/${mediaID}.jpeg`;
              
    download(filename);

}

document.getElementsByTagName("media-vertical")[0].innerHTML = vertical_display;
document.getElementsByTagName("media-horizontal").innerHTML = horizontal_display;