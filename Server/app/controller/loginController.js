const {login} = require("../model/Schema");

const userInfo = async(req,res) => {
    const data = await login.find({_id : req.params.id});
    data?.length != 1 ? res.status(400).json({
        error : "Aucun donne ne corespond a cet id !"
    }) : res.status(200).json(data);
}

const userLoginValidation = async (req,res) => {
    const data = await login.find({
        $and : [
            {username : req.body.username},
            {password : req.body.password}
        ]
    })
    data.length != 1 ? 
    res.status(200).json({"message" : "Check your username or your password"}) :
    (
        res.status(200).json({"message" : "You are logged successfully"}));
        res.session.user = {...data}
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
    userInfo,
    userRegistered,
    userLoginValidation
}