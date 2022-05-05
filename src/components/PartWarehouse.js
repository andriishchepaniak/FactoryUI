import React from "react";

const PartWarehouse = (props) => {
  var parts = props.warehousePart.map((part, index) => {
    return (
      <div className="card border-primary mt-3">
        <div className="card-body">
          <p className="card-text">
            {props.partIcon} {part.id}
          </p>
        </div>
      </div>
    );
  });

  var queue = props.warehouseQueue.map((carFactoryNumber) => {
    return (
      <div className="card border-primary mt-3">
        <div className="card-body">
          <p className="card-text">Car factory number {carFactoryNumber + 1}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="card scrollWareHouase border-primary mt-3">
      <div class="card-header">{props.warehouseNumbers} / {props.capacity}</div>
      <div className="card-body">
        <h5 className="card-title">{props.partName} warehouse</h5>
        <div className="row">
          <div className="col">
            <h5 className="card-title">{props.partName}</h5>
            {parts}
          </div>
          <div className="col">
            <h5 className="card-title">{props.partName} queue</h5>
            {queue}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartWarehouse;
