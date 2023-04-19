displayJoke = (req, res) => {
    const data = 
       "joke here";
    res.status(200).send(data);
};

Module.exports = {
    displayJoke
};