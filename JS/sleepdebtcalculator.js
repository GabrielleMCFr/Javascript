const getSleepHours = day => {
    day = day.toLowerCase();
    switch (day) {
      case "monday":
        return 5;
      case "tuesday":
        return 6;
      case "wednesday":
        return 6;
      case "thursday":
        return 7;
      case "friday":
        return 5;
      case "saturday":
        return 7;
      case "sunday":
        return 7;
    }
  }
  
  const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  const getIdealSleepHours = (hours) => {
    return hours * 7;
  }
  
  const calculateSleepDebt = () => {
    actualSleepHours = getActualSleepHours();
    idealSleepHours = getIdealSleepHours(8);
    sleepDebt = idealSleepHours - actualSleepHours;
    overSleep = actualSleepHours - idealSleepHours;
  
    if (actualSleepHours === idealSleepHours) {
      console.log("You sleep the perfect amount, lazy fucker.")
    }
  
    else if (actualSleepHours < idealSleepHours) {
      console.log(`You're a normal person, and therefore you survive on coffee. Sleep debt : ${sleepDebt} hours.`)
    }
  
    else {
      console.log(`ARE YOU SERIOUS ? What are you doing all day, sit on your ass ? Over sleep: ${overSleep} hours.`)
    }
  }
  
  calculateSleepDebt();