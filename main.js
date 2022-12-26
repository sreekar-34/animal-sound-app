//https://teachablemachine.withgoogle.com/models/xsXbeonwW/

function startClassifictaion() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/xsXbeonwW/model.json',modelReady);
}
function modelReady() {
    classifier.classify(gotResult);
}