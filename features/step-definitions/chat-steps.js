import {Given,When,Then} from '@cucumber/cucumber';
import {tests} from '../support/tests'


Given("both users connected to landing page", function() {
    tests.WebsiteTest.bothUsersOpenPage()
})

When("both users have sucessfully connected to chat server", function(){
    tests.WebsiteTest.bothUsersConnectServer()
})

When("both users see each other", function(){
    tests.WebsiteTest.bothUsersVisible()
})

When("first user sends message", function(){
    tests.WebsiteTest.SendFirstMessage()
})

When("2nd user recieves first message", function(){
    tests.WebsiteTest.recieveFirstMessage()
})

When("2nd user sends message", function(){
    tests.WebsiteTest.sendSecondMessage()
})

Then("first user recieves message", function(){
    tests.WebsiteTest.recieveSecondMessage()
})

When("both users disconnect", function(){
    tests.WebsiteTest.disconnectUsers()
})