learning the principles of responsive, content-driven, mobile-first design, you can provide users with a good experience no matter their viewport dimensions and pixel density.

Responsive means creating layouts that can dynamically respond to the dimensions of the user’s viewport. The responsive design solution is to change the layout and presentation of the navigation bar when users are viewing it on small screens. 

Content-driven means recognizing that our users are real people with real goals. Your challenge is to enable users to access and consume (or produce, in some cases) the content they expect to work with on our page. For instance, the main reason people visit airline websites is to purchase or manage tickets.

Mobile-first means that when designing web pages, and also when coding them up, we start with the mobile experience. Mobile devices have the smallest screen size, and by designing for them first, with a content driven approach, we ensure that our web site has "good bones". The idea is that if we can make our content work first within the small confines of a mobile screen, it is fundamentally working.

Mobile-first also means respecting that many web users have limited download bandwidth, and might pay by the megabyte. If a user is accessing a page on a 250px wide screen, there's not much point in them downloading a 2000px wide image which will just be scaled down by the browser anyways.

HTML and CSS provide three primary tools that we can use to act on these principles: media queries, fluid grids, and responsive images.
 
Media queries are a tool that CSS gives us to apply blocks of CSS rules to only certain viewports.

```
@media only screen and (min-width: 640px) {

  .foo {
    /* do something to
    override default settings*/
  }
}

@media only screen and (min-width: 800px) {

  .foo {
    /* do something to
    override settings at previous threshold settings*/
  }
}
```

Responsive images are the final technical side of responsive design with respect to HTML and CSS. Browser support is still inconsistent and best practices are still emerging. Know that HTML5 provides elements for implementing responsive images (<picture>, <sourceset>, and <sizes>). If you'd like to read more about this topic later, this [List Apart article](https://alistapart.com/article/responsive-images-in-practice) is a good starting point.

Know that some of the characteristic behaviors of responsive sites can't be achieved without JavaScript -- for instance, the classic burger icon on the top right of a mobile navigation bar that you can click to get a dropdown of navigation links.
