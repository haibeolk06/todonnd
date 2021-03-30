const users = [{
    id: 1,
    email: '18600050',
    password: '$2b$10$Cez//fWp/6Vc0HJ94iW.YespdKin/iYtCP7fhi1UL7gzp1h2n3Jv2',
    
}];

exports.findByEmail = function (email) {
    return users.find(u => u.email === email);
};

exports.findById = function (id) {
    return users.find(u => u.id === id);
};