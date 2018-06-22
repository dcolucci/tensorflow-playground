const image = document.getElementById('messi');

posenet.load().then(function (net) {
  net.estimateSinglePose(image).then(function (poseData) {
    console.log('POSE DATA', poseData);
  });
});
