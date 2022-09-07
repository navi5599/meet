Feature: Specify Number of Events 

Scenario: When user hasn’t specified a number, 32 is the default number. 
Given User opened App
When User did not specify the number 
Then default amount of events will be 32. 

Scenario: User can change the number of events they want to see. 
Given User opened App, 
When User type in the number of events he want to see . 
Then User will get as much events as he searched for.