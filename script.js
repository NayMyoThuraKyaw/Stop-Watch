//
let watchFace = document.querySelector("#watchFace")
//
let startBtn = document.querySelector("#startBtn")
let stopBtn = document.querySelector("#stopBtn")
let restBtn = document.querySelector("#restId")
let flagBtn = document.querySelector("#flagId")
//
let flagDisplay = document.querySelector("#flagDisplay")

 //Global Varible

 let startInterval = ""

 let secondValue = ""
 let minuteValue = ""
 let hourValue = ""

 let watch = ""


        let hour = 0,
                minute = 0,
                        second = 0;
//

let start = () => {

        second +=1;

        if(second === 60){
                        minute +=1 
                        second = 0;            
                        }
        if(second < 10){
                        secondValue = "0" + second
                }else{
                        secondValue = second
                }
        
        if(minute === 60){
                        hour += 1 
                        minute = 0                                   
                        }
        if(minute < 10){
                        minuteValue = "0" + minute 
                }else{
                        minuteValue = minute
                }
        
        if(hour < 10){
                        hourValue = "0" + hour
                }else{
                        hourValue = hour
                }

        watch = hourValue + ":" + minuteValue + ":" + secondValue
         
        console.log(watch)
         
        watchFace.textContent = watch
      
 }
 //


let intervalStart = () => {

        console.log("Interval Started")
        startInterval = setInterval(start,1000);
} 
//

let intervalStop = () =>{
        clearInterval(startInterval);
        console.log("Interval Stoped")
}
//
let intervalRest = () => {
        console.log("Interval Rested")
        hour = 0
        minute = 0
        second = 0

        intervalStop()
       //
        if(second < 10){
                secondValue = "0" + second
        }else{
                secondValue = second
        }

        if(minute < 10){
                minuteValue = "0" + minute 
        }else{
                minuteValue = minute
        }

        if(hour < 10){
                hourValue = "0" + hour
        }else{
                hourValue = hour
        }
        //

        watch = hourValue + ":" + minuteValue + ":" + secondValue
         
        console.log(watch)
         
        watchFace.textContent = watch
}

let intervalFlag = () => {
        if(secondValue > 0){

                document.querySelector("#flagHeader").style.display = "block"

                let flagDisplayer = document.createElement ("li")
                flagDisplayer.setAttribute("id", "list")
                flagDisplayer.append(watch)
                flagDisplay.append(flagDisplayer)

                console.log("Flag at " + watch)
        }else{
                console.log("need To start")
        }
}




startBtn.addEventListener("click",intervalStart)

stopBtn.addEventListener("click",intervalStop)

restBtn.addEventListener("click",intervalRest)

flagBtn.addEventListener("click",intervalFlag)

