const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true })); 
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/contact', (req, res) => {
    res.render('contact');
});


app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

   
    if (!name || !email || !message) {
        return res.send('All fields are required!');
    }

    
    res.render('thankyou', { name, email, message });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
