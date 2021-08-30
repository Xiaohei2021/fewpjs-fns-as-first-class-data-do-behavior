/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
const morning = 12;
const afternoon = 17;

const g1 = "Good Morning";
const g2 = "Good Afternoon";
const g3 = "Good Evening";

function greet(user_time) 
{
  let hh = user_time.split(':')
  let hour = parseInt(hh[0])

  if (hour < morning) 
  {
    return g1;
  }

  else if (hour >= morning && hour <= afternoon) 
  {
    return g2;
  }

  else 
  {
    return g3;
  }
  
}

/* Write your implementation of displayMessage() */
function displayMessage(msg)
{
  document.getElementById("greeting").innerText = msg;
}