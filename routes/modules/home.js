const express = require('express')
const router = express.Router()
const Account = require('../../models/Account')

router.get('/',(req,res)=>{
    res.render('index')
})

router.post('/',(req,res)=>{
    const {Email,Password} = req.body
    Account.findOne({email:Email,password:Password})
        .lean()
        .then(data =>{
            if(!data){
                res.render('fail')
            } else {
                res.render('succeed',{name:req.body.firstName})
            }
        })
        .catch(error => console.error(error))
})

router.get('/logout',(req,res)=>{
    res.redirect('/')
})

module.exports = router