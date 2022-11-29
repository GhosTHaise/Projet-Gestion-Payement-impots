const {impots} = require("../model/Schema");

const defaultAnswer = (...params) => {
    const httpResponse = params.res?.status(200);
    if(succes?.length > 0){
        httpResponse.json({
            data : params.success
        })
    }else{
        httpResponse.json({
            message : params.error
        })
    }
}

const impotByUser = (req,res) => {
    const list_impots = impots.find({
        id_proprio : req.params?.id
    });
    defaultAnswer(res,list_impots,"No tax playements have been registered by this user.")
}

module.exports = {
    impotByUser
}