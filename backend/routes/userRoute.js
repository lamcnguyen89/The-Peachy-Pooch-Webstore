import express from 'express';
import User from '../models/';

const router = express.Router();

router.get("/createadmin", async (req, res) => {

    try{
        const user = new User({
            name: 'Lam',
            email: 'lamcnguyen89@gmail.com',
            password: '1245',
            isAdmin: true
        });
    
        const newUser = await user.save();
        res.send(user);
    }catch(error){
        res.send({msg: error.message});
    }

})

export default router;