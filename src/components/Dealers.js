import React, { useEffect } from "react";
import { useState } from "react";

const Dealers = (props) => {
  var [dealersRequestTime, setdealersRequestTime] = useState([]);

  

  const handleDealerRequestTime = (e, index) => {
    setdealersRequestTime(prevState => {
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
    console.log(dealersRequestTime);
    props.configureRequestTime(index, dealersRequestTime[index]);
  }

  useEffect(() => {
    if(props.val){
      var arr = []
      props.dealers.forEach(element => {
        arr.push(5);
      });
      setdealersRequestTime(arr)
      props.setVal(false)
  }
  }, [props.dealers])
  
  var dealers = props.dealers.map((dealer, index) => {
    return (
      <div className="card scroll border-primary mt-3">
        <div className="card-body">
          <h6 className="card-title">
            {props.dealerIcon} {dealer.id} {index + 1}
          </h6>
          <input 
            type="range" 
            value={dealersRequestTime[index]} 
            onChange={(e) => handleDealerRequestTime(e, index)} 
            class="form-range" 
            min="2" 
            max="20" 
            step="1" 
            id="customRange3">
            </input>
            <p className="card-text">{dealersRequestTime[index]}</p>
          {dealer.cars.map((car) => {
            return (
              <div className="card border-primary mt-3">
                <div className="card-body">
                  <h6 className="card-title">
                    {props.carIcon} {car.id}
                  </h6>
                  <p className="card-text">
                    {props.engineIcon} {car.engine.id}
                  </p>
                  <p className="card-text">
                    {props.accIcon} {car.accessories.id}
                  </p>
                  <p className="card-text">
                    {props.bodyIcon} {car.body.id}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  });

  return (
    <div className="card scrollDealers border-primary mt-3">
      <div class="card-header">Dealers</div>
      <div className="card-body">{dealers}</div>
    </div>
  );
};

export default Dealers;
