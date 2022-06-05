const express = require('express')
const router = express.Router()
const Account = require('../../models/Account')
const session = require('express-session')

router.use(session({
    secret: 'It is secret',
    resave: false,
    saveUninitialized: true
}))

router.get('/',(req,res)=>{
    if (req.session.login) {
        console.log('loging yes')
        const sessionName = req.session.name
        console.log('session name', req.session.name)
        return res.render('succeed', { name: sessionName })
    }
    console.log(req.session)
    res.render('index')
})

router.post('/',(req,res)=>{
    const {Email,Password} = req.body
    console.log(req.body)
    Account.findOne({email:Email,password:Password})
        .lean()
        .then(data =>{
            if(!data){
                res.render('fail')
            } else {
                console.log('session', req.session)
                req.session.login = true
                console.log('session new', req.session)
                req.session.name = data.firstName
                console.log(data)
                console.log(req.session)
                res.render('succeed',{name:data.firstName})
            }
        })
        .catch(error => console.error(error))
})

router.get('/logout',(req,res)=>{
    res.render('index')
})

module.exports = router