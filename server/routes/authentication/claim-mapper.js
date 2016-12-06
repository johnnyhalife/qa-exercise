module.exports = function(body) {
  return {
    name: body.family_name,
    surname: body.given_name, 
    picture: body.picture
  }
};