const LoginPage = require('../pageobjects/login.page');
const axios = require('axios').default;

describe('api request from wdio ', () => { 
    it('check Email', async () => { 
    const message = await LoginPage.checkMesages("fghxxcbv@mailsac.com") });});
    


