const jsonServer = require('json-server')
const auth = require('json-server-auth')

const app = jsonServer.create()
const router = jsonServer.router('./data/db.json')
const nodemailer = require('nodemailer')

// /!\ Bind the router db to the app
app.db = router.db

const middlewares = jsonServer.defaults()

const rules = auth.rewriter({
    users: 664,
    blogs: 664,
    comments: 664
})

app.use(rules)
app.use(middlewares)
app.use(auth)


app.use(jsonServer.bodyParser)
// adding a post 
app.use((req, res, next) => {
    try {
        // sending an email
        if (req.method === 'POST' && req.path === '/send-email') {
            const transporter = nodemailer.createTransport({
                port: 465,
                service: 'gmail',
                auth: {
                    user: 'lcs.gamingblog@gmail.com',
                    pass: 'lifechoices1234'
                }
            })
            
            const mailOptions = {
                from: 'bigbirdonline25@gmail.com',
                to: req.body.email,
                subject: 'Login Details',
                html: `<div> 
                <h3>Hi ${req.body.fullName},</h3>
                <br>
                <h4>Your Login Details are as follows:</h4>
                <p>Username: ${ req.body.email }<p>
                <p>Password: ${ req.body.password }</p>
                <br>
                <p>For any queries feel free to contact us...</p>
                <div>
                    Email: jeandreross@gmail.com
                    <br>
                    Tel: 021 555 0080
                <div>
              </div>`
            }

            transporter.sendMail(mailOptions, function (err, info){
                if (err) {
                    console.log(err)
                } else {
                    console.log('Email sent: ' + info.response)
                }
            })
        }

        // adding a post 
        if (req.method === 'POST' && req.path === '/blogs') {
                req.body.createdAt = new Date().toDateString();
                req.body.updatedAt = null;
        }

        // updating a post 
        if (req.method === 'PUT') {
            if (req.params) {
                req.body.createdAt = req.body.createdAt;
                req.body.updatedAt = new Date().toDateString()
            }
        }
        
        // adding a comment 
        if (req.method === 'POST' && req.path === '/blogs/:id/comments') {
            // console.log(req.path, '/blogs/:id/comments');
            req.body.createdAt = new Date().toDateString();
            req.body.updatedAt = null;
        }
        
        // editing a comment
        if (req.method === 'PUT' && req.path === '/comments/:id') {
            console.log(req.path, '/comments/:id');
            req.body.updatedAt = new Date().toDateString();
        }
         
        // deleting a comments but this is to return a response when deleting a comment (not working)
        if (req.method === 'DELETE' && req.path === 'comments/:id') {
            response = {}

            try {
                response['message'] = "You successfully deleted the comment"
                response['status_code'] = 200
            } catch (err) {
                response['message'] = err.message
                response['status_code'] = 500
            }
            return response
        }

        next()
    } catch (err) {
        console.log(err.message)
    }
})

app.use(router)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`JSON Server is running on port http://localhost:${port}`)
})
