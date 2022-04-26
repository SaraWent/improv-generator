var options = [
    instruments = ['ESX-1','MS2000','Voice','Violin'],
    keys = ['C Major','A minor','G Major','E minor','F Major','D minor','D Major','B minor','Bb Major','G minor','A Major','F# minor','Eb Major','C minor']
];
var videos = 20;

function makeUL(array) {
    // Create the list element:
    var list = document.createElement('ul');

    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}
function chooseInstruments(array) {
    let n = Math.floor(Math.random()*array.length) + 1;
    let random = array.sort(() => .5 - Math.random()).slice(0,n);

    // Create the list element:
    var list = document.createElement('ul');

    for(var i = 0; i < random.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(random[i]));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;

}
function chooseKey(array) {
    var text = document.createTextNode(array[Math.floor(Math.random()*array.length)]);
    return text;
}
function getColor() {
    var randomColor = Math.floor(Math.random() * 2 ** 24).toString(16).padStart(6, 0);
    return randomColor;
}
function getVideo(vid) {
    var videonum = Math.floor(Math.random()*vid);
    return videonum;
}

document.getElementById('instruments').appendChild(makeUL(options[0]));
document.getElementById('keys').appendChild(makeUL(options[1]));
document.getElementById('videos').innerHTML = videos;


document.getElementById("generate").onclick = function(){
    document.getElementById('mykey').innerHTML = "";
    document.getElementById('mykey').appendChild(chooseKey(options[1]));
    let mycolor = getColor();
    document.getElementById('mycolor').style.backgroundColor = "#" + mycolor;
    document.getElementById('myhex').innerHTML = "#" + mycolor;
    document.getElementById('myinstruments').innerHTML = "";
    document.getElementById('myinstruments').appendChild(chooseInstruments(options[0]));
    document.getElementById('myvideo').innerHTML = getVideo(videos);
    
};



