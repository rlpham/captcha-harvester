# captcha-harvester
A local tool that extracts captcha tokens from Google's reCAPTCHA V2 widget.

### Tech Stack
- NodeJS  
- Express  
- Bootstrap  
- JQuery 

### Installation
1. Download & Extract ZIP
2. `cd` into directory
3. Run `npm install`
4. Run `npm start`  
5. Open up chrome and navigate to `localhost:8080`

### Customizable
- Site-Key: Currently it is supporting a test site-key provided by google.  
  - Generate a site-key here: https://www.google.com/recaptcha/admin
  - Replace `data-sitekey` value with generated site-key in `index.html`
