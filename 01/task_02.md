# Dodanie Bootstrap'a

1.  Zainstaluj bootstrap w projekcie poleceniem za pomocą menadżera pakietów NPM.

```ps
  npm install bootstrap --save
```

2. Dodaj następujące skrypty dla css oraz js w pliku `angular.json`.

```json
    "styles": 
    [
      "node_modules/bootstrap/dist/css/bootstrap.min.css",
      "src/styles.css"
     ],
     "scripts": 
     [
      "./node_modules/bootstrap/dist/js/bootstrap.js"
     ]
```

