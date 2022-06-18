const express = require('express')
const app = express()
app.use(express.static('public'))
app.get('/', (req,res) => {
    res.sendFile('./index.html')
})
app.get('/hobby', (req, res) => {
    res.send({
        code: 0,
        msg: 'ok',
        data: {
            hobby: ['香蕉','芒果','西瓜']
        }
    })
})

app.get('/love', (req, res) => {
    res.send({
        code: 0,
        msg: 'ok',
        data: {
            love: ['开车', '竞速']
        }
    })
})

app.get('/go', (req, res) => {
    res.send({
        code: 0,
        msg: 'ok',
        data: {
            go: ['旅游','爬山','滑雪']
        }
    })
})

app.listen(9000, () => {
    console.log('Server is running at Port 9000');
})