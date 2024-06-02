# SigmaSpot

SigmaSpot to responsywna aplikacja internetowa typu MPA (Multi-Page Application), która spełnia wymagania zaliczeniowego projektu na studia. Aplikacja oferuje zarówno statyczne, jak i dynamicznie tworzone treści za pomocą JavaScript, a także zaawansowane formularze z walidacją oraz obsługę lokalnych magazynów danych.

## Spis treści

- [Opis projektu](#opis-projektu)
- [Funkcje aplikacji](#funkcje-aplikacji)
- [Technologie](#technologie)
- [Instalacja i uruchomienie](#instalacja-i-uruchomienie)
- [Nagranie demonstracyjne](#nagranie-demonstracyjne)
- [Autorzy](#autorzy)

## Opis projektu

Projekt ten spełnia następujące wymagania zaliczeniowe:

- Szata graficzna i interfejs użytkownika aplikacji zostały wykonane samodzielnie
- Aplikacja spełnia założenia projektu responsywnego.
- Dynamicznie generowane treści za pomocą JavaScript.
- Rozbudowane formularze z walidacją.
- Praca z lokalnymi magazynami danych.
- Asynchroniczne pobieranie danych za pomocą Youtube API.
- Dane z lokalnego magazynu są dostępne z poziomu interfejsu aplikacji do podglądu, a także można je zmodyfikować.
- Kod HTML5 oraz arkusze CSS sa zgodne ze standardami W3C.

## Funkcje aplikacji

### Nawigacja

Aplikacja zawiera responsywny element nawigacyjny, który umożliwia dostęp do różnych sekcji strony (graj, ranking, o stronie, profil).

### Formularze

Przed wejściem do aplikacji należy założyć konto lub się zalogować. To własnie tam znajdziemy rozbudowany formularz rejestracji oraz logowania.
Dane które wpisujemy są walidowane w czasie rzeczywistym. Dodane zostało także "oczko" do podglądu hasła.
Formularze są walidowane zarówno po stronie HTML, jak i za pomocą JavaScript. Błędy są wyświetlane w jasny i czytelny sposób. Dane z formularza są zapisywane w formacie JSON w lokalnym magazynie danych (localStorage) i są dostępne do podglądu, modyfikacji i usuwania.

### Praca z danymi

Aplikacja wykorzystuje format JSON do przechowywania danych w lokalnym magazynie danych. Ponadto, wybrane fragmenty strony są modyfikowane za pomocą treści wczytywanych z plików na serwerze w trybie asynchronicznym, za pomocą Fetch API.

## Technologie

- HTML5
- CSS3
- JavaScript (w tym Fetch API)

## Instalacja i uruchomienie

1. Sklonuj repozytorium:
   ```bash
   git clone https://github.com/evee03/SigmaSpot.git

2. Przejdź do katalogu projektu:
   ```bash
   cd SigmaSpot
3. Otwórz plik signup.html w przeglądarce

## Nagranie demonstracyjne

[Zobacz nagranie](https://youtu.be/BqK9dJlV08E)

## Autor

Ewelina Musińska 


