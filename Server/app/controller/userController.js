
const {login} = require("../model/Schema");

const userInfo = async(req,res) => {
    const data = await login.findOne({_id : req.params.id});
    data?.length != 1 ? res.status(400).json({
        error : "No account match with this id !"
    }) : res.status(200).json(data);
    console.log(req.session.user)
}

const allUserinfo = async(req,res) => {
    const data =  await login.find({
        _id : { $ne : req.body.id}
    });
    data?.length > 0 ? res.status(200).json(data) 
    : res.status(200).json({"message" : "No account registered"})
}

const userInfoUpdate = async(req,res) => {
    login.updateOne({
        _id : req.params.id
    },
    {
       ...req.body 
    }).then( _ => {
        res.status(200).json({
            message : "Your informations has been successfully update ."
        })
    }).catch( e => {
        res.status(400).json({
            message : "Unable to take your request, please try later !"
        })
    });
}

const userInfoDelete = async (req,res) => {
    login.findOneAndRemove({_id : req.params.id}).then( response => {
        console.log("return : ",response)
        res.status(200).json({
            message :  "This user has been succesfully removed."
        })
    })
}


module.exports = {
    userInfo,
    userInfoUpdate,
    userInfoDelete,
    allUserinfo
}