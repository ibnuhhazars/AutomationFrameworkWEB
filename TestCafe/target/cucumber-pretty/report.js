$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feedback.feature");
formatter.feature({
  "line": 2,
  "name": "TestCafe Feedback",
  "description": "As a user,  I want to give feedback to TestCafe, so they will know my feedback",
  "id": "testcafe-feedback",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@feedback"
    }
  ]
});
formatter.before({
  "duration": 110691,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "user input with valid data",
  "description": "",
  "id": "testcafe-feedback;user-input-with-valid-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "i open browser with url \"https://devexpress.github.io/testcafe/example/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "i enter name as \"Ibnuh hazar\" in \"developer-name\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "i checklist important feature as Support for testing on remote device in \"remote-testing\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "i chose primary operating system as MacOS in \"macos\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "i select as TestCafe interface \"JavaScript API\" in \"preferred-interface\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "i checklist as I have tried TestCafe in \"tried-test-cafe\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "i give rate as \"3\" in \"slider\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "i enter comments as \"Hello Bizzy\" in \"comments\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click \"submit-button\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify \"article-header\" is \"Thank you, Ibnuh hazar!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://devexpress.github.io/testcafe/example/",
      "offset": 25
    }
  ],
  "location": "StepDefinition.openApps(String)"
});
formatter.result({
  "duration": 3315934756,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ibnuh hazar",
      "offset": 17
    },
    {
      "val": "developer-name",
      "offset": 34
    }
  ],
  "location": "StepDefinition.setTextby(String,String)"
});
formatter.result({
  "duration": 343174627,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "remote-testing",
      "offset": 74
    }
  ],
  "location": "StepDefinition.checkElement(String)"
});
formatter.result({
  "duration": 27319512,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "macos",
      "offset": 46
    }
  ],
  "location": "StepDefinition.radioElement(String)"
});
formatter.result({
  "duration": 73649650,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JavaScript API",
      "offset": 32
    },
    {
      "val": "preferred-interface",
      "offset": 52
    }
  ],
  "location": "StepDefinition.dropdownElement(String,String)"
});
formatter.result({
  "duration": 1068621928,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tried-test-cafe",
      "offset": 41
    }
  ],
  "location": "StepDefinition.checkElement(String)"
});
formatter.result({
  "duration": 33303792,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    },
    {
      "val": "slider",
      "offset": 23
    }
  ],
  "location": "StepDefinition.i_give_rate_as_in_slider(String,String)"
});
formatter.result({
  "duration": 536417405,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello Bizzy",
      "offset": 21
    },
    {
      "val": "comments",
      "offset": 38
    }
  ],
  "location": "StepDefinition.setTextby(String,String)"
});
formatter.result({
  "duration": 241178187,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submit-button",
      "offset": 9
    }
  ],
  "location": "StepDefinition.click(String)"
});
formatter.result({
  "duration": 42212105,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "article-header",
      "offset": 10
    },
    {
      "val": "Thank you, Ibnuh hazar!",
      "offset": 30
    }
  ],
  "location": "StepDefinition.verifyLabel(String,String)"
});
formatter.result({
  "duration": 3656540286,
  "status": "passed"
});
formatter.write("Scenario Pass");
formatter.after({
  "duration": 2193736101,
  "status": "passed"
});
formatter.before({
  "duration": 36339,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "user input without username",
  "description": "",
  "id": "testcafe-feedback;user-input-without-username",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "i open browser with url \"https://devexpress.github.io/testcafe/example/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "i checklist important feature as Support for testing on remote device in \"remote-testing\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "i chose primary operating system as Linux in \"linux\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "i select as TestCafe interface \"Both\" in \"preferred-interface\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "i checklist as I have tried TestCafe in \"tried-test-cafe\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "i give rate as \"9\" in \"slider\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "i enter comments as \"Hello Bizzy\" in \"comments\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "i verify \"submit-button\" is not clickable",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://devexpress.github.io/testcafe/example/",
      "offset": 25
    }
  ],
  "location": "StepDefinition.openApps(String)"
});
formatter.result({
  "duration": 1660125526,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "remote-testing",
      "offset": 74
    }
  ],
  "location": "StepDefinition.checkElement(String)"
});
formatter.result({
  "duration": 132016864,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "linux",
      "offset": 46
    }
  ],
  "location": "StepDefinition.radioElement(String)"
});
formatter.result({
  "duration": 108850996,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Both",
      "offset": 32
    },
    {
      "val": "preferred-interface",
      "offset": 42
    }
  ],
  "location": "StepDefinition.dropdownElement(String,String)"
});
formatter.result({
  "duration": 1068454320,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tried-test-cafe",
      "offset": 41
    }
  ],
  "location": "StepDefinition.checkElement(String)"
});
formatter.result({
  "duration": 39366304,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 16
    },
    {
      "val": "slider",
      "offset": 23
    }
  ],
  "location": "StepDefinition.i_give_rate_as_in_slider(String,String)"
});
formatter.result({
  "duration": 529239224,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello Bizzy",
      "offset": 21
    },
    {
      "val": "comments",
      "offset": 38
    }
  ],
  "location": "StepDefinition.setTextby(String,String)"
});
formatter.result({
  "duration": 294442415,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submit-button",
      "offset": 10
    }
  ],
  "location": "StepDefinition.verifyClickable(String)"
});
formatter.result({
  "duration": 13580141,
  "status": "passed"
});
formatter.write("Scenario Pass");
formatter.after({
  "duration": 2205869836,
  "status": "passed"
});
});