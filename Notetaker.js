// // import express from "express";
// // import path from "path";
// // import ejs from "ejs";
// // import mongoose from "mongoose";
// // import cookieParser from "cookie-parser"
// // import jwt from "jsonwebtoken";


// // // const publicPath=path.join(path.resolve(),"/public")
// // const app=express();



// // app.use(express.urlencoded({extended:true}));
// // app.use(express.static(path.join(path.resolve(),'/public')));
// // app.set("view engine","ejs");
// // // app.use(express.static(publicPath));
// // // app.set('views',path.join(path.resolve(),'/view'))
// // // app.engine('html',ejs.renderFile);
// // app.use(cookieParser());



// // mongoose.connect('mongodb://localhost:27017',{dbName:'notetaker'}).then(()=>{
// // console.log('Database Connected');

// // }).catch((err)=>{
// //     console.log(`err`);
// // // catch detects the error or to handle the
// // });

// // const userSchema= new mongoose.Schema({
// //     name:String,
// //     email:String,
// //     password:String
// // });

// // const User=mongoose.model('users',userSchema);

// // const noteSchema= new mongoose.Schema({
// //     title:String,
// //     descr:String,
// //     createdBy:{type:mongoose.Types.ObjectId, ref:'users'}
// // })

// // const Notes=mongoose.model('notes',noteSchema)

// // const isAuth= async (req,res,next)=>{
// //     const{par1,par2}= req.cookies;

// // if(par1 && par2)
// // {
// //     const email=jwt.verify(par1,'abcdefg');
// //     const password=jwt.verify(par2,'abcdefg');
// //     req.user=await User.findOne({email:email});
// //     console.log(req.user);
// //     if(req.user)
// //     {
// //         if(req.user.password == password.toString())
// //         {
// //             next();
// //         }
// //         else{
// //             res.send('Wrong password input, Please try Again')
// //         }
// //     }
// //     else{
// //         res.send('User not found, Please register');
// //     }
// // }
// // else{
// //     res.render('login');
// // }
// // }
// // app.get('/logout',(req,res)=>{
// //     res.redirect('/');
// // })

// // app.get('/loggedIn',isAuth,(req,res)=>{
// //     res.render('notetaker1');
// // })

// // app.post('/login',(req,res)=>{
// //     const {email,password}=req.body;
// //     const par1=jwt.sign(email,'abcdefg');
// //      const par2=jwt.sign(password,'abcdefg');

// //     res.cookie('par1',par1,{httpOnly: true});
// //     res.cookie('par2',par2,{httpOnly:true});
// //     res.redirect('/loggedIn');
// // });

// // app.post('/signup',(req,res)=>{
// //      const{name,email,password}=req.body;
// //      const thisuser=User.create({name,email,password});
// //     res.render('notetaker1');
// // })

// // app.get('/trysignup',(req,res)=>{
// //     res.render('signup');
// // })


// // app.get('/tryLogin',(req,res)=>{
// //     res.render('login');
// // })

// // app.get('/',(req,res)=>{
// //     res.render('form1')
// // })

// // app.listen(8300,(req,res)=>{
// //     console.log("Server is working fine");
// // });

// import express from "express"
// import path from "path"
// import mongoose from "mongoose"
// import cookieParser from "cookie-parser"
// import jwt from "jsonwebtoken"


// const app=express();

// app.use(express.static(path.join(path.resolve(),'/public')));
// app.use(express.urlencoded({extended:true}));
// app.set('view engine','ejs');
// app.use(cookieParser());

// mongoose.connect('mongodb://localhost:27017',{dbName:"notetaker"}).then(()=>{
//     console.log('Database is now Connected');
// })
// .catch((err)=>{
//     console.log('Something went wrong in connecting the Database, Following Error is being displayed \n ${err}');
// })

// const userSchema= new mongoose.Schema({
//     name:String,
//     email:String,
//     password:String
    
// })

// const User  = mongoose.model('users',userSchema);

// const noteSchema= new mongoose.Schema({
//     title:String,
//     description:String,
//     createdBy:{type:mongoose.Types.ObjectId, ref:'users'}
// })
// const Notes=mongoose.model('notes',noteSchema);

// const isAuth= async (req,res,next)=>{
//     const {par1,par2}= req.cookies;

//     if(par1 && par2)
//     {
//         const email=jwt.verify(par1,'abcdefgh');
//         const password=jwt.verify(par2,'abcdefghi');
//         // console.log(email,password);
//         req.user= await User.findOne({email:email});
//         console.log(req.user);
//         if(req.user)
//         {
//             if(req.user.password == password.toString()) 
//             {
//                 next();
//             }
//             else 
//             {
//                 res.send('Wrong password input, Please try Again');
//             }
//         }
//         else
//         {
//             res.send('User not found, Please register');
//         }
//     }
//     else 
//     {
//         res.render('login');
//     }
// }

// // const text1=document.querySelector('textarea');
// // const btn=document.getElementById('addBt');
// // const list=document.getElementById('noteslist');

// // btn.addEventListener('click',function(event1){
// //     event1.preventDefault();
// //     const note=document.createElement('p');
// //     note.innerText=text1.value;
// //     text1.value="";
// //     list.appendChild(note);

// //     note.addEventListener('click', function(){
// //         note.remove();
// //     });
// // });

// // const Event=document.querySelector('textarea');
// // const button=document.querySelector('button');
// // let  mystring="" //khaali string
// //  Event.addEventListener('textarea',(event)=>{  
// //   mystring=event.target.value;

// // });
// // button.addEventListener('click',(event)=>{
// //     event.preventDefault();//to prevent the default
// //     console.log(mystring);
// // });
// // const myform=document.querySelector('form');
// // console.log(myform[0].value);


// // const sub1=document.querySelector('#submit');
// // sub1.addEventListener('click',(event)=>{
// //     event.preventDefault();
// //     console.log(myform[0].value);
// //     console.log(myform[1].value);
// // });

// // const text1=document.querySelector('#text');
// // let mystring1="";
// // text1.addEventListener('click',(event)=>
// // {
// //     event.preventDefault();
// //     mystring1=event.target.value;
    
    
// // });

// // const div=document.querySelector('#div1');
// // div.append(mystring1);
// // app.get('/logout',(req,res)=>{
// //     res.redirect('/');
// // })

// app.post('/login',(req,res)=>{
//     res.render('Notetaker');
//  })

// app.post('/login',(req,res)=>{
//     const {email,password}=req.body;

//  const par1=jwt.sign(email,'abcdefgh');
//    const par2=jwt.sign(password,'abcdefghi');

//    res.cookie('par1',par1,{
//         httpOnly: true
//      });
//      res.cookie('par2',par2,{httpOnly:true});

//      res.render('Notetaker');
//  })

// app.post('/signup',(req,res)=>{
//     const {name,email,password}=req.body;
//     const thisuser=User.create({name,email,password});
//     res.render('Notetaker');
// })

// app.get('/trysignup',(req,res)=>{
//     res.render('signup');
// })

// app.get('/trylogin',(req,res)=>{
//     res.render('login');
// })

// app.get('/',(req,res)=>{
//     res.render('form');
// })

// app.listen(8000,()=>{
//     console.log('Server is Working fine');
// });

