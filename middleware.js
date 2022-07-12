module.exports.isLoggedIn = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/')
    }
    next();
}