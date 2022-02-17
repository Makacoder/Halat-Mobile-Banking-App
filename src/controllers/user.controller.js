//Question 1 - create endpoints for users in the waitlist
const User = require('../models/user.model');

exports.addUser = async (req, res, next) => {
try {
   const {firstName, lastName, email, phoneNumber, occupation}= req.body
    if (!firstName || !lastName || !email || !phoneNumber || !occupation) {
        return res.status(404).json({
            message: "page not found, please fill in the required details"
           }); 
    }
    const newUser = await User.create({firstName, lastName, email, phoneNumber, occupation})
    return res.status(201).json({
        
        newUser,
    });
} catch (error) {
   return res.status(500).json({
       
    message: error.message,
   });
}
};


//Question 2 - endpoint to know the num of users in the waitlist
exports.countUserNum = async(req, res, next) => {
    try {

              const user = await User.countDocuments()
        return res.status(200).json({
            
            user,
        });

    } catch (error) {
                return res.status(500).json({
            
            message: error.message,
        });

    }
};


//Question 3 - endpoint to view data of everyone on the waitlist 
exports.fetchUser = async(req, res, next) => {
    try {
        const user = await User.find();
        return res.status(200).json({
            
            user,
        });

    } catch (error) {
        return res.status(500).json({
            
            message: error.message,
        });

    }
};

//Question 4 - endpoint to edit/update someone's data on the waitlist
exports.updateUser = async (req, res, next) => {
    try {
      const { _id } = req.params;
      const userUpdate = await User.findByIdAndUpdate({ _id }, req.body, {new: true});
      if (!userUpdate) {
        return res.status(404).json({
            message: "page not found, please fill in the correct details"
           }); 
      }
      return res.status(200).json({
        
        userUpdate
      });
    } catch (error) {
            return res.status(500).json({
        
        message: error.message,
      });
    }
  };
  



