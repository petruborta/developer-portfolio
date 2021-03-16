# DEVELOPER PORTFOLIO

![Developer portfolio above the fold section](https://github.com/petruborta/developer-portfolio/blob/master/assets/images/developer-portfolio-720w.jpg?raw=true)

Single-page website for showcasing projects, skills and information about myself.

## Table of contents

* [Demo](#demo)
* [Technologies](#technologies)
* [Setup](#setup)
* [Status](#status)
* [Contact](#contact)

## Demo

Here is a working live demo: <https://petruborta.com//>

## Technologies

* Development
  * [HTML](https://www.w3schools.com/html/)
  * [JavaScript](https://www.w3schools.com/js/)
  * [SASS](https://sass-lang.com/)
  * [Contact form API](https://github.com/petruborta/contact-form-api)
  * [AWS SES](https://aws.amazon.com/ses/)
  * [AWS Lambda](https://aws.amazon.com/lambda/)
  * [AWS CloudFormation](https://aws.amazon.com/cloudformation/)
* Production / Hosting
  * [AWS S3](https://aws.amazon.com/s3/)
  * [AWS Route 53](https://aws.amazon.com/route53/)
  * [AWS CloudFront](https://aws.amazon.com/cloudfront/)
  * [ACM (Amazon Certificate Manager)](https://aws.amazon.com/certificate-manager/)

## Setup

* Follow the instructions on [how to create a contact form API](https://github.com/petruborta/contact-form-api.git)
* Once you're done with the contact form API, clone this repository to your local machine

  `$ git clone https://github.com/petruborta/developer-portfolio`

* Create `js/secrets.js` and replace `"YOUR_SERVICE_ENDPOINT"` with your endpoint logged to the console after deploying the contact form API

```javascript
export const CONTACT_FORM_API_ENDPOINT = "YOUR_SERVICE_ENDPOINT"
```

* In VS Code install _Live Sass Compiler_ extension to compile `.scss` files to `.css`
* In VS Code install _Live Server_ extension to view the project

## Status

Project is: _finished_

## Contact

Created by [@petruborta](https://petruborta.com/) - feel free to contact me!
