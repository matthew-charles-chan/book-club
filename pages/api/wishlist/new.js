const queries = require('../../../db/queries/wishlist')

export default (req, res) => {
  
  const { bookId, userId } = req.body

  return queries
    .wishlist
    .add(bookId, userId)
    .then((results) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json')
      return res.end(JSON.stringify(results))
    })
    .catch(err => {
      console.error(err)
      res.statusCode = 500;
      return res.end(JSON.stringify({"success": false}))
    })
};