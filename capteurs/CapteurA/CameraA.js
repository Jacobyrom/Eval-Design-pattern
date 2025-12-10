CameraA
class CameraA {
 constructor(location) {
    this.location = location;
    this.type = "CameraA";
 } 
 detect() {
    return `Alerte de ${this.type} dans la pièce ${this.location}`;
 } 
}
module.exports = CameraA;

