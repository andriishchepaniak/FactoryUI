import React from "react";

const CarWarehouse = (props) => {
  var cars = props.warehouseCars.map((car, index) => {
    return (
      <div className="card border-primary mt-3">
        <div className="card-body">
          <h6 className="card-title">Car {props.carIcon} {car.id}</h6>
          <p className="card-text">{props.engineIcon} {car.engine.id}</p>
          <p className="card-text">{props.accIcon} {car.accessories.id}</p>
          <p className="card-text">{props.bodyIcon} {car.body.id}</p>
        </div>
      </div>
    );
  });

  var queue = props.carWarehouseQueue.map(dealerId => {
    return (
      <div className="card border-primary mt-3">
        <div className="card-body">
          <p className="card-text">Dealer {dealerId}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="card scrollWareHouase border-primary mt-3">
      <div class="card-header">{props.warehouseCarsNumbers} / 5</div>
      <div className="card-body">
        <h5 className="card-title">Cars warehouse</h5>
        <div className="row">
          <div className="col">
            <h5 className="card-title">Cars</h5>
            {cars}
          </div>
          <div className="col">
            <h5 className="card-title">Dealers queue</h5>
            {queue}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarWarehouse;
