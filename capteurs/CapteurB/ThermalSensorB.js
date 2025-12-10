ThermalSensorB
class ThermalSensorB {
 constructor(position) {
    this.position = position;
    this.name = position.name || "ThermalSensorB";
    }
 scanHeatSignature() {} // Déclenche une donnée complexe json, voir ci dessous
}
