//callback hell
function getAgentNumber(callback){
     setTimeout(() => {
          let agentNo = "007";
          callback(agentNo)
     }, 800);
}
function getMissionFile(agentNo,callback){
     setTimeout(() => {
          let file = "Dark Night"
          callback(file)
     }, 700);
}
function getLocation(agentNo,file,callback){
     setTimeout(() => {
          let location = "33.7744° N, 84.3442° W"
          callback(location)
     }, 600);
}
function getEquipment(agentNo,file,location,callback){
     setTimeout(() => {
          let equipment = "Silent pistol & Night Vision"
          callback(equipment)
     }, 500);
}
function getAtackNo(agentNo,file,location,equipment,callback){
     setTimeout(() => {
          let atackNo = "ECHO-9"
          callback(atackNo)
     }, 400);
}
function lastPermission(agentNo,file,location,equipment,atackNo,callback){
     setTimeout(() => {
          takenPermision = "Taken"
          console.log("Copy that, mission started")
          callback(takenPermision)
     }, 300);
}

getAgentNumber((incomingAgent)=>{
     getMissionFile(incomingAgent,(incomingFile)=>{
          getLocation(incomingAgent,incomingFile,(incomingLocation)=>{
               getEquipment(incomingAgent,incomingFile,incomingLocation,(incomingEquipment)=>{
                    getAtackNo(incomingAgent,incomingFile,incomingLocation,incomingEquipment,(incomingAtackNo)=>{
                         lastPermission(incomingAgent,incomingFile,incomingLocation,incomingEquipment,incomingAtackNo,(permision)=>{
                              console.log(`                                   Agent: ${incomingAgent}
                                   File: ${incomingFile}
                                   Location: ${incomingLocation}
                                   Equipments: ${incomingEquipment}
                                   Atack No: ${incomingAtackNo}
                                   Permission: ${permision}`)
                         })
                    })
               })
          })
     })
})