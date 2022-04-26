var express = require('express');
var router = express.Router();
var dbConn = require('../db');
var multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname + '/../public/images')
    },
    filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname)
    }
  })

  //const upload = multer({dest: __dirname + '/images'});
  
const upload = multer({ storage: storage })



router.get('/view', (req, res) => {
    sqlQuery = 'SELECT * FROM t_seccam_entries ORDER BY datetime DESC LIMIT 1'
    dbConn.query(sqlQuery, function(
        error,
        results,
        fields
    ) {
        if (error) throw error;
        res.status(200).json(results);
    });
});

router.get('/viewten', (req, res) => {
    sqlQuery = 'SELECT * FROM t_seccam_entries ORDER BY datetime DESC LIMIT 10'
    dbConn.query(sqlQuery, function(
        error,
        results,
        fields
    ) {
        if (error) throw error;
        res.status(200).json(results);
    });
});

router.post('/viewall', (req, res) => {
    sqlQuery = `SELECT * FROM t_seccam_entries`;
    dbConn.query(sqlQuery, function(
        error,
        results,
        fields
    ) {
        if (error) throw error;
        res.status(200).json(results);
    });
});


router.post('/viewpkey', (req, res) => {
    var pkey = req.body.pkey;
    sqlQuery = `SELECT * FROM t_seccam_entries where pkey = "${pkey}"`;
    dbConn.query(sqlQuery, function(
        error,
        results,
        fields
    ) {
        if (error) throw error;
        res.status(200).json(results);
    });
});

//Client

router.post('/add', (req, res) => {
    var timestamp = Date.now();
    let date_ob = new Date(timestamp);
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
    if (month.length = 1){
        month = "0"+month;
    }
    let dateformat = (year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds + ".000000");

    var picture = req.body.picture;
    var rfuid = req.body.rfuid;
    var datetime = dateformat;
    // connect to mysql database and perform INSERT Query
    sqlQuery = `INSERT INTO t_seccam_entries (datetime, picture, rfuid) VALUES ("${datetime}","${picture}", "${rfuid}")`
    dbConn.query(sqlQuery, function(error, results, fields) {
        if (error) throw error;
        res.status(200).json(results);
    });
});

router.post('/upload', upload.single('photo'), (req, res, cb) => {
    cb(null, req.file.originalname)
    if(req.file) {
        res.json(req.file);
    }
    else throw 'error';
});

router.post('/reqentry', (req, res) => {
    console.log(req.body.rfuid);
    var rfuid = req.body.rfuid;
    sqlQuery = `SELECT * FROM t_allowed_uid where UID = "${rfuid}"`;
    dbConn.query(sqlQuery, function(
        error,
        results,
        fields
    ) {
        if (error) throw error;
        res.status(200).json(results);
    });
});


module.exports = router;