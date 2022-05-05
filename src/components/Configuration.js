import React from "react";

const Configuration = (props) => {

  const handleEngineCreatorsCountChange = (event) => {
      console.log(event.target.value);
      props.setConfiguration({
          ...props.configuration,
          engineCreatorsCount: event.target.value !== "" ? parseInt(event.target.value) : 0
      });
      console.log(props.configuration);
  }

  const handleBodyCreatorsCountChange = (event) => {
    props.setConfiguration({
        ...props.configuration,
        bodyCreatorsCount: event.target.value !== "" ? parseInt(event.target.value) : 0
    });
  }

  const handleAccCreatorsCountChange = (event) => {
    props.setConfiguration({
        ...props.configuration,
        accessoriesCreatorsCount: event.target.value !== "" ? parseInt(event.target.value) : 0
    });
  }

  const handleCarFactoryCountChange = (event) => {
    props.setConfiguration({
        ...props.configuration,
        carFactoryCount: event.target.value !== "" ? parseInt(event.target.value) : 0
    });
  }

  const handleDealersCountChange = (event) => {
    props.setConfiguration({
        ...props.configuration,
        dealersCount: event.target.value !== "" ? parseInt(event.target.value) : 0
    });
  }

  const handleEngineWarehouseCapacityChange = (event) => {
    props.setConfiguration({
        ...props.configuration,
        engineWarehouseCapacity: event.target.value !== "" ? parseInt(event.target.value) : 0
    });
  }

  const handleBodyWarehouseCapacityChange = (event) => {
    props.setConfiguration({
        ...props.configuration,
        bodyWarehouseCapacity: event.target.value !== "" ? parseInt(event.target.value) : 0
    });
  }

  const handleAccessoriesWarehouseCapacityChange = (event) => {
    props.setConfiguration({
        ...props.configuration,
        accessoriesWarehouseCapacity: event.target.value !== "" ? parseInt(event.target.value) : 0
    });
  }

  const handleCarWarehouseCapacityChange = (event) => {
    props.setConfiguration({
        ...props.configuration,
        carWarehouseCapacity: event.target.value !== "" ? parseInt(event.target.value) : 0
    });
  }

  const configureClick = () => {
      props.configureInputData(props.configuration);
  }

  return (
    <form class="row g-3 mt-3">
      <div class="col-auto">
        <label htmlFor="staticEmail2" class="visually">
          Engine Creators Count
        </label>
        <input
          type="text"
          class="form-control"
          id="staticEmail2"
          value={props.configuration.engineCreatorsCount}
          onChange={handleEngineCreatorsCountChange}
        />
      </div>
      <div class="col-auto">
        <label htmlFor="staticEmail2" class="visually">
          Body Creators Count
        </label>
        <input
          type="text"
          class="form-control"
          id="staticEmail2"
          value={props.configuration.bodyCreatorsCount}
          onChange={handleBodyCreatorsCountChange}
        />
      </div>
      <div class="col-auto">
        <label htmlFor="staticEmail2" class="visually">
          Accessories Creators Count
        </label>
        <input
          type="text"
          class="form-control"
          id="staticEmail2"
          value={props.configuration.accessoriesCreatorsCount}
          onChange={handleAccCreatorsCountChange}
        />
      </div>
      <div class="col-auto">
        <label htmlFor="staticEmail2" class="visually">
          Car Factory Count
        </label>
        <input
          type="text"
          class="form-control"
          id="staticEmail2"
          value={props.configuration.carFactoryCount}
          onChange={handleCarFactoryCountChange}
        />
      </div>
      <div class="col-auto">
        <label htmlFor="staticEmail2" class="visually">
          Dealers Count
        </label>
        <input
          type="text"
          class="form-control"
          id="staticEmail2"
          value={props.configuration.dealersCount}
          onChange={handleDealersCountChange}
        />
      </div>
      <div class="col-auto">
        <label htmlFor="staticEmail2" class="visually">
          Engine Warehouse Capacity
        </label>
        <input
          type="text"
          class="form-control"
          id="staticEmail2"
          value={props.configuration.engineWarehouseCapacity}
          onChange={handleEngineWarehouseCapacityChange}
        />
      </div>
      <div class="col-auto">
        <label htmlFor="staticEmail2" class="visually">
          Body Warehouse Capacity
        </label>
        <input
          type="text"
          class="form-control"
          id="staticEmail2"
          value={props.configuration.bodyWarehouseCapacity}
          onChange={handleBodyWarehouseCapacityChange}
        />
      </div>
      <div class="col-auto">
        <label htmlFor="staticEmail2" class="visually">
          Accessories Warehouse Capacity
        </label>
        <input
          type="text"
          class="form-control"
          id="staticEmail2"
          value={props.configuration.accessoriesWarehouseCapacity}
          onChange={handleAccessoriesWarehouseCapacityChange}
        />
      </div>
      <div class="col-auto">
        <label htmlFor="staticEmail2" class="visually">
          Car Warehouse Capacity
        </label>
        <input
          type="text"
          class="form-control"
          id="staticEmail2"
          value={props.configuration.carWarehouseCapacity}
          onChange={handleCarWarehouseCapacityChange}
        />
      </div>
      <div class="col-auto">
        <div style={{height: 24 + 'px'}}>
        </div>
        <button onClick={configureClick} class="btn btn-outline-danger" type="button">
          Run
        </button>
      </div>
    </form>
  );
};

export default Configuration;
