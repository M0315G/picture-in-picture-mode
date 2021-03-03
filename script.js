const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const videoElement = document.getElementById('video');

// Prompt the user to select a media stream i.e. a window and passes it to the video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // Catching erros
        console.log("Error ocured", error);
    }
}

button1.addEventListener('click', async () => {
    // Disable Button
    button1.disable = true;

    // Start Picture in Picture

    await videoElement.requestPictureInPicture();

    // Reset the button
    button1.disable = false;
});

button2.addEventListener('click', async () => {
    button2.disable = true;
    selectMediaStream();
    button2.disable = false;
});

