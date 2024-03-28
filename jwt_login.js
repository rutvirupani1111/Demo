import express from 'express';
import bodyParser from 'body-Parser';
import passport from 'passport';
import { Strategy } from 'passport-jwt';
import JWTStrategy from Strategy;
import { ExtractJwt } from 'passport-jwt';

import jwt from 'jsonwebtoken';
import { doesNotReject } from 'assert';

const port = 5000;
const app = express();
app.use(bodyParser.urlencoded({extended : false}));

app.use(bodyParser.json());
app.use(passport.initialize());

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secret'   
};

passport.use(new JWTStrategy(jwtOptions, (jwtPayload, done)=>
{
    if(jwtPayload.sub === 'rutvi')
    {
        done(null, { id: 'rutvi'});
    }
    else
    {
        done(null,false);
    }
}));

app.post('/login', (req,res)=>
{
    const { username, password } = req.body;
    if(username === 'rutvirupani' && password === 'rutvi')
    {
        const token = jwt.sign({sub: 'rutvirupani'}, 'secret');
        res.json({token});
    }
    else
    {
        res.status(401).send('Invalid Credentials');
    }
});

app.get('/protected', passport.authenticate('jwt', { session : false }),(req,res)=>
{
    res.json({message : 'You are authorized to access this resource'});
});

app.listen(port, ()=>
{
    console.log("Listening on port "+port);
});
