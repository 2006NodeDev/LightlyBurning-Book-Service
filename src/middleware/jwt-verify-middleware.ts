import jwt from 'express-jwt'
import jwks from 'jwks-rsa'


export const JWTVerifyMiddleware = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://lb-demos.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'lightlyburning.js-army.com',
  issuer: 'https://lb-demos.us.auth0.com/',
  algorithms: ['RS256']
})