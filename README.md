# IMT-NewsArticles
Kursa "Ievads mobilajās tehnoloģijās" 4.praktiskā darba uzdevuma kods. Grupa G-n02

Lietotnei ir 3 faili:
1) App.js
2) HomeScreen.js
3) ArticleScreen.js

Pēc tam 2) un 3) fails jāievieto mapē "pages", jo App.js importē abus failus šādi:

        import Article from './pages/ArticleScreen';
        import HomeScreen from './pages/HomeScreen';
