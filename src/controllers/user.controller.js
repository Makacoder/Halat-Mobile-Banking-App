//Question 1 - create endpoints for users in the waitlist
const User = require('../models/user.model');

exports.addUser = async (req, res, next) => {
try {
   const {firstName, lastName, email, phoneNumber, occupation}= req.body
    // const firstName = req.body
    // const lastName = req.body
    // const email = req.body
    // const phoneNumber = req.body
    // const occupation = req.body

    const newUser = new User({firstName, lastName, email, phoneNumber, occupation})
    await newUser.save();
    return res.status(201).json({
        success: true,
        newUser,
    });
} catch (error) {
   console.log(error.message);
   return res.status(500).json({
       success: false,
       message: "Please fill in the required fields",
   });
}
};


//Question 2 - endpoint to know the num of users in the waitlist
exports.countUserNum = async(req, res, next) => {
    try {

              const user = await User.countDocuments()
        return res.status(200).json({
            success: true,
            user,
        });

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            success: false,
            message: "server Error",
        });

    }
};


//Question 3 - endpoint to view data of everyone on the waitlist 
exports.fetchUser = async(req, res, next) => {
    try {
        const user = await User.find();
        return res.status(200).json({
            success: true,
            user,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "server Error",
        });

    }
};

//Question 4 - endpoint to edit/update someone's data on the waitlist
exports.updateUser = async (req, res, next) => {
    try {
      const { _id } = req.params;
      const userUpdate = await User.findByIdAndUpdate({ _id }, req.body, {new: true});
      return res.status(200).json({
        success: true,
        userUpdate
      });
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  };
  



