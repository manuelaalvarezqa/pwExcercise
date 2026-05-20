/* 
From configuration
reporter: list
npx playwright  test --reporter list

list, line, dot, html, JSON, Junit
reporter:[['list'],['json',{outputFile:''jsonResult.json}]]

allure playwright module

npm i -D @playwright/test allure-playwright

allure command line
npm install -g allure-commandline --save-dev

reporter = [['allure-playwright',{outputFile:'my-allure-report'}]]

allure generate my-allure-results -o my-allure-report --clean

allure open allure-report


----Retries
config file: 
retries:3

npx playwright  test --retries=2

Flaky test: Failed-Retry-Passed



*/