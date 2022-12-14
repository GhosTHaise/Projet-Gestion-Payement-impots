
const {login} = require("../model/Schema");

const userInfo = async(req,res) => {
    const data = await login.findOne({_id : req.params.id});
    !data._id ? res.status(400).json({
        error : "No account match with this id !"
    }) : res.status(200).json(data);
    console.log("le grnasd"+data)
}

const allUserinfo = async(req,res) => {
    const data =  await login.find({});
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
        res.status(200).json({
            type : "error",
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
    }).catch(err=> {
        res.status(200).json({
            type : "error",
            message : "Unable to remove this user." 
        })
    })
}


module.exports = {
    userInfo,
    userInfoUpdate,
    userInfoDelete,
    allUserinfo
}