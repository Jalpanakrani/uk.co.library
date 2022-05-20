$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("jobsearchtest.feature");
formatter.feature({
  "line": 1,
  "name": "Job Search Test",
  "description": "\nAs user I want to test search functionality",
  "id": "job-search-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Verify job search result using different dataset",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-dataset",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am in homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"\u003cjobTitle\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter Location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select distance \"\u003cdistance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search options link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter salaryMin \"\u003csalaryMin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salaryMax \"\u003csalaryMax\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salaryType \"\u003csalaryType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select jobType \"\u003cjobType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find Jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I verify the result \"\u003cresult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-dataset;",
  "rows": [
    {
      "cells": [
        "jobTitle",
        "location",
        "distance",
        "salaryMin",
        "salaryMax",
        "salaryType",
        "jobType",
        "result"
      ],
      "line": 19,
      "id": "job-search-test;verify-job-search-result-using-different-dataset;;1"
    },
    {
      "cells": [
        "Tester",
        "Harrow",
        "up to 5 miles",
        "3000",
        "5000",
        "annum",
        "Permanent",
        "Permanent Tester jobs in Harrow on the Hill"
      ],
      "line": 20,
      "id": "job-search-test;verify-job-search-result-using-different-dataset;;2"
    },
    {
      "cells": [
        "Plumber",
        "London",
        "up to 15 miles",
        "4000",
        "5000",
        "month",
        "Contract",
        "Contract Plumber jobs in London"
      ],
      "line": 21,
      "id": "job-search-test;verify-job-search-result-using-different-dataset;;3"
    },
    {
      "cells": [
        "Cook",
        "Birmingham",
        "up to 5 miles",
        "30000",
        "45000",
        "annum",
        "Part Time",
        "Part Time Cook jobs in Birmingham"
      ],
      "line": 22,
      "id": "job-search-test;verify-job-search-result-using-different-dataset;;4"
    },
    {
      "cells": [
        "architect",
        "Chester",
        "up to 10 miles",
        "500",
        "1000",
        "week",
        "Temporary",
        "Temporary Architect jobs in Chester"
      ],
      "line": 23,
      "id": "job-search-test;verify-job-search-result-using-different-dataset;;5"
    },
    {
      "cells": [
        "Software Development Manager",
        "Coventry",
        "up to 5 miles",
        "400",
        "600",
        "day",
        "Apprenticeship",
        "Apprenticeship Software Development Manager jobs in Coventry"
      ],
      "line": 24,
      "id": "job-search-test;verify-job-search-result-using-different-dataset;;6"
    },
    {
      "cells": [
        "photographer",
        "Durham",
        "up to 10 miles",
        "50000",
        "60500",
        "annum",
        "Permanent",
        "Permanent Photographer jobs in Durham"
      ],
      "line": 25,
      "id": "job-search-test;verify-job-search-result-using-different-dataset;;7"
    },
    {
      "cells": [
        "Salespersons",
        "Ely",
        "up to 5 miles",
        "30000",
        "40000",
        "annum",
        "Contract",
        "Contract Salespersons jobs in Ely"
      ],
      "line": 26,
      "id": "job-search-test;verify-job-search-result-using-different-dataset;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4486528700,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify job search result using different dataset",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-dataset;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am in homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter Location \"Harrow\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select distance \"up to 5 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search options link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter salaryMin \"3000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salaryMax \"5000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salaryType \"annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select jobType \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find Jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I verify the result \"Permanent Tester jobs in Harrow on the Hill\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTestSteps.iAmInHomepage()"
});
formatter.result({
  "duration": 339675000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 19
    }
  ],
  "location": "JobSearchTestSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 20452415900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow",
      "offset": 18
    }
  ],
  "location": "JobSearchTestSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 316305800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 5 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchTestSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 128714300,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 2176907100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3000",
      "offset": 19
    }
  ],
  "location": "JobSearchTestSteps.iEnterSalaryMin(String)"
});
formatter.result({
  "duration": 163948300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5000",
      "offset": 19
    }
  ],
  "location": "JobSearchTestSteps.iEnterSalaryMax(String)"
});
formatter.result({
  "duration": 86171900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "annum",
      "offset": 21
    }
  ],
  "location": "JobSearchTestSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 68214300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 18
    }
  ],
  "location": "JobSearchTestSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 20072359300,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate option with value: Permanent\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-09BGILIP\u0027, ip: \u0027192.168.0.19\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.findOptionsByValue(Select.java:287)\r\n\tat org.openqa.selenium.support.ui.Select.selectByValue(Select.java:190)\r\n\tat uk.co.library.utility.Utility.selectByValueFromDropDown(Utility.java:168)\r\n\tat uk.co.library.pages.HomePage.selectSalaryType(HomePage.java:81)\r\n\tat uk.co.library.steps.JobSearchTestSteps.iSelectJobType(JobSearchTestSteps.java:55)\r\n\tat ✽.And I select jobType \"Permanent\"(jobsearchtest.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Tester jobs in Harrow on the Hill",
      "offset": 21
    }
  ],
  "location": "JobSearchTestSteps.iVerifyTheResult(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 904797200,
  "status": "passed"
});
formatter.before({
  "duration": 2785440500,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify job search result using different dataset",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-dataset;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am in homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"Plumber\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter Location \"London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select distance \"up to 15 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search options link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter salaryMin \"4000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salaryMax \"5000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salaryType \"month\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select jobType \"Contract\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find Jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I verify the result \"Contract Plumber jobs in London\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTestSteps.iAmInHomepage()"
});
formatter.result({
  "duration": 26700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Plumber",
      "offset": 19
    }
  ],
  "location": "JobSearchTestSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 20400484900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 18
    }
  ],
  "location": "JobSearchTestSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 289441300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 15 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchTestSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 72294800,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 2142099800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4000",
      "offset": 19
    }
  ],
  "location": "JobSearchTestSteps.iEnterSalaryMin(String)"
});
formatter.result({
  "duration": 160328300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5000",
      "offset": 19
    }
  ],
  "location": "JobSearchTestSteps.iEnterSalaryMax(String)"
});
formatter.result({
  "duration": 89990000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "month",
      "offset": 21
    }
  ],
  "location": "JobSearchTestSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 101637400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract",
      "offset": 18
    }
  ],
  "location": "JobSearchTestSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 20042655400,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate option with value: Contract\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-09BGILIP\u0027, ip: \u0027192.168.0.19\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.findOptionsByValue(Select.java:287)\r\n\tat org.openqa.selenium.support.ui.Select.selectByValue(Select.java:190)\r\n\tat uk.co.library.utility.Utility.selectByValueFromDropDown(Utility.java:168)\r\n\tat uk.co.library.pages.HomePage.selectSalaryType(HomePage.java:81)\r\n\tat uk.co.library.steps.JobSearchTestSteps.iSelectJobType(JobSearchTestSteps.java:55)\r\n\tat ✽.And I select jobType \"Contract\"(jobsearchtest.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract Plumber jobs in London",
      "offset": 21
    }
  ],
  "location": "JobSearchTestSteps.iVerifyTheResult(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 895047300,
  "status": "passed"
});
formatter.before({
  "duration": 2901453100,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify job search result using different dataset",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-dataset;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am in homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"Cook\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter Location \"Birmingham\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select distance \"up to 5 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search options link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter salaryMin \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salaryMax \"45000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salaryType \"annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select jobType \"Part Time\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find Jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I verify the result \"Part Time Cook jobs in Birmingham\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTestSteps.iAmInHomepage()"
});
formatter.result({
  "duration": 57000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cook",
      "offset": 19
    }
  ],
  "location": "JobSearchTestSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 20347950100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Birmingham",
      "offset": 18
    }
  ],
  "location": "JobSearchTestSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 337588300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 5 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchTestSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 115143200,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 2151958700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 19
    }
  ],
  "location": "JobSearchTestSteps.iEnterSalaryMin(String)"
});
formatter.result({
  "duration": 170325200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45000",
      "offset": 19
    }
  ],
  "location": "JobSearchTestSteps.iEnterSalaryMax(String)"
});
formatter.result({
  "duration": 85336500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "annum",
      "offset": 21
    }
  ],
  "location": "JobSearchTestSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 64777800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Part Time",
      "offset": 18
    }
  ],
  "location": "JobSearchTestSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 20080082200,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate option with value: Part Time\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-09BGILIP\u0027, ip: \u0027192.168.0.19\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.findOptionsByValue(Select.java:287)\r\n\tat org.openqa.selenium.support.ui.Select.selectByValue(Select.java:190)\r\n\tat uk.co.library.utility.Utility.selectByValueFromDropDown(Utility.java:168)\r\n\tat uk.co.library.pages.HomePage.selectSalaryType(HomePage.java:81)\r\n\tat uk.co.library.steps.JobSearchTestSteps.iSelectJobType(JobSearchTestSteps.java:55)\r\n\tat ✽.And I select jobType \"Part Time\"(jobsearchtest.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Part Time Cook jobs in Birmingham",
      "offset": 21
    }
  ],
  "location": "JobSearchTestSteps.iVerifyTheResult(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 884568200,
  "status": "passed"
});
formatter.before({
  "duration": 2871418100,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify job search result using different dataset",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-dataset;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am in homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"architect\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter Location \"Chester\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select distance \"up to 10 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search options link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter salaryMin \"500\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salaryMax \"1000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salaryType \"week\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select jobType \"Temporary\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find Jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I verify the result \"Temporary Architect jobs in Chester\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTestSteps.iAmInHomepage()"
});
formatter.result({
  "duration": 29100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "architect",
      "offset": 19
    }
  ],
  "location": "JobSearchTestSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 20467931100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chester",
      "offset": 18
    }
  ],
  "location": "JobSearchTestSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 418775600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 10 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchTestSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 123753300,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 2161857000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 19
    }
  ],
  "location": "JobSearchTestSteps.iEnterSalaryMin(String)"
});
formatter.result({
  "duration": 176411600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 19
    }
  ],
  "location": "JobSearchTestSteps.iEnterSalaryMax(String)"
});
formatter.result({
  "duration": 80767100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "week",
      "offset": 21
    }
  ],
  "location": "JobSearchTestSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 96203200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Temporary",
      "offset": 18
    }
  ],
  "location": "JobSearchTestSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 20059155100,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate option with value: Temporary\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-09BGILIP\u0027, ip: \u0027192.168.0.19\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.findOptionsByValue(Select.java:287)\r\n\tat org.openqa.selenium.support.ui.Select.selectByValue(Select.java:190)\r\n\tat uk.co.library.utility.Utility.selectByValueFromDropDown(Utility.java:168)\r\n\tat uk.co.library.pages.HomePage.selectSalaryType(HomePage.java:81)\r\n\tat uk.co.library.steps.JobSearchTestSteps.iSelectJobType(JobSearchTestSteps.java:55)\r\n\tat ✽.And I select jobType \"Temporary\"(jobsearchtest.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Temporary Architect jobs in Chester",
      "offset": 21
    }
  ],
  "location": "JobSearchTestSteps.iVerifyTheResult(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 880849400,
  "status": "passed"
});
formatter.before({
  "duration": 2750267300,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify job search result using different dataset",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-dataset;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am in homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"Software Development Manager\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter Location \"Coventry\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select distance \"up to 5 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search options link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter salaryMin \"400\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salaryMax \"600\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salaryType \"day\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select jobType \"Apprenticeship\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find Jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I verify the result \"Apprenticeship Software Development Manager jobs in Coventry\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTestSteps.iAmInHomepage()"
});
formatter.result({
  "duration": 15900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Software Development Manager",
      "offset": 19
    }
  ],
  "location": "JobSearchTestSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 20452240000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Coventry",
      "offset": 18
    }
  ],
  "location": "JobSearchTestSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 297191700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 5 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchTestSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 104643000,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 2140519500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 19
    }
  ],
  "location": "JobSearchTestSteps.iEnterSalaryMin(String)"
});
formatter.result({
  "duration": 181565300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "600",
      "offset": 19
    }
  ],
  "location": "JobSearchTestSteps.iEnterSalaryMax(String)"
});
formatter.result({
  "duration": 82060800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "day",
      "offset": 21
    }
  ],
  "location": "JobSearchTestSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 97341600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apprenticeship",
      "offset": 18
    }
  ],
  "location": "JobSearchTestSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 20073132800,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate option with value: Apprenticeship\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-09BGILIP\u0027, ip: \u0027192.168.0.19\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.findOptionsByValue(Select.java:287)\r\n\tat org.openqa.selenium.support.ui.Select.selectByValue(Select.java:190)\r\n\tat uk.co.library.utility.Utility.selectByValueFromDropDown(Utility.java:168)\r\n\tat uk.co.library.pages.HomePage.selectSalaryType(HomePage.java:81)\r\n\tat uk.co.library.steps.JobSearchTestSteps.iSelectJobType(JobSearchTestSteps.java:55)\r\n\tat ✽.And I select jobType \"Apprenticeship\"(jobsearchtest.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Apprenticeship Software Development Manager jobs in Coventry",
      "offset": 21
    }
  ],
  "location": "JobSearchTestSteps.iVerifyTheResult(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 886148800,
  "status": "passed"
});
formatter.before({
  "duration": 2854828900,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify job search result using different dataset",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-dataset;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am in homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"photographer\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter Location \"Durham\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select distance \"up to 10 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search options link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter salaryMin \"50000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salaryMax \"60500\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salaryType \"annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select jobType \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find Jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I verify the result \"Permanent Photographer jobs in Durham\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTestSteps.iAmInHomepage()"
});
formatter.result({
  "duration": 17100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "photographer",
      "offset": 19
    }
  ],
  "location": "JobSearchTestSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 20474877200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Durham",
      "offset": 18
    }
  ],
  "location": "JobSearchTestSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 234180400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 10 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchTestSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 101156900,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 2128155700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 19
    }
  ],
  "location": "JobSearchTestSteps.iEnterSalaryMin(String)"
});
formatter.result({
  "duration": 171832300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60500",
      "offset": 19
    }
  ],
  "location": "JobSearchTestSteps.iEnterSalaryMax(String)"
});
formatter.result({
  "duration": 90429300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "annum",
      "offset": 21
    }
  ],
  "location": "JobSearchTestSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 59320400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 18
    }
  ],
  "location": "JobSearchTestSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 20033408900,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate option with value: Permanent\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-09BGILIP\u0027, ip: \u0027192.168.0.19\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.findOptionsByValue(Select.java:287)\r\n\tat org.openqa.selenium.support.ui.Select.selectByValue(Select.java:190)\r\n\tat uk.co.library.utility.Utility.selectByValueFromDropDown(Utility.java:168)\r\n\tat uk.co.library.pages.HomePage.selectSalaryType(HomePage.java:81)\r\n\tat uk.co.library.steps.JobSearchTestSteps.iSelectJobType(JobSearchTestSteps.java:55)\r\n\tat ✽.And I select jobType \"Permanent\"(jobsearchtest.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Photographer jobs in Durham",
      "offset": 21
    }
  ],
  "location": "JobSearchTestSteps.iVerifyTheResult(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 885112600,
  "status": "passed"
});
formatter.before({
  "duration": 2751375500,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Verify job search result using different dataset",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-dataset;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am in homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"Salespersons\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter Location \"Ely\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select distance \"up to 5 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search options link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter salaryMin \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salaryMax \"40000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salaryType \"annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select jobType \"Contract\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find Jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I verify the result \"Contract Salespersons jobs in Ely\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTestSteps.iAmInHomepage()"
});
formatter.result({
  "duration": 23400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Salespersons",
      "offset": 19
    }
  ],
  "location": "JobSearchTestSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 20380772100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ely",
      "offset": 18
    }
  ],
  "location": "JobSearchTestSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 286353800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 5 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchTestSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 130229200,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 2134266600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 19
    }
  ],
  "location": "JobSearchTestSteps.iEnterSalaryMin(String)"
});
formatter.result({
  "duration": 164312100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40000",
      "offset": 19
    }
  ],
  "location": "JobSearchTestSteps.iEnterSalaryMax(String)"
});
formatter.result({
  "duration": 83488000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "annum",
      "offset": 21
    }
  ],
  "location": "JobSearchTestSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 64192300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract",
      "offset": 18
    }
  ],
  "location": "JobSearchTestSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 20058337200,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate option with value: Contract\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-09BGILIP\u0027, ip: \u0027192.168.0.19\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.findOptionsByValue(Select.java:287)\r\n\tat org.openqa.selenium.support.ui.Select.selectByValue(Select.java:190)\r\n\tat uk.co.library.utility.Utility.selectByValueFromDropDown(Utility.java:168)\r\n\tat uk.co.library.pages.HomePage.selectSalaryType(HomePage.java:81)\r\n\tat uk.co.library.steps.JobSearchTestSteps.iSelectJobType(JobSearchTestSteps.java:55)\r\n\tat ✽.And I select jobType \"Contract\"(jobsearchtest.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract Salespersons jobs in Ely",
      "offset": 21
    }
  ],
  "location": "JobSearchTestSteps.iVerifyTheResult(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 893672300,
  "status": "passed"
});
});