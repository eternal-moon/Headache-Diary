import React from "react";
import {
  triggerList,
  locationList,
  outdoorsList,
  painList,
  tempList,
  medList,
} from "../Firebase/fire.js";
import "../styles/insights.css";


function Insights() {
  //Temperature
  var sum = 0;
  var averageTemp;

  for (let i = 0; i < tempList.length; i++) {
    sum += Number(tempList[i]);
    console.log(i, tempList[i], sum);
    averageTemp = Math.round(sum / tempList.length);
    console.log(averageTemp);
  }

  

//Trigger
  var mf = 1;
  var m = 0;
  var item;
  for (var i=0; i<triggerList.length; i++)
  {
          for (var j=i; j<triggerList.length; j++)
          {
                  if (triggerList[i] == triggerList[j])
                   m++;
                  if (mf<m)
                  {
                    mf=m; 
                    item = triggerList[i];
                  }
          }
          m=0;
  }

  const percentTrigger = Math.round((mf / triggerList.length *100));

//Pain
var sumPain = 0;
var averagePain;
console.log(painList)

for (let i = 0; i < painList.length; i++) {
  sumPain += Number(painList[i]);
  console.log(i, painList[i], sumPain);
  averagePain = Math.round(sumPain / painList.length);
  console.log(averagePain);
}


//outdoors
var mfo = 1;
  var mo = 0;
  var itemo;
  for (var i=0; i<outdoorsList.length; i++)
  {
          for (var j=i; j<outdoorsList.length; j++)
          {
                  if (outdoorsList[i] == outdoorsList[j])
                   mo++;
                  if (mfo<mo)
                  {
                    mfo=mo; 
                    itemo = outdoorsList[i];
                  }
          }
          mo=0;
  }

  const percentOutdoor = Math.round((mfo / outdoorsList.length *100));
  console.log(itemo, mfo)


  //medicine

  var mfm = 1;
  var mm = 0;
  var itemm;
  for (var i=0; i<medList.length; i++)
  {
          for (var j=i; j<medList.length; j++)
          {
                  if (medList[i] == medList[j])
                   mm++;
                  if (mfm<mm)
                  {
                    mfm=mm; 
                    itemm = medList[i];
                  }
          }
          mm=0;
  }

  const percentMedicine = 100- Math.round((mfm / medList.length *100));
  console.log(medList)
  console.log(itemm, mfm)



  return (
    <div className=" insights-wrapper container-fluid">
      <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
      <div className="col-lg-6 offset-lg-3 col-12 mt-5 ml-2 mr-2 ">
        <div>
          <div className="card border-dark mb-3 maincard" >
            <div class="card-header">Featured</div>
            <ul class="list-group">
              <div className="card"><li class="list-group-item"> <p className="textbox">The average temp at which you get headache is {averageTemp}</p></li></div>
              <div className="card"><li class="list-group-item"><p className="textbox">{item} triggers you {percentTrigger}% of the times.</p></li> </div>
              <div className="card"><li class="list-group-item"><p className="textbox">Your average pain level is {averageTemp}</p></li> </div>
              <div className="card"><li class="list-group-item"><p className="textbox">You get headaches {percentOutdoor}% of the times you go outdoors.</p></li></div>
              <div className="card"><li class="list-group-item"><p className="textbox">You have to take medicines {percentMedicine} % of the times.</p></li></div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Insights;

{
  /* <div className="col-11 col-lg-9 tempavg">
            <p className="textbox">
              The average temp at which you get headache is {averageTemp}
            </p>
          </div>
          <div className="col-11 offset-1 col-lg-9 offset-lg-3 alsoavg">
            <p className="textbox">
              The average temp at which you get headache is {averageTemp}
            </p>
          </div>
          <div className="col-11 col-lg-9 tempavg">
            <p className="textbox">
              The average temp at which you get headache is {averageTemp}
            </p>
          </div>
          <div className="col-11 offset-1 col-lg-9 offset-lg-3 alsoavg">
            <p className="textbox">
              The average temp at which you get headache is {averageTemp}
            </p>
          </div>
          <div className="col-11 col-lg-9 tempavg">
            <p className="textbox">
              The average temp at which you get headache is {averageTemp}
            </p>
          </div> */
}
