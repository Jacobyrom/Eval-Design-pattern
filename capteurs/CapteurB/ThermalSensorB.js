class ThermalSensorB {
 constructor(position) {
    this.position = position;
    this.name = position.name || "ThermalSensorB";
    }
 scanHeatSignature() {
    return {
        sensor: this.name,
 } 
}}
module.exports = ThermalSensorB;
