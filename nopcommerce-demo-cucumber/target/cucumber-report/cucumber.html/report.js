$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computer.feature");
formatter.feature({
  "line": 1,
  "name": "Computer Test",
  "description": "As user I want to explore Computer page of nop commerce website",
  "id": "computer-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6771589200,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "verify User Should Navigate To Computer Page Successfully",
  "description": "",
  "id": "computer-test;verify-user-should-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to computer page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 150603001,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 994301700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldNavigateToComputerPageSuccessfully()"
});
formatter.result({
  "duration": 49664701,
  "status": "passed"
});
formatter.after({
  "duration": 902334000,
  "status": "passed"
});
formatter.before({
  "duration": 2686805500,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "verify User Should Navigate To Desktops Page Successfully",
  "description": "",
  "id": "computer-test;verify-user-should-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@sanity"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should navigate to Desktops Page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 59200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 893055800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 714652700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldNavigateToDesktopsPageSuccessfully()"
});
formatter.result({
  "duration": 40147500,
  "status": "passed"
});
formatter.after({
  "duration": 1056186500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "verify That User Should Build Your Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "computer-test;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on product name Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select processor \"\u003cprocessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select ram \"\u003cram\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select hdd \"\u003chdd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select OS \"\u003cos\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select Software \"\u003csoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should see product has been added to your shopping cart confirmation message",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "computer-test;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;",
  "rows": [
    {
      "cells": [
        "processor",
        "ram",
        "hdd",
        "os",
        "software"
      ],
      "line": 32,
      "id": "computer-test;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 33,
      "id": "computer-test;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 34,
      "id": "computer-test;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "VistaHome [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 35,
      "id": "computer-test;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3473108801,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "verify That User Should Build Your Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "computer-test;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on product name Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select processor \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select ram \"2 GB\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select hdd \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select OS \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select Software \"Microsoft Office [+$50.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should see product has been added to your shopping cart confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 30800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 809444600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 732178600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnProductNameBuildYourOwnComputer()"
});
formatter.result({
  "duration": 1185160699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 108407500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRam(String)"
});
formatter.result({
  "duration": 163628499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectHdd(String)"
});
formatter.result({
  "duration": 155130999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 156292000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 175728500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 126114900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldSeeProductHasBeenAddedToYourShoppingCartConfirmationMessage()"
});
formatter.result({
  "duration": 916008500,
  "status": "passed"
});
formatter.after({
  "duration": 942632301,
  "status": "passed"
});
formatter.before({
  "duration": 3547955300,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "verify That User Should Build Your Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "computer-test;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on product name Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select ram \"4GB [+$20.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select hdd \"400 GB [+$100.00]\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select OS \"Vista Premium [+$60.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select Software \"Acrobat Reader [+$10.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should see product has been added to your shopping cart confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 31801,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 787594100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 707219900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnProductNameBuildYourOwnComputer()"
});
formatter.result({
  "duration": 1307671601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 68859700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRam(String)"
});
formatter.result({
  "duration": 98732500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectHdd(String)"
});
formatter.result({
  "duration": 180318901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 195994000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 191729900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 155454100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldSeeProductHasBeenAddedToYourShoppingCartConfirmationMessage()"
});
formatter.result({
  "duration": 920228701,
  "status": "passed"
});
formatter.after({
  "duration": 932574499,
  "status": "passed"
});
formatter.before({
  "duration": 3767309300,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "verify That User Should Build Your Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "computer-test;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on product name Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select ram \"8GB [+$60.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select hdd \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select OS \"VistaHome [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select Software \"Total Commander [+$5.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should see product has been added to your shopping cart confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 26400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 1010319600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 589794101,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnProductNameBuildYourOwnComputer()"
});
formatter.result({
  "duration": 1300608001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 59958300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRam(String)"
});
formatter.result({
  "duration": 86924500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectHdd(String)"
});
formatter.result({
  "duration": 151370700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VistaHome [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 97472400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 131104301,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 127914499,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldSeeProductHasBeenAddedToYourShoppingCartConfirmationMessage()"
});
formatter.result({
  "duration": 949082099,
  "status": "passed"
});
formatter.after({
  "duration": 949977300,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As user I want to login into nop commerce website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3411122500,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 74299,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 703877300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 81706601,
  "status": "passed"
});
formatter.after({
  "duration": 881056199,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@sanity"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "errorMessage"
      ],
      "line": 19,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "abcd123@gmail.com",
        "xyz123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 20,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "xyz123@gmail.com",
        "abc123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 21,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "adfafasd@gmail.com",
        "xyz123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 22,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3608048899,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    },
    {
      "line": 10,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter email \"abcd123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"xyz123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 30400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 666546100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 171131800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 99658000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 551640500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 32
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 89678101,
  "status": "passed"
});
formatter.after({
  "duration": 931713700,
  "status": "passed"
});
formatter.before({
  "duration": 3861871801,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    },
    {
      "line": 10,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter email \"xyz123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 36200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 657644601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 169100000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 108134599,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 558508699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 32
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 78520900,
  "status": "passed"
});
formatter.after({
  "duration": 819226501,
  "status": "passed"
});
formatter.before({
  "duration": 3481191999,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    },
    {
      "line": 10,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter email \"adfafasd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"xyz123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 48500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 645644100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adfafasd@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 151439601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 118450000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 585009900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 32
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 78594099,
  "status": "passed"
});
formatter.after({
  "duration": 917607400,
  "status": "passed"
});
formatter.before({
  "duration": 2700031800,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "login-test;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@sanity"
    },
    {
      "line": 24,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I enter email \"abc123@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter password \"Abcd1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I should see logout link is display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 35001,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 660079700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 140771300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abcd1234",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 102467401,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 856020300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldSeeLogoutLinkIsDisplay()"
});
formatter.result({
  "duration": 41145900,
  "status": "passed"
});
formatter.after({
  "duration": 831866600,
  "status": "passed"
});
formatter.before({
  "duration": 3424234000,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "User should logout successfully",
  "description": "",
  "id": "login-test;user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I enter email \"abc123@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter password \"Abcd1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on logout link",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I should see login link is display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 168500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 669666400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 134104800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abcd1234",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 120920101,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 827821799,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLogoutLink()"
});
formatter.result({
  "duration": 849147400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldSeeLoginLinkIsDisplay()"
});
formatter.result({
  "duration": 32907500,
  "status": "passed"
});
formatter.after({
  "duration": 884410100,
  "status": "passed"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 1,
  "name": "Register Test",
  "description": "As user I want to register to nop commerce website",
  "id": "register-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3531010600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "verify user should navigate to register page successfully",
  "description": "",
  "id": "register-test;verify-user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to register page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 45700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 807790200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldNavigateToRegisterPageSuccessfully()"
});
formatter.result({
  "duration": 42757600,
  "status": "passed"
});
formatter.after({
  "duration": 925280000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "verify that firstname lastname email password and confirm password fields are mandatory",
  "description": "",
  "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@sanity"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the error message \"\u003cerrorMessage\u003e\" for fieldName \"\u003cfieldName\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;",
  "rows": [
    {
      "cells": [
        "fieldName",
        "errorMessage"
      ],
      "line": 18,
      "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;1"
    },
    {
      "cells": [
        "FirstName",
        "First name is required."
      ],
      "line": 19,
      "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;2"
    },
    {
      "cells": [
        "LastName",
        "Last name is required."
      ],
      "line": 20,
      "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;3"
    },
    {
      "cells": [
        "Email",
        "Email is required."
      ],
      "line": 21,
      "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;4"
    },
    {
      "cells": [
        "Password",
        "Password is required."
      ],
      "line": 22,
      "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;5"
    },
    {
      "cells": [
        "ConfirmPassword",
        "Password is required."
      ],
      "line": 23,
      "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3048590000,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "verify that firstname lastname email password and confirm password fields are mandatory",
  "description": "",
  "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    },
    {
      "line": 10,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the error message \"First name is required.\" for fieldName \"FirstName\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 34500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 816386600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 138545500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 32
    },
    {
      "val": "FirstName",
      "offset": 72
    }
  ],
  "location": "RegisterSteps.iShouldSeeTheErrorMessageForFieldName(String,String)"
});
formatter.result({
  "duration": 168812300,
  "status": "passed"
});
formatter.after({
  "duration": 919176500,
  "status": "passed"
});
formatter.before({
  "duration": 3465749600,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "verify that firstname lastname email password and confirm password fields are mandatory",
  "description": "",
  "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    },
    {
      "line": 10,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the error message \"Last name is required.\" for fieldName \"LastName\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 29500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1070580400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 147208700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last name is required.",
      "offset": 32
    },
    {
      "val": "LastName",
      "offset": 71
    }
  ],
  "location": "RegisterSteps.iShouldSeeTheErrorMessageForFieldName(String,String)"
});
formatter.result({
  "duration": 113131599,
  "status": "passed"
});
formatter.after({
  "duration": 846762000,
  "status": "passed"
});
formatter.before({
  "duration": 3144698300,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "verify that firstname lastname email password and confirm password fields are mandatory",
  "description": "",
  "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    },
    {
      "line": 10,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the error message \"Email is required.\" for fieldName \"Email\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 34000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1048662900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 154902800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is required.",
      "offset": 32
    },
    {
      "val": "Email",
      "offset": 67
    }
  ],
  "location": "RegisterSteps.iShouldSeeTheErrorMessageForFieldName(String,String)"
});
formatter.result({
  "duration": 209162601,
  "status": "passed"
});
formatter.after({
  "duration": 1066070901,
  "status": "passed"
});
formatter.before({
  "duration": 4537270400,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "verify that firstname lastname email password and confirm password fields are mandatory",
  "description": "",
  "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    },
    {
      "line": 10,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the error message \"Password is required.\" for fieldName \"Password\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 610000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1263722900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 204908099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 32
    },
    {
      "val": "Password",
      "offset": 70
    }
  ],
  "location": "RegisterSteps.iShouldSeeTheErrorMessageForFieldName(String,String)"
});
formatter.result({
  "duration": 324285100,
  "status": "passed"
});
formatter.after({
  "duration": 1053298601,
  "status": "passed"
});
formatter.before({
  "duration": 3276224900,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "verify that firstname lastname email password and confirm password fields are mandatory",
  "description": "",
  "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    },
    {
      "line": 10,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the error message \"Password is required.\" for fieldName \"ConfirmPassword\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 43400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 983237800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 159561700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 32
    },
    {
      "val": "ConfirmPassword",
      "offset": 70
    }
  ],
  "location": "RegisterSteps.iShouldSeeTheErrorMessageForFieldName(String,String)"
});
formatter.result({
  "duration": 281718400,
  "status": "passed"
});
formatter.after({
  "duration": 997757100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "verify that user should create account successfully",
  "description": "",
  "id": "register-test;verify-that-user-should-create-account-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I select gender\"\u003cgender\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter firstname \"\u003cfirstName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter lastname \"\u003clastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select date of birth  \"\u003cday\u003e\"\"\u003cmonth\u003e\"\"\u003cyear\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter random email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter confirm password \"\u003cconfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should see registration confirmation message",
  "keyword": "Then "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "register-test;verify-that-user-should-create-account-successfully;",
  "rows": [
    {
      "cells": [
        "gender",
        "firstName",
        "lastName",
        "day",
        "month",
        "year",
        "password",
        "confirmPassword"
      ],
      "line": 40,
      "id": "register-test;verify-that-user-should-create-account-successfully;;1"
    },
    {
      "cells": [
        "Female",
        "blue",
        "ocean",
        "22",
        "February",
        "1980",
        "Abcd1234",
        "Abcd1234"
      ],
      "line": 41,
      "id": "register-test;verify-that-user-should-create-account-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3204395999,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "verify that user should create account successfully",
  "description": "",
  "id": "register-test;verify-that-user-should-create-account-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I select gender\"Female\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter firstname \"blue\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter lastname \"ocean\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select date of birth  \"22\"\"February\"\"1980\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter random email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter password \"Abcd1234\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter confirm password \"Abcd1234\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should see registration confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 38300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 954482900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Female",
      "offset": 16
    }
  ],
  "location": "RegisterSteps.iSelectGender(String)"
});
formatter.result({
  "duration": 102908200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "blue",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.iEnterFirstname(String)"
});
formatter.result({
  "duration": 163529901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ocean",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.iEnterLastname(String)"
});
formatter.result({
  "duration": 183949801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22",
      "offset": 25
    },
    {
      "val": "February",
      "offset": 29
    },
    {
      "val": "1980",
      "offset": 39
    }
  ],
  "location": "RegisterSteps.iSelectDateOfBirth(String,String,String)"
});
formatter.result({
  "duration": 509702700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cemail\u003e",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.iEnterRandomEmail(String)"
});
formatter.result({
  "duration": 233417700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abcd1234",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 178540100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abcd1234",
      "offset": 26
    }
  ],
  "location": "RegisterSteps.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 183478300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 934848400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldSeeRegistrationConfirmationMessage()"
});
formatter.result({
  "duration": 46712099,
  "status": "passed"
});
formatter.after({
  "duration": 994650500,
  "status": "passed"
});
});