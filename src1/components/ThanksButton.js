import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
function thanksHandler()
{
  return(alert("Thanks for ordering.Enjoy your delicious desserts!")
  )
}
function ThanksButton()
{
  const ele =(
    <div>
      <button onClick={thanksHandler}>Place order</button>
      </div>);    
 return ele;
}


export default ThanksButton;