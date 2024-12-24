const { expect } = require('@wdio/globals')
const e = require('chai').expect
// test suite name
describe('Tutorialspoint application', async function(){
   //test case
   it('Assertion with expect', async function(){
      // launch url
      await browser.url('https://demo.automationtesting.in/Register.html')
       await $("input[ng-model='FirstName']").setValue('Ashish')
       await $("input[ng-model='LastName']").setValue('Rudra')
       
      //verify page title with assertion

      $("=Team").click()
      await expect(browser).toHaveTitle('Team @ Tutorials Point')
      await expect(browser).toHaveUrl('https://www.tutorialspoint.com/about/about_team.htm')

   });
});