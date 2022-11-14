const {login} = require("../model/Schema");

const userLoginValidation = async (req,res) => {
    console.log(req.session.user)
    const [data] = await login.find({
        $and : [
            {email : req.body.email},
            {password : req.body.password}
        ]
    });
    req.session.user = {...data}
    data == undefined ? 
    res.status(400).json({"message" : "Check your username or your password"}) :
    (
        res.status(200).json({"message" : "You are logged successfully"})
    );
    
}

const userRegistered = (req,res) => {
    //console.log(req.body)
    const _schema = new login({
        ...req.body
});
_schema.save()
    .then((response) => {
        console.log(response);
        res.status(201).json({
            message : "User has been registered !"
        });
    }).catch( e => {
            console.log("Error : ",e);
        });
}

module.exports = {
    userRegistered,
    userLoginValidation
}