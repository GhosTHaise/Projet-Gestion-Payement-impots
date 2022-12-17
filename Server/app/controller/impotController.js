const {login} = require("../model/Schema");

const defaultAnswer = (...params) => {
    const httpResponse = params[0]?.status(200);
    if(params[1]?.length > 0){
        httpResponse.json({
            data : params[1]
        })
    }else{
        httpResponse.json({
            message : params[2]
        })
    }
}

const impotByUser = (req,res) => {
    const list_impots = login.find({
        id_proprio : req.params?.id
    });
    defaultAnswer(res,list_impots.impots,"No tax playements have been registered by this user.");
}


const addImpot = async(req,res) => {
    const new_impots = new impots({
        ...req.body
    });
    login.findById(
            req.params.id,async (err,success)=>{
                if(!err){
                    if(!success){
                        res.status(200).json({
                            "message" : "This account doesn't exist ."
                        })
                    }else{
                        result.impots.push(new_impots);
                        result.save((saveErr,success) => {
                            if(saveErr){
                                res.status(200).json({
                                    "message" : "Unable to save this tax",
                                    "type" : "error"
                                })
                            }else{
                                res.status(200).json({
                                    "message" : "This tax has been successfully registered",
                                    "type" : "success"
                                })
                            }
                        });
                    }
                }
            }
        )
}

module.exports = {
    impotByUser,
    addImpot
}