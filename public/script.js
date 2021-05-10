

var new_button = document.getElementById('videoButton');



function button_color() {
    var tshi =  1
}

function make_video() {

    var button = document.getElementById('videoButton');

    var text_item = document.getElementById('videoText');
    
    var video = document.createElement('div')
    video.id = "video"
    video.class = "embed-responsive embed-responsive-16by"

    var iframe = document.createElement('iframe');
    iframe.class ="embed-responsive-item"
    iframe.src = "./IE3Global.mp4"
    iframe.allowFullscreen;

    video.appendChild(iframe);
    button.remove();
    text_item.append(video);
    
}

new_button.addEventListener('click', function(){
    console.log('clicked')
    make_video();
});
