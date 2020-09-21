const City = require("../models/cities");
const path = require("path");

module.exports.getHtml = (req, res) => {
    res.sendFile(path.join(__dirname, '..' , 'client', 'index.html')); 
};

module.exports.getCities = async (req, res) => {
    try {
        const city = await City.find({}, (err, cities) => {
            if (err) {
                console.log(err);
            } else {
           res.send(cities);
            }
        });
        
    } catch (error) {
        res.status(400).send({ error });
    }
};

module.exports.getCityById = async (req, res) => {
    const id = req.params.id;
    try {
        const city = await City.findOne({_id: id});
        res.send(city);
    } catch (error) {
        res.status(400).send({ error });
    }
};

module.exports.addNewCity = async (req, res) => {
    const cityToSave = req.body.name;
    try {
        const city = new City({cityName: cityToSave});
        await city.save();
        res.send(city);
    } catch (error) {
        res.status(400).send({ error });
    }

};

module.exports.updateCity = async (req, res) => {
    const cityToUpdate = req.body.name;
    const id = req.params.id;
    const newCity = {cityName:cityToUpdate};
    try {
        await City.findOneAndUpdate({_id: id}, newCity, {useFindAndModify:false, new: true});
        res.send({ message: 'City updated'});
    } catch (error) {
        res.status(400).send({ error });
    }
};

module.exports.deleteCityById = async (req, res) => {
    const id = req.params.id;
    try {
        await City.findOneAndRemove({_id: id},{useFindAndModify:false}) ;
        res.send({ message: 'City removed'});
    } catch (error) {
        res.status(400).send({ error });
    }
};

module.exports.deleteAllCities = async (req, res) => {
    try {
        const cities = await City.deleteMany({});
        res.sendStatus(200);
    } catch (error) {
        res.status(400).send({ error });
    }
};