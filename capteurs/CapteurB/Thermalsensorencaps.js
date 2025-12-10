const ThermalSensorB = require('../ThermalSensorB');

class ThermalSensorBEncaps {
  constructor(position) {
    this.sensor = new ThermalSensorB(position);
  }
}
module.exports = ThermalSensorB;