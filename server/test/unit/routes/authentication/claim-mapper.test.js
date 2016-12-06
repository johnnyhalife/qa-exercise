const claimMapper = require('../../../../routes/authentication/claim-mapper.js');

const response = { 
  given_name: 'Johnny',
  family_name: 'Halife',
  picture: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12552718_10153964423534198_813135601604317048_n.jpg?oh=6a52bf7bb1775e4547f9b935f55526a1&oe=58C039E5'
};

describe('claim mapper', () => {
  it('should get claims from the payload', () => {
    const mapped = claimMapper(response);
    
    (mapped.name !== null).should.equal(true);
    (mapped.surname !== null).should.equal(true);
    mapped.picture.should.equal(response.picture);
  });
});