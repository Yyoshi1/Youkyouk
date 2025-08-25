module.exports.checkPermissions = (addonName) => {
    return (req, res, next) => {
        const user = req.user;
        if (!user || !user.permissions.includes(addonName)) {
            return res.status(403).json({ message: 'Permission denied' });
        }
        next();
    };
};
