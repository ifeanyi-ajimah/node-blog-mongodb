const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const blogRoutes = require('./routes/blogRoutes')
//express app
const app = express();

//connect to mongo db
// `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`
const dbURI = 'mongodb+srv://ifeanyi:password101@cluster0.ro6sulf.mongodb.net/nodetutsdb?retryWrites=true&w=majority'
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true })
.then( (data)=>{
    console.log("connected baby")
    app.listen(3000); //listen to request after connection has been established
 
}).catch((e)=>{
    console.log(e)
})

//register view engine
app.set('view engine', 'ejs');     // app.set('views','myviews');  //to set ejs views to a different path other than the default wc is views

//middleware and static files
app.use(express.static('public'));//this middleware enables the application to access everything that exist in the public folder 
app.use(express.urlencoded({extended: true})); //this middleware is for accepting form data. it takes all url encoded data from the application and passes them  
app.use(morgan('dev'));


app.get('/', (req,res)=>{
    res.redirect('/blogs');
});

app.get('/about', (req,res)=>{
    res.render('about',{title : 'About'});
})

app.get('/about-us',(req, res) => {
    res.redirect('/about');
})

app.use('/blogs',blogRoutes);

//404 //fires when nothing else matches
app.use((req, res)=>{
    res.status(404).render('404',{title : '404'})
})













