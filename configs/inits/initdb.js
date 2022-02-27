app.get('/createunits', ( req, res) => {
    if (req.body.admin){
    let sql = "CREATE TABLE units ( `id` INT NOT NULL AUTO_INCREMENT , `name` VARCHAR(255) NOT NULL , PRIMARY KEY (`id`))"
    db.query(sql, err => {
        if(err){
            throw err;
        }
        res.send("table created")
    })
    }else{
        res.status(400).send("Nincs hozzá jogosultságod")
    }
})

app.get('/createjobs', ( req, res) => {
    if (req.body.admin === 'true'){
    let sql = "CREATE TABLE `jobs` (`id` int NOT NULL,`unitId` int NOT NULL,`jobName` varchar(50) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL,`startDate` varchar(10) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL, `jobStatus` int NOT NULL, `endDate` varchar(10) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL,`createdBy` varchar(255) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL)"
    db.query(sql, err => {
        if(err){
            throw err;
        }
        res.send("table created")
    })
    }else{
        res.status(400).send("Nincs hozzá jogosultságod")
    }
})