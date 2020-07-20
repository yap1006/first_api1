import  express from 'express';
import {v4 as uuidv4} from 'uuid';

const router = express.Router();
// all routes in here are starting with /users
let users=[]
router.get('/',(req,res)=>{
    console.log(users);
    res.send(users);
});
router.post('/',(req,res)=>{
    
    const user =req.body;
    users.push({ ...user,id:uuidv4()});
    res.send(`user with name ${user.firstN} added to database`);

});
router.get('/:id',(req,res)=>{
    const {id}=req.params;
    const founduser=users.find((user)=>user.id === id)
    res.send(founduser);
});

router.delete('/:id',(req,res)=>{
    const {id}=req.params;
    users=users.filter((user) => user.id!== id);
res.send(`user with id ${id} deleted from database`)
})
router.patch('/:id',(req,res)=>{
    const {id}=req.params;
    const {firstN,lastn,age}=req.body;
    const user=users.find((user)=>user.id===id);
    if(firstN)
    {
        user.firstN=firstN;
    }
    if(lastn)
    {
        user.lastn=lastn;
    }
    if(age)
    {
        user.age=age;
    }
    res.send(`user with the id ${id} has been updates`);

})
export default router;