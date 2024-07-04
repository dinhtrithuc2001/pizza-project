const express = require('express')
const router = express.Router()
let md5 = require('md5');


const User = require('../models/userModel')

router.post('/register', async (req, res) => {
    let { name, email, password } = req.body
    password = md5(password)
    const newUser = new User({
        name,
        email,
        password
    })
    try {
        const newUserAfterCheck = await User.find({ email })
        if (newUserAfterCheck.length > 0) {
            res.status(200).json({
                success: false,
                message: 'Email đã tồn tại'
            })
        }
        else {
            newUser.save()
            res.status(200).json({
                success: true,
                message: 'Đăng ký thành công'
            })
        }
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
});
router.post('/login', async (req, res) => {
    let { email, password } = req.body
    password = md5(password)
    try {
        const user = await User.find({ email, password })
        if (user.length > 0) {
            const currentUser = {
                name: user[0].name,
                email: user[0].email,
                isAdmin: user[0].isAdmin,
                _id: user[0]._id
            }
            res.status(200).json({
                success: true,
                currentUser,
                message: 'Đăng nhập thành công'
            })
        }
        else {
            res.status(200).json({
                success: false,
                message: 'Tài khoản hoặc mật khẩu không đúng'
            })
        }
    } catch (error) {
        res.status(404).json({
            message: error
        })
    }
});

module.exports = router