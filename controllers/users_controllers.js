const User =require('../models/user');



module.exports.profile = async function(req , res){

                return res.render('user_profile',{
                    title:"User Profile",
                 
                })
   
}
   

   
// render the sign up page
module.exports.signUp = function(req , res){
    if (req.isAuthenticated()){
       return res.redirect('/users/profile');

    }


    return res.render('user_sign_up' ,{
        title: "codeial | Sign Up"
    })
}

//render the sign in page
module.exports.signIn = function(req , res){

     if (req.isAuthenticated()){
       return res.redirect('/users/profile');

    }


    return res.render('user_sign_in' ,{
        title: "codeial | Sign In"
    })


}



// get the sign up data

module.exports.create = async function(req, res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

  const user =  await User.findOne({email:req.body.email}) 
      

        if(!user){
           await User.create(req.body)
               
                return res.redirect('/users/sign-in');

            
            
        }else{
            return res.redirect('back');

         }
    }


// sign in and create asession for the user
module.exports.createSession = async function(req,res){
    return res.redirect('/');
}

module.exports.destroySession = function(req , res , next){
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
}