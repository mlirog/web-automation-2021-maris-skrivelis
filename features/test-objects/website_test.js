import {pages} from '../support/pages'

var test_user_1 = generateString(16)
var test_user_2 = generateString(16)

var test_msg_1 = generateString(32)
var test_msg_2 = generateString(32)

export class WebsiteTest {

    bothUsersOpenPage(){
        pages.user1.mqttPage.openPage()
        pages.user2.mqttPage.openPage()
    }

    bothUsersConnectServer(){

        pages.user1.mqttPage.getNickname().waitForEnabled()
        pages.user2.mqttPage.getNickname().waitForEnabled()

        pages.user1.mqttPage.removeBanner()
        pages.user2.mqttPage.removeBanner()

        pages.user1.mqttPage.getNickname().setValue(test_user_1)
        pages.user2.mqttPage.getNickname().setValue(test_user_2)

        pages.user1.mqttPage.getConnectButton().click()
        pages.user2.mqttPage.getConnectButton().click()

        pages.user1.mqttPage.getConnectMessage().waitForDisplayed()
        pages.user2.mqttPage.getConnectMessage().waitForDisplayed()
    }

    bothUsersVisible(){
        pages.user1.mqttPage.getUserByNickname(test_user_2).waitForDisplayed()
        pages.user2.mqttPage.getUserByNickname(test_user_1).waitForDisplayed()
    }

    SendFirstMessage(){
        pages.user1.mqttPage.getMessageInputField().setValue(test_msg_1)
        pages.user1.mqttPage.getReplyButton().click()
    }

    recieveFirstMessage(){
        pages.user2.mqttPage.getMessagByNickname(test_user_1,test_msg_1).waitForDisplayed()
    }

    sendSecondMessage(){
        pages.user2.mqttPage.getMessageInputField().setValue(test_msg_2)
        pages.user2.mqttPage.getReplyButton().click()
    }
    
    recieveSecondMessage(){
        pages.user1.mqttPage.getMessagByNickname(test_user_2,test_msg_2).waitForDisplayed()
    }
    
    disconnectUsers(){
        pages.user1.mqttPage.getDisconnectButton().click()
        pages.user1.mqttPage.getDisconnectMessage().waitForDisplayed()

        pages.user2.mqttPage.getDisconnectButton().click()
        pages.user2.mqttPage.getDisconnectMessage().waitForDisplayed()
    }

    
}

//copied from stack overflow
function generateString(length) {
    var result           = ''; //stores result
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; //chars used in generation
    var charactersLength = characters.length;

    //generates string
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    //returns generated string
    return result;
}