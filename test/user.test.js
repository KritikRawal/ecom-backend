const User = require('../models/user_register_model');
const mongoose = require("mongoose");
 
const url = 'mongodb://127.0.0.1:27017/finalnodedatabase_api';
 
beforeAll(async () =>{
    await mongoose.connect(url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
    })
})
 
afterAll(async () => {
    await mongoose.connection.close();
})
 

     describe('Reg',async () =>{npm
it('User reg',()=>{
    const reg = {
        'fname':'pasish',
        'lname':'pandey',
        'address': 'kjbsdv',
        'phone_number': '823768',
        'username': 'ppas',
        'password': 'ppas',
        'email':'kjsdbvjk@gmail.com',
        'userType': 'Admin'
    }
    return User.create(reg).then((res)=>{
        expect(res.username).toEqual('ppas')
    })
})
     
 
    
    it('Update', () => {
        const reg ={
                    'username': 'Tinker'
                } ;
        return User.findOneAndUpdate({_id:Object('603b4e5a3424c73dc0e767bc')},
        {$set : reg})  
    });
 

    it('LOGIN', () => {
            return User.findOne({_id:Object('603b4e5a3424c73dc0e767bc')})
            expect(status.ok).toBe(1);
        });
 
    
    it('user del', async() => {
        return User.deleteOne({_id:Object('603b4e5a3424c73dc0e767bc')})
            expect(status.ok).toBe(1);
    })
})