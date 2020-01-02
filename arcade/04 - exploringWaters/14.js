function alternatingSums(a) {

  teamSwitch = true
  let team1 = 0
  let team2 = 0
  
  for(let i=0; i<a.length; i++){
    if(teamSwitch){
      team1 += a[i]
    } else {
      team2 += a[i]      
    }
    
    teamSwitch = !teamSwitch
  }
  
  return [team1, team2]
}
