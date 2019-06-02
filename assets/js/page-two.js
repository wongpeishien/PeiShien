$(document).ready(function() {
  initializePlayer();
});

var source, context, analyser;

function initializePlayer() {
  var audio = new Audio();
  audio.src = "https://static.bandlab.com/soundbanks/previews/synth-organ.ogg";
  audio.controls = true;
  audio.loop = true;
  audio.autoplay = false;

  document.getElementById("player-box").appendChild(audio);
  context = new webkitAudioContext(); 
  analyser = context.createAnalyser(); 
  source = context.createMediaElementSource(audio);
  source.connect(analyser);
  analyser.connect(context.destination);
}
