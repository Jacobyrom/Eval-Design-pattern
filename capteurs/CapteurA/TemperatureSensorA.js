TemperatureSensorA
class TemperatureSensorA {
 constructor(location, threshold) {
    this.location = location;
    this.threshold = threshold;
    this.type = "TemperatureSensorA";
 }
 detect() {
    return `Alerte de ${this.type} dans la pièce ${this.location} avec une température de ${this.threshold}`;
 }
}
module.exports = TemperatureSensorA;