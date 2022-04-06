import userModel from '../model/userModel.js';
import bcrypt from 'bcrypt';

export const getUsers = async (req, res) => {
    try{
        const usersDate = await userModel.find();
        res.status(200).json(usersDate);
    }
    catch( error ){
        res.status(404).json({message:error.message});
    }
}

export const addUser = async (req, res) => {
    let userData = req.body;
    userData.password = bcrypt.hashSync(userData.password, 10);
    const userObj = new userModel(userData);
    /*
    let checkUser = await userObj.findOne({emil:userData.email})
    if(checkUser){
        return res.status(400).json({message:'user already exist!'})
    }
    // for create new user
    await userObj.create(userData);
    */
    try{
        await userObj.save();
        res.status(201).json(userObj);
    }
    catch(error){
        res.status(401).json({message:error.message});
    }
    //res.send('Hi, this is calling addUser = async (req, res) => { // code }) function from userController');
}

export const getUserById = async (req, res) => {
    try{
        const singleUserData = await userModel.findById(req.params.id);
        res.status(200).json(singleUserData);
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
    //res.send('Hi, this is calling getUserById = async (req, res) => { // code }) function from userController');
}

export const editUser = async (req, res) => {
    let singleUserData = req.body;
    singleUserData.password = bcrypt.hashSync(singleUserData.password, 10);
    const editObj = new userModel(singleUserData); 
    try{
        await userModel.updateOne({_id: req.params.id}, editObj);
        res.status(200).json(editObj);
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
}

export const deleteUser = async (req, res) => {
    try{
        await userModel.deleteOne({_id: req.params.id});
        res.status(200).json('User deleted successfully..');
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
}


export const login = async (req, res) => {
    let singleUserData = await userModel.find({"email":req.body.email});
    // let singleUserData = await userModel.findOne(request.body).select("-password"); // fetch data without password
    // userData.password = bcrypt.hashSync(singleUserData[0].password, 10);
    // console.log(singleUserData[0].password);
    try{
        if(singleUserData.length>0){
            let passwordHash = singleUserData[0].password;
            // if(singleUserData[0].password == req.body.password)
            if( bcrypt.compareSync(req.body.password, passwordHash) ){
                delete singleUserData[0].password;
                res.status(200).json(singleUserData[0]);
                // res.json({error:"Success😊\nYou are login now."});
            }
            else
                res.json({error:"Error😢\nIncorrect Password. Please Enter Correct Password."});
        }
        else{
            res.json({error:"Error😢\nUser Not Found."});
        }
    }
    catch(error){
        res.status(401).json({error:error.message});
    }
}
