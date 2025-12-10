class Camera {

    constructor() {
        if (!Camera.instance) {
            Camera.instance = [this];
        } else if (Camera.instance.length < 4) {
            Camera.instance.push(this);
        }
        return Camera.instance;
    }
}