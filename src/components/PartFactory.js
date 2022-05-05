import React, { useEffect, useState } from "react";

const PartFactory = (props) => {
  
  var [val, setVal] = useState(true);
  var [partCreateTimes, setPartCreateTimes] = useState([]);
  
  


  const handleChangePartCreateTime = (e, index) => {
    setPartCreateTimes(prevState => {
      var newState = [];
      for (let i = 0; i < prevState.length; i++) {
        if(index === i){
          newState.push(parseInt(e.target.value));
        }
        else{
          newState.push(prevState[i]);
        }
      }
      return newState;
    })
    console.log(partCreateTimes);
    props.configureTime(index, partCreateTimes[index]);
  }

  var partsCreators = props.partCreatedNumbers.map((number, index) => {
    var className = props.partCreatorsWorkStates[index] === 0 
        ? "card text-white bg-warning mb-3 mt-3"
        : "card text-white bg-danger mb-3 mt-3";
    return (
      <div className={className}>
        <div className="card-body">
          <h5 className="card-title">{props.partName} Factory {index + 1}</h5>
          <p className="card-text">
          {props.partName} {props.partIcon} numbers {number}
          </p>
          <input 
            type="range" 
            value={partCreateTimes[index]} 
            onChange={(e) => handleChangePartCreateTime(e, index)} 
            class="form-range" 
            min="2" 
            max="20" 
            step="1" 
            id="customRange3">
            </input>
            <p className="card-text">{partCreateTimes[index]}</p>
        </div>
      </div>
    );
  });

  useEffect(() => {
    var arr = []
    props.partCreatedNumbers.forEach(element => {
      arr.push(5);
    });

    setPartCreateTimes(arr);
  }, [])

  return (
    <div className="card scrollWareHouase border-primary mt-3">
      <div className="card-body">
        <h5 className="card-title">{props.partName}</h5>
        {partsCreators}
      </div>
    </div>
  );
};

export default PartFactory;
