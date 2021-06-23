import {MqttPage} from '../pageobjects/mqttPage'

class Pages {
    constructor() {
        this.user1 = {
            mqttPage: new MqttPage('user1')
        }
        this.user2 = {
            mqttPage: new MqttPage('user2')
        }
    }
}

const pages = new Pages()
export {pages}