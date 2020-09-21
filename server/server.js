const weatherApp = require("./weatherApp");
const port = process.env.PORT || 3000;
  
weatherApp.listen(port, () => console.log("Connected successfully to server"));
    