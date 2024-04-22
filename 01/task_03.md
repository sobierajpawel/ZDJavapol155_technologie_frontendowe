# Dodanie nowego komponentu

1. W terminalu za pomocą komendy wprowadź polecenie tworzące nowy komponent listy studentów.

```ps
  ng g component students-list
```

2. Przeanalizuj jakie pliki zostały automatycznie dodane do projektu oraz jak zmienił się element `AppModule`.

3. Zamień `<router-outler>` na znacznik nowoutworzonego komponentu w pliku `app.component.html`

```html
<app-students-list></app-students-list>
```

4. Zobacz jakie zmiany to wywoła w aplikacji.

5. Dodaj kod html do nowo utworzonego komponentu wyświetlający 1 rekord w tabeli.

```html
<section>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Imię i nazwisko</th>
          <th>Adres e-mail</th>
          <th>Akcje</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Jan Kowalski</td>
          <td><a href="mailto:jan@kowalski.pl">jan@kowalski.pl</a></td>
          <td>
            <a href="#" class="button button-green">Edytuj</a>
            <button class="button button-red">Usuń</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
```

6. Dodaj kolejny rekord do tabeli.

```html
 <tr>
   <td>2</td>
   <td>Adam Kowalski</td>
   <td><a href="mailto:adam@kowalski.pl">jan@kowalski.pl</a></td>
   <td>
     <a href="#" class="button button-green">Edytuj</a>
     <button class="button button-red">Usuń</button>
   </td>
  </tr>
```

7. Użyj klasy zdefiniowanej w Bootstrapie do upiększenia tabeli.

```html
<table class="table table-striped">
```
