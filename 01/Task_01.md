# Instalacja frameworka Angular i utworzenie pierwszego projektu

1. Pobierz i zainstaluj Visual Studio Code - https://code.visualstudio.com.

2. Pobierz i zainstaluj Node.js - https://nodejs.org/en/download.

3. Otwórz terminal w Visual Studio Code i wywołaj następujące polecenia:

```ps
npm -v
```

```ps
node -v
```

(w przypadku problemów z brakiem uprawenień skryptów na platformie Windows)

```ps
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

4. Następnie utwórz nowy folder, który będzie Twoim folderem projektowym. 


5. Zainstaluj Angular CLI za pomocą polecenia.

```ps
npm install -g @angular/cli
```

6. Sprawdź czy Angular CLI zostało poprawnie zaintalowane globalnie za pomocą polecenia.

```ps
ng version
```

7.Utwórz nową aplikację Angular za pomocą komendy.

```ps
ng new student-manager-angular
```
Wybierz domyślną wersję routingu oraz CSS jako opcje `No` w pytaniu o SSR.
<img width="438" alt="image" src="https://github.com/sobierajpawel/ZDJAVApol142_frontend/assets/18425360/a938b80c-5572-4c23-ac05-ad265a9c95ea">

<img width="605" alt="image" src="https://github.com/sobierajpawel/ZDJAVApol142_frontend/assets/18425360/b166001a-f3c3-4615-90b4-c03a6e8f171b">

8. Zamontuj utworzony folder za pomocą polecenia.

```ps
cd student-manager-angular
```

9. Uruchom aplikacje poleceniem 

```ps
ng serve --open
```

Powinieneś w przeglądarce pod adresem http://localhost:4200/ zobaczyć poniższy UI.

<img width="953" alt="image" src="https://github.com/sobierajpawel/ZDJAVApol142_frontend/assets/18425360/86551166-ac0d-416b-9484-c671defb685e">

