# Responsive Design basics
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


## Responsive Grid system

we'll describe the behavior of a standard 960px, 12 column grid system. After that we'll view an implementation of our grid using the CSS float property, which is one of three common solutions to the grid layout problem. 

### classic grid: 960px, 12 columns

The entire 960px grid gets wrapped in a container whose max width is 1000px, and the 960px grid gets centered in this container. This ensures that even if you're viewing the page with your browser window (aka, viewport) at 1000px, the overall grid will get 20px left and right padding from the edge.

Each row in the grid consists of 12 columns. Each column is 60px wide, and columns are separated by 20px gutters. So 12 total columns with gutters is 12 * 60 + 12 * 20 = 960px wide. That's twelve 60px columns and twelve 20px gutters. Eleven of those gutters come in between columns, and the remaining gutter is accounted for by the half gutters on the left and right of the first and last columns, respectively.

Our grid system should give us an easy way to make content take up 1, 2, 3, etc. columns of width.

Another feature of our grid is that column width should be fluid. This means that the columns should scale in size relative to the current width of the row. When the row is at its max width of 960px, 1 column is equal to 60px. That can be expressed as a percentage: 60/960 = 0.0625 which means that the width of a single column is 6.25% of its parent row. Fluid columns scale up or down with row width.

The same fluid behavior is also true of the gutters in our grid. We saw that at the full 960px width, the gutter is 20px wide. The gutter can be expressed as a percentage of the parent row, then, as: 20/960 = 0.02083333333.. ~= 0.0208 which is 2.08%.

It should also be possible for us to specify a minimum width below which the grid ceases to behave as a fluid grid. If the user's viewport is 320px wide, a 1-column of content would be 320px * 6.25% = 20px;any content in a 20px row would be unreadable. We need to specify that if the viewport is below a minimum width, stack the columns one on top of the other, and have them take up 100% of their parent element's width.

### A simple implementation using the float property

There are three main approaches to implementing the grid design described above... 

1. use the display: inline-block; along with variable, percentage based widths on column elements in order to get them to line up side by side. 

2. Another approach is to use the new flexbox feature.

3. The third implementation uses percentage based widths for columns and uses float: left; to get columns to line up with one another. We're teaching this approach because compared to flexbox it's guaranteed to be supported in all browsers. And compared to the display: inline-block; solution, it's easier to grasp. It's a time tested implementation, and is the approach that several popular CSS frameworks use (for instance, the popular Twitter Bootstrap).

demo page that uses a float-based CSS grid - [live version](https://thinkful-ed.github.io/responsive-grid-example-and-challenge/)

Note that we're putting our styling for everything aside from the grid (that is, our main content) inside the main.css file. This is a good practice to follow: store your grid in a stylesheet whose only purpose is to set the rules for your grid. This code can be reused across sites, and it's easier to manage when it's separate from CSS whose job is to style content that is unique to a given page.

Looking at float-grid.css, the first thing to notice is that box-sizing: border-box gets applied to all body elements. We discussed this setting earlier in this unit, but if you need a refresher, recall that when box sizing is set to border-box, any explicit width settings are guarantees that the element will take up no more than that width. If we didn't have this setting, our grid would behave unpredictably.

Next we have the ruleset for the .row class:

```
.row {
  max-width: 1000px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
}
```

As you can see, rows get automatically centered in their parent container. They have a max-width of 1000px, and they get 20px of left and right padding (which, as we said in the previous section, is necessary to ensure that our content doesn't come right up to the edge when the viewport is at small sizes).

Since we'll be using the .row class on divs, which are by default block level elements, our div.rows will behave how one would expect, each keeping to its own horizontal line.

Now what some people think of as the ugly side of the float solution, some ::before and ::after rules for our .row class.

```
/* Clearfix */
.row::before,
.row::after {
  display: table;
  content: '';
}

.row::after {
  clear: both;
}

```

Accomplishes two objectives.

1. ruleset forces the height of each row to expand to the height of its tallest child element. That means that rows will vertically contain all their content.

2. ruleset, with clear: both;, is a clearfix, and it ensures that any content that comes after the row will act as though the preceding row was in the normal flow, instead of butting up against the top of the row container.

Next we have a set of rules for our column classes:

```
.col-3, .col-4, .col-6, .col-12 {
  float: left;
  padding-left: 1.04166666%;
  padding-right: 1.04166666%;
}
```
- all columns should float to the left, displaying side by side as long as there's enough space in their parent container. Regardless of its individual width (that is, a 3-wide vs. a 6-wide column), each column gets a constant, percentage based left and right padding, which gives the gutter behavior we specified in the design section above (and note that the way we implement the 2.08% gutter discussed above is by splitting it in half on the left and right).

```
/* Mobile defaults */
.col-3, .col-4, .col-6, .col-12 {
  width: 100%;
}
```

This specifies that by default, columns will take up 100% of their parent's width, which accomplishes the stacking behavior for columns at narrow viewport widths.

Finally, we have a media query that overrides our default styling for column widths on screens that are 640px and wider:

```
/* Non-mobile, grid */
@media only screen and (min-width: 640px) {
  /* 3 columns, 3/12 in % */
  .col-3 {
    min-width: 25%;
  }

  /* 4 columns */
  .col-4 {
  }

  /* 6 columns */
  .col-6 {

  }

  /* 12 columns */
  .col-12 {
  }
}
```
When the viewport is wider than 640px, a 3-width column should take up 25% of its parent row element's width. Since we're using box-sizing: border-box;, that width value is inclusive of the percentage based padding we saw in the earlier ruleset for left and right padding on column classes.
