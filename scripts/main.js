// handle video play speed
let videoSpeed = 0.7; 
let landscapeVideo = document.querySelector('.landscape-video');
let portraitVideo = document.querySelector('.portrait-video');

landscapeVideo.defaultPlaybackRate = videoSpeed;
landscapeVideo.playbackRate = videoSpeed;
landscapeVideo.load();

portraitVideo.defaultPlaybackRate = videoSpeed;
portraitVideo.playbackRate = videoSpeed;
portraitVideo.load();