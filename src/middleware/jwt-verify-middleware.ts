import jwt from 'express-jwt'
import jwksRsa from 'jwks-rsa'




export const JWTVerifyMiddleware = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://lightlyburning.us.auth0.com/.well-known/jwks.json`
    }),
    audience: `lightlyburning.js-army.com`,
    issuer:'https://lightlyburning.us.auth0.com/',
    algorithms:['RS256']
})