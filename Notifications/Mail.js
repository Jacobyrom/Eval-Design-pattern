class Mail {
    constructor(address) {
        this.address = address;
    }

    send(message) {
        console.log(`Sending mail to ${this.address}: ${message}`);
    }
}