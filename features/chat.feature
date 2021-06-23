Feature: MQTT.Cool 2 user chat feature

  Scenario: Chating made by 2 users
    Given both users connected to landing page
    And both users have sucessfully connected to chat server
    And both users see each other
    Then first user sends message
    And 2nd user recieves first message
    Then 2nd user sends message
    And first user recieves message
    Then both users disconnect