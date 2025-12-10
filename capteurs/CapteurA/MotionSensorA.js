MotionSensorA
class MotionSensorA {
 constructor(location) {
    this.location = location;
    this.type = "MotionSensorA";
 }
 detect() {
    return `Alerte de ${this.type} dans la pièce ${this.location}`;
 } 
 }
module.exports = MotionSensorA;

