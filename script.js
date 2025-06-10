var videoSrc = 'https://vodcinevs.com/series/241327.mp4';



var video = document.getElementById('video');
if (videoSrc.includes('mp4')){
    video.src = videoSrc;
}
else{
    if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource(videoSrc);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
        video.play();
    });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = videoSrc;
    video.addEventListener('loadedmetadata', function () {
        video.play();
    });
    }
}