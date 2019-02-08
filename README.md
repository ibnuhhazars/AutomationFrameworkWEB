# Answers

1. Tell us what kind of test should be conduct (plan and why) to make sure the page is ok
  * Unit Test : Make sure the unit component, method, class working as expected we want and valid or invalid input test.
  * API Test : Make sure integration data is working and true parameterize, if this apps using Microservice architecture it’s         so important.
  * GUI Test : checking the screen validation , verify all navigation, check usability condition, verify data integrity and etc.
  * Performance Test : I want to know , how many transaction this app can handle transaction per hour and understand the upper limits of capacity within the system , so that we know what we should be improve. in this page i think we dont need performance test because it's not transactional page.
  
2. Tell us what kind of testcase you want to execute.
Feature: TestCafe Feedback
As a user,  I want to give feedback to TestCafe, so they will know my feedback 

	Scenario: user input with valid data
		Given I open browser with url “https://devexpress.github.io/testcafe/example/“
		Then i enter name as “Ibnuh hazar” in “developer-name”
		And i checklist important feature as “Support for testing on remote device” in “remote-testing”
		And i chose primary operating system as “MacOS” in “macos”
		And i select as TestCafe interface “Command Line” in “preferred-interface”
		And i checklist “I have tried TestCafe” in “tried-test-cafe”
		And i give rate as “3” in “slider”
		And i enter comments as “Hello Bizzy” in “comments”
		And I click “submit-button”
		Then I verify “article-header” is “Thank you, Ibnuh hazar!”
    
	Scenario: user input without username 
		Given I open browser with url “https://devexpress.github.io/testcafe/example/“
		Then i checklist important feature as “Support for testing on remote device” in “remote-testing”
		And i chose primary operating system as “Linux” in “linux”
		And i select as TestCafe interface “Both” in “preferred-interface”
		And i checklist “I have tried TestCafe” in “tried-test-cafe”
		And i give rate as “3” in “slider”
		And i enter comments as “Hello Bizzy” in “comments”
		Then i verify “submit-button” is not clickable 
    
3. We all know automation can help, show us your test-automation code to test it (Impress us by not using Katalon :)..
  i have to create sample AutomationFrameworkWEBUI with BDD concept and customize re-usable method, im using Java,cucumber,junit,maven,and selenium, you can  pull my workspace in this repository, the name is "TestCafe" 
  For running this Framework im using : 
  * macOS Majove version 10.14
  * IDE Eclipse Oxygen.3a Release (4.7.3a)
  * Apache Maven 3.5.4
  * Java jdk1.8.0_181
  * Safari browser Version 12.0 (14606.1.36.1.9)
  For more detail "https://www.linkedin.com/in/ibnuh-hazar-54971493/detail/treasury/position:523558886/?entityUrn=urn%3Ali%3Afs_treasuryMedia%3A(ACoAABPccwkBAAd-QDpsE8UNcD6S2ZmAbSd9Fwc%2C1545022875814)&section=position%3A523558886&treasuryCount=1"
  
4. 
