Feature: Show/Hide Details of an Event 

Scenario: An event element is collapsed by default. 
Given User has opened app 
When the user views the featured city 
Then the current events from that city will be collapsed/hidden from the user 

Scenario: User can expand an event to see its details. 
Given User searched for City,and now has option to see details for an specific event 
When User clicks on expand button 
Then User will be able to see all the details for that specific event 

Scenario: User can collapse an event to hide its details. 
Given User expanded event view 
When User clicks to close the event 
Then Details will be hidden