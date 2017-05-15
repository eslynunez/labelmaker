const app = require('../labelmaker');
const request = require('supertest');
const should = require('chai').should();
const JSDOM = require('jsdom').JSDOM;
const artistInfo = require('../artistinfo.json');

describe("Given that I have requested the label maker index page", () => {

  before(() => {
    return request(app)
      .get('/')
      .then(response => {
        // load html into JSDOM
        let dom = new JSDOM(response.text);

        // Set global dom objects for use in test
        global.window = dom.window;
        global.document = dom.window.document;
      })
      .catch(err => {
        // If there are any err
        console.log(err);
      })
  });

  it("it renders the correct number of labels", () => {
    // Ten artwork records are in the array therefore there should ten label classes.
    should.equal(window.document.getElementsByClassName('label').length, artistInfo.length);
  });

  it("it renders labels with correct classes", () => {
    should.equal(window.document.getElementsByClassName('name').length, artistInfo.length);
    should.equal(window.document.getElementsByClassName('title').length, artistInfo.length);
    should.equal(window.document.getElementsByClassName('name').length, artistInfo.length);
    should.equal(window.document.getElementsByClassName('description').length, artistInfo.length);
    // There will be a page break will after every two labels where modulus is 0 except for the first one.
    should.equal(window.document.getElementsByClassName('page-break').length, (artistInfo.length / 2 ) - 1);
  });

});