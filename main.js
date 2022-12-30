//https://teachablemachine.withgoogle.com/models/xsXbeonwW/

function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/xsXbeonwW/model.json',modelReady);
}
function modelReady() {
    classifier.classify(gotResult);
}
function gotResults(error,results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        r=Math.floor(Math.random() * 255) + 1;
        g=Math.floor(Math.random() * 255) + 1;
        b=Math.floor(Math.random() * 255) + 1;
        document.getElementById("result_label").innerHTML = 'I can hear -'+results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+(results[0].confidence*100).toFixed(2)+'%';
        document.getElementById("result_label").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("result_confidence").style.color="rgb("+r+","+g+","+b+")";
    
    
        img1 = document.getElementById("");
        img2 = document.getElementById("");
        img3 = document.getElementById("");
        img4 = document.getElementById("");
        img5 = document.getElementById("");
    
        if(results[0].label=="Barking"){
        img1.src="dgn.gif";
        }else if(results[0].label=="Meowing"){
        img2.src="ctn.gif";
        }else if(results[0].label=="Mooing"){
        img3.src="con.gif";
        }else if (results[0].label=="Roaring"){
        img4.src="lin.gif";
        }
        else{
        img5.src="bgn.gif";
        }
    }
    }