const note1 = document.getElementById("note1");
const note2 = document.getElementById("note2");
const note3 = document.getElementById("note3");
const content = document.getElementById("content");
const calculation = document.getElementById("calculation");
const consult = document.getElementById("consult")

calculation.addEventListener("click",notes)
consult.addEventListener("click",consultNotes)

function notes() {
    let data1 = Number (note1.value);
    let data2 = Number (note2.value);
    let data3 = Number (note3.value);
    let data4 = (data1*0.3) + (data2*0.3) + (data3*0.4)/3

    if (data1 <= 0 || data1 > 5 ) {
        if (data2 <= 0 || data2 > 5) {
            if (data3 <= 0 || data3 > 5) {
                content.innerHTML = "Note 3 is not valid"
            }
            content.innerHTML = "Note 2 is not valid"
        }
        content.innerHTML = "Note 1 is not valid"
    } else if (data4 <= 2.0) {
        content.innerHTML = "<b>Final note: </b>" + data4 + ". You have failed the subject."
    } else if (data4 >= 2.1 && data4 <= 3.4) {
        content.innerHTML = "<b>Final note: </b>" + data4 + ". You have failed the subject, but you have the opportunity to recover."
    } else if (data4 >= 3.5 && data4 <= 4.5) {
        content.innerHTML = "<b>Final note: </b>" + data4 + ". You have satisfactorily passed the subject."
    } else if (data4 >= 4.6 && data4 <= 5.0) {
        content.innerHTML = "<b>Final note: </b>" + data4 + ". You have passed the subject. You will be recognized as an honors learner."
    }    
} 

function consultNotes() {
    let data1 = Number (note1.value);
    let data2 = Number (note2.value);
    let datas = (data1 * 0.3) + (data2 * 0.3)
    let equivalent1 = (2.1-datas) / 0.40
    let equivalent2 = (3.4-datas) / 0.40
    let equivalent3 = (5.0-datas) / 0.40
   
    content.innerHTML = "The student needs: " + equivalent1 + " to recover" + "</br>" +
    "The student needs: " + equivalent2 + " to win with the minimum" + "</br>" +
    "The student needs:" + equivalent3 + " to win with honors" + "</br>"
}