

VIGTIGT: 
HUSK at notere i rapporten, hvis du ændrer i backend/API - hvad du ændrer og hvorfor. 
- Og HUSK så også at aflevere din version af backenden.

----------------------------------------------------------------------------------------------------------------
------ START BACKEND: ------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------

Produktion (hvis du ikke retter i backend/API): 
    npm run start

Developer (foretrukken hvis du skal rettes i backend - trækker på nodemon): 
    npm run devStart

Projektet kører på PORT 5333 - dvs. http://localhost:5333

Projektet benytter MongoDB - tjek .env-filen for at tilrette evt. path/sti til din MongoDB


----------------------------------------------------------------------------------------------------------------
------ API - POSTMAN -------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------

BRUG POSTMAN: til at teste API'et - både GET, POST, PUT, PATCH og DELETE
    - brug især Postman når du når til POST, PUT, DELETE - da det er her, du aflæser hvordan API'et forventer at modtage data

Filer til import i din egen Postman kan hentes i mappen: _INSTALLATION/Postman til import

----------------------------------------------------------------------------------------------------------------
------ BILLEDER ------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------

Bemærk, at du kan få en oversigt over endpoints og image-paths her (forudsat at serveren er startet):
    
    http://localhost:5333

REQUEST: Billederne hentes fra frontend fx med følgende adresse (hvis du ikke har ændret på PORT'en):

    About:          "http://localhost:5333/images/about/"

    News:           "http://localhost:5333/images/news/"
    
    Service:        "http://localhost:5333/images/service/"
    
    Slider:         "http://localhost:5333/images/slider/"
    
    Team:           "http://localhost:5333/images/team/"
    
    Testimonial:    "http://localhost:5333/images/testimonial/"

UPLOAD: Upload af image-filer (post og put) sendes til en af mapperne (afhænger af route): 

    /public/images/about
    /public/images/news
    /public/images/service
    /public/images/slider
    /public/images/team
    /public/images/testimonial
