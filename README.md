[![Build Status](https://travis-ci.org/khalilgharbaoui/code-school-reviews-back-end-api.svg?branch=master)](https://travis-ci.org/khalilgharbaoui/code-school-reviews-back-end-api) [![Code Climate](https://codeclimate.com/github/khalilgharbaoui/code-school-reviews-back-end-api/badges/gpa.svg)](https://codeclimate.com/github/khalilgharbaoui/code-school-reviews-back-end-api) [![Test Coverage](https://codeclimate.com/github/khalilgharbaoui/code-school-reviews-back-end-api/badges/coverage.svg)](https://codeclimate.com/github/khalilgharbaoui/code-school-reviews-back-end-api/coverage)

#Code School Reviews! Front-end

##ReactJS front-end client + Rails + TDD + RESTful JSON API back-end

###Info:

I've build this code school review application on my own as a [homework assignment] (https://slack-files.com/files-pri-safe/T0K533E5A-F0P70KPEE/iii-restaurant-reviews.pdf?c=1458956834-0188c61452d9840db3f6de2088dce72ebe748272) during my developer traineeship at Codaisseur.

The test driven (TDD), RESTful API Back-end is made in Ruby on Rails serving a JSON format. It utilizes Puma for HTTP Concurrency and CORS middleware, that allows it to have cross domain AJAX calls with the ReactJS Front-end client, the HTTP requests are preformed asynchronously trough jQuery AJAX. Checkout the live demo's here: [Front-end demo](http://codeschoolreviews.bitballoon.com) | [Back-end demo](http://codeschoolreviews.herokuapp.com)

####Resources used:

Front-end:

- JavaScript(ES2015), ReactJS
- jQuery, AJAX
- React Router
- SCSS, Bootstrap (CSS3 Animations)

Back-end:

- Ruby, Ruby on Rails, JSON
- Carrierwave & Carrierwave Base64 (for image upload & processing)
- Puma (Concurrency)
- CORS (Middleware)
- Rspec (TDD)
- Travis CI & Code Climate (Continuous integration)


####TODO:

- User authentication.
- Social Media Integration.

### Installation
Front-end:

```bash
npm install
npm start
open http://localhost:3001
```

Back-end:
```bash
bundle install
rails s
open http://localhost:3000
```

![code school reviews](https://raw.githubusercontent.com/khalilgharbaoui/code-school-reviews-back-end-api/master/codeschoolreviews.png)
