class Discord {
    constructor (compte) {
        this.compte = compte;
    }

     send(message) {
        console.log(`Sending message to ${this.address}: ${message}`);
    }
}
module.exports = Discord;