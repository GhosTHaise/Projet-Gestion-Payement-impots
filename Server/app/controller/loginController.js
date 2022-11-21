const {login} = require("../model/Schema");
const sessionUserInformations = (req,res) => {
    const data = req.session.user || "no data ...";
    res.status(200).json({
        data
    });

}

const userLoginValidation = async (req,res) => {
    const [data] = await login.find({
        $and : [
            {email : req.body.email},
            {password : req.body.password}
        ]
    });
    store = {...data}
    req.session.user = {...store._doc}
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
    userLoginValidation,
    sessionUserInformations
}