

// const ItemModel = require("../models/public.model")

// const homepageController=(req,res)=>{
//     res.render("index")
// }

// const itempageController=async(req,res)=>{

//     const items=await ItemModel.find()
//     console.log(items)
    
//     res.render("item",{items})
// }



// const userController=async(req,res)=>{
    
// }
// module.exports={homepageController,itempageController}


const homepageController = (req, res) => {
    res.render("index");
};

const itempageController = (req, res) => {
    res.render("item");
};

const dashboardController = (req, res) => {
    res.render("dashboard");
};

module.exports = {
    homepageController,
    itempageController,
    dashboardController
};