# Proba-IT-2024-Ștefanescu Andrei-Cosmin

## Cum se ruleaza aplicatia
Dupa clonarea repo-ului in interiorul directurului CopyPasaFE rulati in terminal:
-npm install
-npm run dev
Dupa rularea comenzilor accesati localhost-ul din browser pentru a vizualiza paginile


## 1. Ce taskuri am completat?

Din taskurile de mai jos am reusit sa implementez doar partea de front-end pe desktop
-Homepage
-Pagina de profil
-Register si Login
-Retete si search
-Adaugare retete
-Bonus: Forgot Password 

Am incercat sa implementez si partea de partea de backend pentru user auth dar dupa cum se poate vedea, nu face mare lucru. De asemnea nu am reusit sa integrez partea de pop-up pe pagine de retete 


## 2. Modul de abordare

Proiectul este realizat in react, paginile au fost facute cu HTML, TypeScript si stilizate cu CSS prin Tailwind.
Paginile au fost conectate intre ele folosind un router, url-urile sunt urmatoarele:
"/"
"/login"
"/register"
"/forgotpass"
"/profile"
"/add_recipe"
'/search'

Acestea pot fi accesate fie direct din bara de search sau prin linkurile asociate butoanelor pe fiecare pagina.

De mentionat: Bara de naviagtie sau header-ul are 3 stari distincte, una pentru fiecare posibilitate de butoane prezente in partea dreapta a elementului. Am facut acest lucru pentru a micsora pe cat posibil cantitatea de cod duplicat, dar din pacate nu am reusit sa implementez schimbarea automata a acestor stari, dat fiind ca tine de starea curenta a userului (logat, nelogat).


## 3. Ce am invatat

Fără experiență anterioară în web development, doar câteva noțiuni de HTML și foarte puțin CSS învățate în liceu pentru atestat, realizarea unui website într-o perioadă scurtă, marcată de teme și parțiale, a reprezentat o adevărată provocare.

Sunt mulțumit de ceea ce am reușit să creez, deși recunosc că mai este mult loc pentru îmbunătățiri, în special pe partea de back-end, unde încă simt că nu stăpânesc conceptele necesare pentru a adăuga funcționalitățile pe care un astfel de proiect le-ar necesita. De asemenea, adaptabilitatea designului pentru diferite dispozitive rămâne un aspect care poate fi perfecționat.

Cea mai mare parte a timpului mi-a fost consumată de stilizarea paginilor, rescriind o mare parte din proiect utilizând Tailwind. Acest proces mi-a oferit ocazia să învăț foarte multe, întrucât, prin debug constant, am început să înțeleg mai bine cum pot să aduc la viață o pagină exact așa cum mi-o imaginez.

Totodată, acum am o înțelegere mult mai clară a conceptelor esențiale pentru construirea unui proiect folosind TypeScript și HTML. Crearea de elemente HTML reutilizabile, care pot avea stări și caracteristici diferite în funcție de variabilele atribuite, mi-a fost de mare ajutor pe parcursul proiectului. Acest lucru nu doar că mi-a eficientizat procesul de lucru, dar a redus semnificativ cantitatea de cod duplicat.