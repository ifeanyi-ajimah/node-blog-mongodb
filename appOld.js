const express = require('express')
//express app
const app = express();

//register view engine
app.set('view engine', 'ejs');
// app.set('views','myviews');  //to set ejs views to a different engine other than the default wc is views

//listen for requests
app.listen(3000)

app.get('/', (req,res)=>{
    // res.send('<p> home page </p>'); //responding with plain html
    res.sendFile('./viewsOld/index.html', {root: __dirname });//always include the absolute path of the file for the sendFile function
});

app.get('/about', (req,res)=>{
    res.sendFile('./viewsOld/about.html', {root: __dirname })
})

app.get('/about-us',(req, res) => {
    res.redirect('/about');
})

//404 //fires when nothing else matches
//the .use functions fires regardless of the url ie fires for every request. if request the does not have a matching url before it(the send function). hence, it should always be at the last 
app.use((req, res)=>{
    res.status(404).sendFile('./viewsOld/404.html',{root: __dirname })
})











// app.get('/add-blog',(req, res)=>{
//     const blog = new Blog({
//         title : 'new blog2 ',
//         snippet : 'about my new blog 2',
//         body : 'Much much more about my new blog 2',
//     });
//     blog.save()
//     .then((result)=>{
//         res.send(result)
//     })
//     .catch((err)=>{
//         console.log(err)
//     });
// })
// app.get('/all-blogs',(req,res)=>{
//     Blog.find()
//     .then((results)=>{
//         res.send(results);
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// })
// app.get('/single-blog',(req,res)=>{
//     Blog.findById('62f8881edf0198d8de042807')
//     .then((result)=>{
//         res.send(result)
//     })
//     .catch((err) =>{
//         console.log(err)
//     })
// })

// app.get('/', (req,res)=>{
//     const blogs = [
//         {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit met amet consector '},
//         {title: 'Mario finds star', snippet: 'Lorem ipsum dolor sit met amet consector '},
//         {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit met amet consector '},
//     ];
//     res.render('index',{title : 'Home', blogs }); //automatically looks into the views folder and looks for index.ejs file, passing data
// });


