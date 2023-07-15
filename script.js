// Create the fact list for the fact generator
var factList = [
    "93,000 people died from overdose in 2020 - almost a 30% increase from the previous year (CNN)", 
    "Around 80% of people in federal prison and 60% of people in state prison for drug offenses are Black or Latino (Drug Policy Alliance)",
    "1 in 5 prisoners are incarcerated for drug offenses (Drug Policy Alliance)",
    "In 2019, 1,351,533 of the 1,558,862 drug-related arrests were simply for personal possession (Drug Policy Alliance)",
    "Around 73% of opioid overdose deaths involve synthetic opioids (primarily fentanyl) (CDC)",
    "99% of US prisons do not provide methadone or buprenorphine, which are important medications for addiction treatment (they combat withdrawal symptoms) (Drug Policy Alliance)",
    "It is estimated that the US government spends up to $47 billion per year enforcing drug prohibition (Drug Policy Alliance)"
    ];
  
  // Define variables for the button, output, and number of clicks to use for the fact generator
  var fact = document.getElementById("fact");
  var factBtn = document.getElementById("factBtn");
  var count = 0;
  
  // If button is clicked, call function
  if (factBtn) {
    factBtn.addEventListener("click", displayFact);
  }
  
  // Display fact whose index corresponds with the number of button clicks
  function displayFact() {
    fact.innerHTML = factList[count];
    count++;
    if (count == factList.length) {
      count = 0;
    }
  }