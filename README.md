# wellis_backend
## Szerverek indítsa: 
```SH
#Ehhez érdemes elkéstíteni egy npm scriptet ami indítja mind a 2 szervert. pl.:./package.json alá
nodemon server.js
cd frontend && npm start
```
### BACKEND
Express-server ami egy mysql adatbázishoz kapcsolódik!  
express_port: 2233  
mysql_port: 3306  

### FRONTEND
React-framework  
port
: 8000  

# TODOS !!

## FRONTEND
- [ ] API hívások elkészítése új fájlokba
- [ ] API hívás implementációk 
  - [ ] NewJobModal
  - [ ] NewUnitModal
  - [ ] JobList
  - [ ] Units
  - [ ] Megjegyzésekhez is kell!!
- [ ] Login page és mechanizmus elkészítése

## BACKEND
- [ ] dotenv használata és .env fájl elkészítése a változókhoz
- [ ] ha lejár ne tegyen hozzá lezárás dátumot (lejárati dátum a commentbe.) ! 
- [ ] excel export (Szűrés dátumra. ) hány mnynitott pozició volt hónapokban.

olyan lekérdezés kell nekem ahol szűrhetsz hónapokra, pl április 1.én lekérdezem a márciusi aktív kereséseket és kellenek azok is amiket korábban indítottak de mai napig is aktív vagy a márciusi hónapban lett lezárva.  [azok kellenek ami az időpont elötti napig is aktív vagy lejárt és azok is amik az adott hónapban lettek lezárva.] 

```
SELECT * FROM `jobs` WHERE DATE(startDate) > DATE("2021-03-01") AND DATE(startDate) < DATE("2021-03-31");
SELECT * FROM `jobs` WHERE DATE(endDate) > DATE("2021-03-01") AND DATE(endDate) < DATE("2021-03-31");
SELECT * FROM `jobs` WHERE jobStatus = 0 AND DATE(startDate) < DATE("2021-03-01") OR jobStatus = 2 AND DATE(startDate) < DATE("2021-03-01");

SELECT * FROM `jobs` WHERE DATE(startDate) > DATE("2021-03-01") AND DATE(startDate) < DATE("2021-03-31") OR jobStatus = 0 AND DATE(startDate) < DATE("2021-03-01") OR jobStatus = 2 AND DATE(startDate) < DATE("2021-03-01") OR DATE(endDate) > DATE("2021-03-01") AND DATE(endDate) < DATE("2021-03-31") ORDER BY `startDate` ASC

SELECT * FROM `jobs` WHERE DATE(startDate) > DATE("2021-08-01") AND DATE(startDate) < DATE("2021-08-31") OR jobStatus = 0 AND DATE(startDate) < DATE("2021-08-01") OR jobStatus = 2 AND DATE(startDate) < DATE("2021-08-01") OR DATE(endDate) > DATE("2021-08-01") AND DATE(endDate) < DATE("2021-08-31") OR DATE(endDate) > DATE("2021-08-31") AND DATE(startDate) < DATE("2021-08-01") AND jobStatus = 1 ORDER BY `startDate` ASC;


//DB szám és név !! 
SELECT COUNT(jobName), createdBy FROM `jobs` WHERE DATE(startDate) > DATE("2021-08-01") AND DATE(startDate) < DATE("2021-08-31") OR jobStatus = 0 AND DATE(startDate) < DATE("2021-08-01") OR jobStatus = 2 AND DATE(startDate) < DATE("2021-08-01") OR DATE(endDate) > DATE("2021-08-01") AND DATE(endDate) < DATE("2021-08-31") OR DATE(endDate) > DATE("2021-08-31") AND DATE(startDate) < DATE("2021-08-01") AND jobStatus = 1 GROUP BY createdBy;

//Szervezeti egységenkénti aktív keresések. 
SELECT COUNT(jobName), name FROM jobs, units WHERE jobs.unitId = units.id AND jobs.jobStatus = 0 GROUP BY name;



// Az adott dátum negyedévében lévő aktív keresések adott személyre.
SELECT * FROM jobs WHERE QUARTER(startDate) = QUARTER("2021-10-10") AND YEAR(startDate) = YEAR("2021-10-10") AND createdBy = "levay.alina" AND jobStatus = 0;

//jelenleg aktív keresések 
SELECT COUNT(jobName) FROM `jobs` WHERE createdBy="levay.alina" AND jobStatus=0
```

Készre jelentésnél meg kell adni a jelentkező nevét, felmondási idejét és várható kezdés dátumát.
## DATABASE

- [ ] Létre kell hozzak 2 plusz táblát : - tags, tags_search  
- TAGS: t_id, t_name




# REDESIGN IDEAS !!
- ...
- ...

## COLOURS: 
- ...
- ...


# Jelenleg nem tudom megoldani problémák 
Megfelelő filterezés kereső mezőben pl.: end:2021; start:2020

# 3RD PARTY PACKAGES!!
- ChartsJS
- React-client-session


# SOK SIKERT KÖCSÖG :joy: