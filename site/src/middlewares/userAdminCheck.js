module.exports = (req, res, next) => {
    if(req.session.user && req.session.user.rol === "ROL_ADMIN"){
        next()
    }else{
        res.redirect('/')
    }
}