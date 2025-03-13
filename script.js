let sentenceBtn = document.getElementById("Sentence-btn");
let lowerBtn = document.getElementById("lower-btn");
let upperBtn = document.getElementById("UPPER-btn");
let capitalizeBtn = document.getElementById("Capitalized-btn");
let alternatingBtn = document.getElementById("aLtErNaTiNg-btn");
let inverseBtn = document.getElementById("InVeRsE-btn");
let downloadBtn = document.getElementById("Download-btn");
let copyBtn = document.getElementById("Copy-btn");
let clearBtn = document.getElementById("Clear-btn");


let wourdCounter = document.getElementById("Word-counter")

// textarea input
let textAreaInput = document.getElementById("textArea");

// sentenceBtn
sentenceBtn.addEventListener("click", ()=>{
    let textArea = textAreaInput.value
    textArea = textArea.toLowerCase();
    textArea = textArea.split(". ");

    for(let i=0; i<textArea.length; i++){
        if (textArea[i].length > 0){
            textArea[i] = textArea[i][0].toUpperCase() + textArea[i].slice(1)
        }
    }
    textArea = textArea.join(". ")
    textAreaInput.value = textArea;
});

// lowerBtn
lowerBtn.addEventListener("click", ()=>{
    let textArea = textAreaInput.value
        if (textArea.length > 0){ textArea = textArea.toLowerCase();
            textArea = textArea.toLowerCase();
        }
     textAreaInput.value = textArea;
});

// upperBtn
upperBtn.addEventListener("click", ()=>{
    let textArea = textAreaInput.value
    textArea = textArea.toLowerCase();
        if (textArea.length > 0){
            textArea = textArea.toUpperCase();
        }
     textAreaInput.value = textArea;
});

// capitalizeBtn
capitalizeBtn.addEventListener("click", ()=>{
    let textArea = textAreaInput.value
    textArea = textArea.toLowerCase();
    textArea = textArea.split(" ");
    for(let i=0; i<textArea.length; i++){
        if (textArea.length > 0){
            textArea[i] = textArea[i][0].toUpperCase() + textArea[i].slice(1)
        }
    }
     textArea = textArea.join(" ")
     textAreaInput.value = textArea;
});

// alternatingBtn
alternatingBtn.addEventListener("click", ()=>{
    let textArea = textAreaInput.value
    textArea = textArea.toLowerCase();
    textArea = textArea.split("");
    for(let i=0; i<textArea.length; i++){
        if (textArea.length > 0){
           if(i%2 !=0){
            textArea[i] = textArea[i].toUpperCase()
            
           }
        }
    }
    textArea = textArea.join("")
    // console.log(textArea);
    
     textAreaInput.value = textArea;
});

// inverseBtn
alternatingBtn.addEventListener("click", ()=>{
    let textArea = textAreaInput.value
    textArea = textArea.toLowerCase();
    textArea = textArea.split("");
    for(let i=0; i<textArea.length; i++){
        if (textArea.length > 0){
           if(i%2 ==0){
            textArea[i] = textArea[i].toUpperCase()
           }
        }
    }
    textArea = textArea.join("")
     textAreaInput.value = textArea;
});

// downloadBtn
downloadBtn.addEventListener("click", ()=>{
    let textArea = textAreaInput.value
    let link = document.createElement("a");
    link.href = "data:text/plain;charset=utf-8," + encodeURIComponent(textArea);
    link.download = "textFile.txt";
   let confermation = confirm("Are you Sure you want to Download text!")
    if(confermation){
        link.click()
    }
});

// copyBtn
copyBtn.addEventListener("click", ()=>{
    let textArea = textAreaInput.value
    if(textArea.length > 0){
        navigator.clipboard.writeText(textArea);
        alert("Copy successfuly!")
    }
});

// clearBtn
clearBtn.addEventListener("click", ()=>{
    let textArea = textAreaInput.value
    if(textArea.length > 0){
      textArea = "";
    }
    textAreaInput.value = textArea;
});
// for counting of words char and line
let characterCounter = document.getElementById("character-counter");
let wordCounter = document.getElementById("Word-counter");
let sentenceCounter = document.getElementById("Sentence-counter");
let lineCounter = document.getElementById("Line-counter");

// character Counter
textAreaInput.addEventListener('keyup',()=>{
    let text = textAreaInput.value.trim();
    let characters  = text.split("").length;
    if(characters !== 0){
        characterCounter.textContent = characters;
    }
    else{
        characterCounter.textContent = 0;
    }
})
// wordCounter Counter
textAreaInput.addEventListener('keyup', () => {
    let text = textAreaInput.value.trim();
    let words = text.split(" ").filter(word => word !== "").length; // Ignore empty strings

    if (words !== 0) {
        wordCounter.textContent = words;
    } else {
        wordCounter.textContent = 0;
    }
});
// sentenceCounter
textAreaInput.addEventListener('keyup',()=>{
    let text = textAreaInput.value.trim();
    let sentences = text.split(". ").filter(word => word !== "").length;
if(sentences !== 0){
    sentenceCounter.textContent = sentences;
}
else{
    sentenceCounter.textContent = 0;
}
})
// lineCounter


