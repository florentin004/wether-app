const express = require("express")
const path = require("path")
const hbs = require("hbs")

const app = express()


const publicDirectoryPath=path.join(__dirname,'../public')
const viewsPath =path.join(_dirname,'../templates/view')
const partialsPath=path.join(_dirname,'../templates/partial')

app.set('view engine','hbs');
app.set('views',viewsPath) 
hbs.registerPartials(partialsPath)
hbs.registerPartials(partialsPath)

app.use(expres.static(publicDirectoryPath))

app.get('',(req, res)=>{
    res.render('index',{
        name:"florentin thaqi"
    })

})

app.get('/home',(req, res)=>{
res.render('index',{
    name:"florentin thaqi"

})
})

app.get('/ndihme',(req, res)=>{
    res.render('help',{

        title:"weather",

        name:"florentin thaqi"
   
    })
    })
app.get('/about',(req,res)=>{
res.render('about',{
    name:"florentin thaqi"
})
})

app.get('*',(req,res)=>{
    res.render('404',{
        name:"florentin thaqi"
    })
    })

app.listen(3000,()=>{

console.log('server po ngon ')

}
)
