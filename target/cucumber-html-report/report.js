$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("InvalidLogin.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Login funcationality for store.demoqa.com",
  "description": "I want to use this template for my feature file",
  "id": "login-funcationality-for-store.demoqa.com",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 25,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "login-funcationality-for-store.demoqa.com;title-of-your-scenario-outline",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "User is on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "user naviagtes to LoginPage",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User enters  \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Message displayed login successfull",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "login-funcationality-for-store.demoqa.com;title-of-your-scenario-outline;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 32,
      "id": "login-funcationality-for-store.demoqa.com;title-of-your-scenario-outline;;1"
    },
    {
      "cells": [
        "testuser_1",
        "Test@153"
      ],
      "line": 33,
      "id": "login-funcationality-for-store.demoqa.com;title-of-your-scenario-outline;;2"
    },
    {
      "cells": [
        "testuser_2",
        "Test@153"
      ],
      "line": 34,
      "id": "login-funcationality-for-store.demoqa.com;title-of-your-scenario-outline;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 33,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "login-funcationality-for-store.demoqa.com;title-of-your-scenario-outline;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 24,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "User is on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "user naviagtes to LoginPage",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User enters  \"testuser_1\" and \"Test@153\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Message displayed login successfull",
  "keyword": "Then "
});
formatter.match({
  "location": "InvalidLoginStepDef.user_is_on_the_homepage()"
});
formatter.result({
  "duration": 13747740165,
  "status": "passed"
});
formatter.match({
  "location": "InvalidLoginStepDef.user_naviagtes_to_LoginPage()"
});
formatter.result({
  "duration": 1929891250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testuser_1",
      "offset": 14
    },
    {
      "val": "Test@153",
      "offset": 31
    }
  ],
  "location": "InvalidLoginStepDef.user_enters_UserName_and_Passowrd(String,String)"
});
formatter.result({
  "duration": 371893663,
  "status": "passed"
});
formatter.match({
  "location": "InvalidLoginStepDef.message_displayed_login_successfull()"
});
formatter.result({
  "duration": 2090759421,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "login-funcationality-for-store.demoqa.com;title-of-your-scenario-outline;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 24,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "User is on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "user naviagtes to LoginPage",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User enters  \"testuser_2\" and \"Test@153\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Message displayed login successfull",
  "keyword": "Then "
});
formatter.match({
  "location": "InvalidLoginStepDef.user_is_on_the_homepage()"
});
formatter.result({
  "duration": 9127585345,
  "status": "passed"
});
formatter.match({
  "location": "InvalidLoginStepDef.user_naviagtes_to_LoginPage()"
});
formatter.result({
  "duration": 2309012859,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testuser_2",
      "offset": 14
    },
    {
      "val": "Test@153",
      "offset": 31
    }
  ],
  "location": "InvalidLoginStepDef.user_enters_UserName_and_Passowrd(String,String)"
});
formatter.result({
  "duration": 282180105,
  "status": "passed"
});
formatter.match({
  "location": "InvalidLoginStepDef.message_displayed_login_successfull()"
});
formatter.result({
  "duration": 44590201,
  "status": "passed"
});
formatter.uri("ValidLogin.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Login funcationality for FreeCRM",
  "description": "",
  "id": "login-funcationality-for-freecrm",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 23,
  "name": "Login to FreeCRM with valid credentials",
  "description": "",
  "id": "login-funcationality-for-freecrm;login-to-freecrm-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Open Chrome and load page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I enter valid username and password",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidLoginStepDef.open_Chrome_and_load_page()"
});
formatter.result({
  "duration": 7358553805,
  "status": "passed"
});
formatter.match({
  "location": "ValidLoginStepDef.i_enter_valid_username_and_password()"
});
formatter.result({
  "duration": 182973741,
  "status": "passed"
});
formatter.match({
  "location": "ValidLoginStepDef.click_on_Login_button()"
});
formatter.result({
  "duration": 9240891106,
  "status": "passed"
});
formatter.match({
  "location": "ValidLoginStepDef.user_should_login_successfully()"
});
formatter.result({
  "duration": 66753599,
  "status": "passed"
});
});