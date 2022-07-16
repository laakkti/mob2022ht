Long story short:

Mites jos danfo.js työhön tekee serviceworkerin!!!!

Gateway devicd can have many kind of sensors connected for example weather bases pressure, temp, wind speed etc. 
Possible we want to know something about the device, battery level, signal strengt, location...

Top technologies Google sign in for use/using google "services"

The basic idea (not make sense) but there are mobile devices around the word many places, they measure something and we can ask from the device data via email.
Every device has own email-address.
The answer/reponse for the query is send via/by email or socket, require email should have ip of the device for a socket
In RN websocket in inside so it not nedd to import...
How do we know or mark the socket, we will add e.g. id for socket, this id woill be send to gtw via email json-type of content

To get socketio-connection possible available we need server for that 

In the same address (HEroku) we have a webpage to ask mobiledevice invo via email and see the answers on the page

React:
"MapView"
https://www.npmjs.com/package/google-map-react




https://www.npmjs.com/package/semantic-ui-react

npm install semantic-ui-react semantic-ui-css 


index.html (em. npm install semantic-ui-css on turhaa ei toimi mutta seuraava kyllä)
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"></link>


Email-form:
There is list of mobile-devices (gateways) (should be in database but npw in the json -file)
File contains name of the device and the email-address which posts it reads. 
In form these data is filled in the fields, not modified just in test case. 


#### Send Email:
gtwmobmaster@gmail.com
Rytky#2022

https://console.cloud.google.com/welcome?project=jamkmob-356222







Weather data from location (tästä  oli esimerkki jokin palvelu muuttaa lovationin paikannimeksi jne..)

Ionicin valinta tähän ei ollut se, että lähdettäisiin tekemään uutta vaan 
olemassa olevan react osvelluksen muuttaminen mobiiliksi.