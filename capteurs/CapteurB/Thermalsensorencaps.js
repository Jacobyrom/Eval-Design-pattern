const ThermalSensorB = require('../ThermalSensorB');

class ThermalSensorBEncaps {
  constructor(position) {
    this.sensor = ThermalSensorB(position);
  }  
}
module.exports = ThermalSensorB;