function getbatchinfo(){const date = new Date
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}-${month}-${year}`;
console.log (currentDate + "-" + "Californium, W3D4, the topic for today is Nodejs module system"
    ); 
}

module.exports.getbatchinfo=getbatchinfo