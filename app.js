require("dotenv").config()
const express = require("express");
const bodyparser=require("body-parser")
const session = require("express-session");   



const ItemModel = require("./models/public.model");
const UserModel = require("./models/public.model");



const { homepageController, dashboardController, itempageController } = require("./controllers/public.controller");
const connectDB = require("./config/db/db");

const app=express()
app.use(express.json())

connectDB()

//convert form data into js object
app.use(bodyparser.urlencoded({extended:true}))
app.set("view engine", "ejs")



//sessions
// app.use(session({
//   secret:"hg25h6",
//   resave:false,
//   saveUninitiallized:true
// }))

// //flash
// app.use(flash())
// //make flash available in all views
// app.use((req,res,next)=>{
//   res.locals.success=req.flash("success")
//   res.locals.error=req.flash("error")
//   next()
// })





app.get("/", homepageController);
app.get("/item", itempageController);

app.get("/login",(req,res)=>{
    res.render("login")
})
app.get("/registerform",(req,res)=>{
    res.render("register")
})
app.get("/shopping",(req,res)=>{
    res.render("shopping",{items})
})


app.get("/dashboard", dashboardController);   



// app.post("/registerform",async(req,res)=>{
//   const data=req.body
//     console.log(data);

//   //fake validation
//   const { name, email, password, confirmPassword } = req.body;

// if (!name || !email || !password || !confirmPassword) {
//     return res.redirect("/registerform")
//     res.send(`
//     <script>
//     alert("All fields are required)
//     window.location.href="/registerform"
//     </script>
//       `)
//   }

//     try {
//       const user=await UserModel.findOne({email:data.email})
//       if(user){
//         return res.send(`
//           <h1>User already present</h1>
//         `)
//       }
//       await UserModel.insertOne(data)
//       res.status(200).send(`
//       <h2>From Submitted successfully</h2>
//       <p>Username: ${data.username}</p>
//       <p>Age: ${data.age}</p>
//       <p>Email: ${data.email}</p>
//       <p>Role: ${data.role}</p>

//     `)
    
//     } catch (error) {
//       res.send(`
//         <h2>Something went wrong try again later</h2>
//         `)
//     }
// })


app.post("/registerform", async (req, res) => {
  const data = req.body;
  console.log(data);

  const { username, age, email, role, password, confirmPassword } = req.body;

  // validation
  if (!username || !age || !email || !role || !password || !confirmPassword) {
    return res.send(`
      <script>
        alert("All fields are required");
        window.location.href="/registerform";
      </script>
    `);
  }

  if (password !== confirmPassword) {
    return res.send(`
      <script>
        alert("Passwords do not match");
        window.location.href="/registerform";
      </script>
    `);
  }

  try {
    const user = await UserModel.findOne({ email: data.email });

    if (user) {
      return res.send(`
        <script>
          alert("User already exists");
          window.location.href="/registerform";
        </script>
      `);
    }

    // ✅ FIXED (IMPORTANT)
    // await UserModel.create(data);

    // ✅ SUCCESS PAGE (your style)
    // res.send(`
    //   <h2>Form Submitted Successfully ✅</h2>
    //   <p>Username: ${data.username}</p>
    //   <p>Age: ${data.age}</p>
    //   <p>Email: ${data.email}</p>
    //   <p>Role: ${data.role}</p>

    //   <br>
    //   <a href="/login">Go to Login</a>
    // `);


   
      
      await UserModel.create(data);
return res.redirect("/login");
    

  } catch (error) {
    console.log(error);
    res.send(`
      <h2>Something went wrong, try again later</h2>
    `);
  }
});


app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.send("User not found");
    }

    if (user.password !== password) {
      return res.send("Wrong password");
    }

    // res.send("Login successful ✅");

    
    
res.redirect("/dashboard");

  } catch (error) {
    console.log(error);
    res.send("Login error");
  }
});




// app.get("/dashboard",(req,res)=>{
//     res.render("dashboard",{items})
// })
// app.get("/dashboard", async (req, res) => {
//     const items = await ItemModel.find();
//     res.render("dashboard", { items });
// });

app.listen(3000, () => {
    console.log("http://localhost:3000")
})

