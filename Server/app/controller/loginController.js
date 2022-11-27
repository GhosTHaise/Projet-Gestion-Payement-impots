const store = require("../model/dbStore");
const {login} = require("../model/Schema");

const sessionUserInformations = (req,res) => {
    const data = req.session.user || "no data ...";
    if(data != "no data ..."){
        res.status(200).json(new Array(data.doc));
    }else{
        res.status(404).json({
            message : "No Active session"
        })
    }   
}

const userLoginValidation = async (req,res) => {
    const [data] = await login.find({
        $and : [
            {email : req.body.email},
            {password : req.body.password}
        ]
    });
    const store = {...data}
    const {_id,password,...sharing} = store._doc;
    //req.session.user = {...store._doc}
    req.session.user = {
        doc : {...sharing}
    } //THIS SETS AN OBJECT - 'USER'
    req.session.save(err => {
        if(err){
            console.log(err);
        } else {
            console.log(req.session.user);
        }
    }); //THIS SAVES THE SESSION.
    data == undefined ? 
    res.status(400).json({"message" : "Check your username or your password"}) :
    (
        res.status(200).json({
            "message" : "You are logged successfully",
            "session": {...sharing}
        
        })
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
            res.status(503).json({
                message : "Please complete all fields !"
            })
        });
}

module.exports = {
    userRegistered,
    userLoginValidation,
    sessionUserInformations
}