const queries = require('../../../db/queries/tags')

export default (req, res) => {
  
  const { tagName } = req.body

  return queries
    .tags
    .add(tagName)
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