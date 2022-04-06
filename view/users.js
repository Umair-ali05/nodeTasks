function home(req, res) {
    res.send('<body style = " background-color: black "><h1 style = " color: white ; font-style: italic; font-weight: 300; text-align: center;">this is my home page</h1></body>')
}

function aboutus(req , res ){
    res.send('<body style = " background-color: black "><h1 style = " color: white ; font-style: italic; font-weight: 300; text-align: center;">My name is Umair Ali</h1>, <h3 style = " color: white ;font-style: italic; font-weight: 200; text-align: center"> I am a node js interne at sofit</h3></body>')
}

module.exports = {
    home,
    aboutus,
    }