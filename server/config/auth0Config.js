import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "https://homyz-five.vercel.app",
    issuerBaseURL: "https://dev-j2nfgvbzmyujpy4m.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck
