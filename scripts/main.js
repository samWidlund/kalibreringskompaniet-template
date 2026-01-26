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

// contact form
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Tack för ditt meddelande! Vi återkommer snart.');

    // get form values
    const name = document.getElementById('name').value.trim();
    const company = document.getElementById('company').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // debug
    console.log(name)
    console.log(company)
    console.log(email)
    console.log(phone)
    console.log(message)

    this.reset();
});