$React_E-Commerce
========

$React_E-Commerce will solve your problem of where to start with an e-commerce site,
by providing a basic start of how to do it easily.

Look how easy it is to use:

import it with git clone git@git.epitech.eu:/mehdi.rhoulam@epitech.eu/WEB_jamstack_2019

Features
--------

- Be awesome
- Make things faster
- Stylish json change ability
- Woocommerce pulgin used to ease Api use
- Wordpress CMS Headless usage

Installation
------------

Install $project by running:

    npm install
    npm start
    and you have a working dev server,
    for the production one you need to serve trought apache or nginx

Back-end
----------
For the Back-end we use Wordpress as a CMS (Content-Managing System)
First we have to use the Wordpress API-Key and the pulgin "gatsby-source-wordpress"
and also the pulgin "@pasdo501/gatsby-source-woocommerce" because i also use woocommerce,
Secondly, I used "Algolia", Algolia is a powerfull tool to do an query search on all "items",
it give working "structural algorythm" to do a search in a big database, and we can custom
field searched, so it is really powerfull and easy to deploy

Front-end
---------
For the Front-end I have used the pulgin "gatsby-plugin-postcss" and imported needed css in the file
"Gatsby-Broswer", I also used "Mdbbootstrap" for the style, and "Algolia" class for search bar,
To show my "back-end data" (Products) I used the function "createPage" using a "path" a "component"(page to render the view) and a context to have data to show,
to get data in the page now, after having created my page with createpage, and used slug to have a link, I query with a string "ID", so i can get a "Product" only if the "ID" is "eq"(Equivalent) to the one sent by the function "createpage",
so now i got the "Good" product, and so on i can use data to show what item we are in and his price...
for Paypal API, I used Paypal Sandbox I use my Sandbox "Key", to have an authorization and a panel log, and i use 3 function to know if i was successfull, a "onSuccess", an "onCancel", and an "Onerror"
to understand more the way it work you have to understand the way "Algolia" work,
Algolia can give a really good surprise to a beginner, cause it look first like a simple "search" query results finder, but it is more, it is a complete suits that can give you a working commerce site, or documentation site and it is really cheap for what it gives, you just need time to understand the way it work!

Theme
-------------
So to change the Theme you go in data you go in folder data and change value of theme by "1" or "2"

Contribute
----------

    Contribute by contacting our professionnal mail ;)

Support
-------

If you are having issues, please let us know.
We have a mailing list located at: mehdi.rhoulam@epitech.eu or bryan.lebar@epitech.eu

License
-------

The project is licensed under the dark web o_O.