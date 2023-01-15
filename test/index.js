const { expect } = require('chai')
const { getEmi } = require ("../controllers/emiController");

describe('my test', function () {
  it('check emi', async function () {
    let res = {
      end: function(){},
      status: function(s) {this.statusCode = s; return this;}
    };
    const req = { query : {currency: "NGN", rate: 2, month: 10, principal: 200}}
    let {data} = await getEmi(req, res)
    expect(data.rate).to.exist
    expect(data.principal).to.equal(req.query.principal)
  }).timeout(0)
})
