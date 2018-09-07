# Thinc Open House Frontend Workshop

- [Thinc Open House Frontend Workshop](#thinc-open-house-frontend-workshop)
    - [Why Vue ?](#why-vue)
    - [Setting it up](#setting-it-up)
- [Activity](#activity)
    - [Part 1 : Let's understand this page layout](#part-1--lets-understand-this-page-layout)
    - [Part 2 : Let's style this page and make it yours](#part-2--lets-style-this-page-and-make-it-yours)
    - [Part 3 : Let's finish this up with interactivity](#part-3--lets-finish-this-up-with-interactivity)
- [Other commands](#other-commands)
    - [Compiles and minifies for production](#compiles-and-minifies-for-production)
    - [Lints and fixes files](#lints-and-fixes-files)


Welcome to Thinc First Code !
Today we'll be making your own shop-like web page using `vue` !!!

## Why Vue ?

Vue is a very good modern framework for beginners. It has a very low learning curve and quite nice to use.

## Setting it up

To set this project up first you have to clone this project (or download from github)

Then you will have to install all dependencies with

```bash
$ npm install
# or
$ yarn
```

Then, to start the development server, type the following command

```bash
$ npm run serve
# or
$ yarn serve
```

Now, once you got everything setted up, Let's get started !!!

# Activity

We'll be working on a shop item listing and learn all the basic concepts of the web !

## Part 1 : Let's understand this page layout

When we're talking about websites in general we'll be using `HTML`, `CSS` and `JavaScript`. In this part, we'll be focusing on `HTML` !

First, Let's go to [HelloWorld.vue](./src/components/HelloWorld.vue)

HTML is a markup language used to label various parts of you website. Its format is like this

```html
<tag arribute="value">Content</tag>
```

You can nest HTML tags however you like. Think of it as boxes and box in a box !  
Here are some sample tags  

| Tag name | Meaning          | Display type |
| -------- | ---------------- | ------------ |
| h1 - h6  | Heading 1 - 6    | inline       |
| p        | Paragraph        | block        |
| a        | Anchor (link)    | inline       |
| strong   | Bold             | inline       |
| i        | Italic           | inline       |
| small    | small text       | inline       |
| span     | inline-container | inline       |
| div      | block-container  | block        |
| ul       | unordered list   | block        |
| ol       | ordered list     | block        |
| li       | list item        | block        |
| button   | button           | inline       |
| input    | input field      | iniine       |
| img      | image tag        | inline       |


In `Vue`, all our `HTML` contents are located inside `template` tag. A vue file only have a `template` tag.   
Now let's do something with the webpage  
You may see that this web looks really weird  
Try look for this part  

```html
<div class="col prod-detail">
    <!-- lots of stuff -->
</div>
```

Can you try to identify which tag corresponds to which element on the web ?

If so, try move the ordering to make it look right !

For now we used lorem ipsum random text, Feel free to change the contents in each tags to be your own text/ product.


## Part 2 : Let's style this page and make it yours

After we learned HTML, we'll style this page with `CSS`.  
`CSS` is a styling language which we'll be writing styling rules in.  
Here is the syntax of it.  

```css
<selector> {
    rule: value;
}
```

These rules will be applied to all elements that matches this rule.
There are three kinds of selectors which you'll be using alot.

| Syntax     | Type          | Definition                                                     | Example                                  |
| ---------- | ------------- | -------------------------------------------------------------- | ---------------------------------------- |
| tagname    | tag selector  | select a html tag                                              | p -> `<p>Content</p>`                    |
| .classname | class elector | select an element which have attribute class name as specified | .header, -> `<div class="header"></div>` |
| #id        | ID selector   | select an element which have attribute id as specified         | #img-1 -> `<img src="..." id="img-1" />` |

You may notice that `classes` and `ids` are very similar. The difference is that. `class` can belong to many elements in a file while `id` only belong to one element in a file. i.e. it is unique.

There are lots more selectors you can research online ( no need to remember it all )

Moreover, there are many styling rules you can use in css. Newer ones are very cool too !

In our [HelloWorld.vue](./src/components/HelloWorld.vue) file, CSS content will be inside `style` tag.

Try change some styles of an element such as fonts, text-size, color, background-color and more.

CSS is actually a big field in web development and they are many things to explore !

## Part 3 : Let's finish this up with interactivity

# Other commands

## Compiles and minifies for production

```js
npm run build
```

## Lints and fixes files

```js
npm run lint
```
