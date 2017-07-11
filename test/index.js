import { router, get } from '../source'

const app = router(
  get('/api', (req, res) => res.end('hello') )
)

console.log(app.toString())



