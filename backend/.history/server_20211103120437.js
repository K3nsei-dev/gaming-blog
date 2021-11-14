const jsonServer = require('json-server')
const auth = require('json-server-auth')
const moment = require('moment')
const app = jsonServer.create()
const router = jsonServer.router('./data/db.json')
const nodemailer = require('nodemailer')

// /!\ Bind the router db to the app
app.db = router.db

const middlewares = jsonServer.defaults()

const formattedDate = moment()

const rules = auth.rewriter({
    users: 664,
    blogs: 664,
    comments: 664
})

app.use(rules)
app.use(middlewares)
app.use(auth)


app.use(jsonServer.bodyParser)

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
                from: 'lcs.gamingblog@gmail.com',
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
                    Email: lcs.gamingblog@gmail.com
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

        // for adding data
        if (req.method === 'POST') {
                req.body.createdAt = formattedDate.format('MMMM Do YYYY, h:mm:ss a');
                req.body.updatedAt = null;
        }
        // for updating objects
        if (req.method === 'PUT') {
            if (req.params) {
                req.body.createdAt = req.body.createdAt;
                req.body.updatedAt = formattedDate.format('MMMM Do YYYY, h:mm:ss a');
            }
        }

        if (req.method === 'DELETE') {
            res.json({ message: "successfully deleted data", status_code: 201})
        }

        next()
    } catch (err) {
        console.log(err.message)
        res.json({ message: err.message})
    }
})

app.use(router)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`JSON Server is running on port http://localhost:${port}`)
})