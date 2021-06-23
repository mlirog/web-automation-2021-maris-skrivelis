import {Page} from "../pageobjects/basePage"

export class MqttPage extends Page {
    openPage() {
        this.browser.url('https://demos.mqtt.cool/chat/')
        this.browser.pause(1000)
    }

    getNickname(){
        return this.browser.$('#user')
    }

    getConnectButton(){
        return this.browser.$('#connectBtn')
    }

    getDisconnectButton(){
        return this.browser.$('#disconnectBtn')
    }

    getUserByNickname(nickname){
        return this.browser.$('li=' + nickname)
    }

    getMessagByNickname(nickname, message){
        return this.browser.$('div='+nickname+': '+ message)
    }

    getDisconnectMessage(){
        return this.browser.$('div=Connection to tcp://broker.mqtt.cool:1883 lost')
    }

    getConnectMessage(){
        return this.browser.$('div=Connected to the MQTT broker at tcp://broker.mqtt.cool:1883')
    }

    getMessageInputField(){
        return this.browser.$('#sendMessage')
    }

    getReplyButton(){
        return this.browser.$('#replyBtn')
    }

    //has to remove banner in page
    //otherwise its over disconnect button
    //and test fails
    removeBanner(){
        this.browser.execute(() => {
            const elemToRemove = document.querySelector('img[alt="Fork me on GitHub"]');
            elemToRemove.remove();
        });
    }
}