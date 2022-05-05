import "./App.css";
import React, { useEffect, useState } from "react";
import { workerService } from "./services/workerService";
import PartFactory from "./components/PartFactory";
import PartWarehouse from "./components/PartWarehouse";
import CarWarehouse from "./components/CarWarehouse";
import { SiCoronaengine } from "react-icons/si";
import { IoCarSportOutline } from "react-icons/io5";
import { GiCarWheel } from "react-icons/gi";
import { IoCarSport } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa";
import Dealers from "./components/Dealers";
import { configureService } from "./services/configureService";
import Configuration from "./components/Configuration";

function App() {
  var [state, setState] = useState(null);

  var [configuration, setConfiguration] = useState(null);

  useEffect(() => {
    configureService.getConfiguration().then((response) => {
      console.log(response);
      setConfiguration(response.data);
    });
  }, []);

  
  useEffect(() => {
    if(state !== null)
      setTimeout(() => {
        getState();
      }, 200)
  }, [state]);

  const getState = () => {
    workerService.getState().then((response) => {
      console.log(response.data);
      setState(response.data);
    });
  };

  const run = () => {
    workerService.run().then((response) => {
      if (response.status === 200) {
        getState()
        console.log("Run");
      }
    });
  };

  const configureEnginesCreatesTime = (id, time) => {
    configureService.configureEnginesCreateTime(id, time).then((response) => {
      console.log("CreateTime changed");
      console.log(response);
    });
  };

  const configureAccessoriesCreatesTime = (id, time) => {
    configureService
      .configureAccessoriesCreateTime(id, time)
      .then((response) => {
        console.log("CreateTime changed");
        console.log(response);
      });
  };

  const configureBodiesCreatesTime = (id, time) => {
    configureService.configureBodiesCreateTime(id, time).then((response) => {
      console.log("CreateTime changed");
      console.log(response);
    });
  };

  const configureCarFactoriesCreatesTime = (id, time) => {
    configureService
      .configureCarFactoriesCreateTime(id, time)
      .then((response) => {
        console.log("CreateTime changed");
        console.log(response);
      });
  };

  const configureDealersRequestTime = (id, time) => {
    configureService.configureDealersRequestTime(id, time).then((response) => {
      console.log("CreateTime changed");
      console.log(response);
    });
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row mt-3 justify-content-center">
          <div className="col">
            <button className="btn btn-outline-danger" onClick={() => run()}>
              Run
            </button>
            {configuration !== null ? (
              <Configuration
                configuration={configuration}
                setConfiguration={setConfiguration}
                configureInputData={configureService.configureInputData}
              />
            ) : (
              <div>Loading</div>
            )}
          </div>
        </div>
      </div>

      {state !== null ? (
        <div className="container">
          <div className="row">
            <div className="col">
              <PartFactory
                configureTime={configureEnginesCreatesTime}
                partIcon={<SiCoronaengine size={30} />}
                partName="Engines"
                partCreatedNumbers={state.engineCreatedNumbers}
                partCreatorsWorkStates={state.engineCreatorsWorkStates}
              />

              <PartFactory
                configureTime={configureAccessoriesCreatesTime}
                partIcon={<GiCarWheel size={30} />}
                partName="Acc-s"
                partCreatedNumbers={state.accessoriesCreatedNumbers}
                partCreatorsWorkStates={state.accessoriesCreatorsWorkStates}
              />

              <PartFactory
                configureTime={configureBodiesCreatesTime}
                partIcon={<IoCarSportOutline size={30} />}
                partName="Bodies"
                partCreatedNumbers={state.bodyCreatedNumbers}
                partCreatorsWorkStates={state.bodyCreatorsWorkStates}
              />
            </div>
            <div className="col">
              <PartWarehouse
                capacity={configuration.engineWarehouseCapacity}
                partIcon={<SiCoronaengine size={30} />}
                partName="Engines"
                warehouseNumbers={state.warehouseEnginesNumbers}
                warehousePart={state.warehouseEngines}
                warehouseQueue={state.engineWarehouseQueue}
              />

              <PartWarehouse
                capacity={configuration.accessoriesWarehouseCapacity}
                partIcon={<GiCarWheel size={30} />}
                partName="Acc-s"
                warehouseNumbers={state.warehouseAccessoriesNumbers}
                warehousePart={state.warehouseAccessories}
                warehouseQueue={state.accessoriesWarehouseQueue}
              />

              <PartWarehouse
                capacity={configuration.bodyWarehouseCapacity}
                partIcon={<IoCarSportOutline size={30} />}
                partName="Bodies"
                warehouseNumbers={state.warehouseBodiesNumbers}
                warehousePart={state.warehouseBodies}
                warehouseQueue={state.bodyWarehouseQueue}
              />
            </div>
            <div className="col">
              <PartFactory
                configureTime={configureCarFactoriesCreatesTime}
                partIcon={<IoCarSport size={30} />}
                partName="Cars"
                partCreatedNumbers={state.carBuiltNumbers}
                partCreatorsWorkStates={state.carBuilderWorkStates}
              />

              <CarWarehouse
                capacity={configuration.carWarehouseCapacity}
                carIcon={<IoCarSport size={35} />}
                engineIcon={<SiCoronaengine size={30} />}
                accIcon={<GiCarWheel size={30} />}
                bodyIcon={<IoCarSportOutline size={30} />}
                warehouseCars={state.warehouseCars}
                carWarehouseQueue={state.carWarehouseQueue}
                warehouseCarsNumbers={state.warehouseCarsNumbers}
              />
            </div>
            <div className="col">
              <Dealers
                configureRequestTime={configureDealersRequestTime}
                dealerIcon={<FaUserTie size={40} />}
                carIcon={<IoCarSport size={40} />}
                engineIcon={<SiCoronaengine size={30} />}
                accIcon={<GiCarWheel size={30} />}
                bodyIcon={<IoCarSportOutline size={30} />}
                dealers={state.dealers}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>Please, click get state</div>
      )}
    </div>
  );
}

export default App;
