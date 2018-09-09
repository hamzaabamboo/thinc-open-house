# Thinc Open House Frontend Workshop

View slides [Here !](https://hamzaabamboo.github.io/thinc-open-house/)

- [Thinc Open House Frontend Workshop](#thinc-open-house-frontend-workshop)
    - [Why Vue ?](#why-vue)
    - [Setting it up](#setting-it-up)
- [Activity](#activity)
    - [Part 1 : Let's understand this page layout](#part-1--lets-understand-this-page-layout)
    - [Part 2 : Let's style this page and make it yours](#part-2--lets-style-this-page-and-make-it-yours)
    - [Part 3 : Let's finish this up with interactivity](#part-3--lets-finish-this-up-with-interactivity)
- [Ending notes](#ending-notes)
- [Other commands](#other-commands)
    - [Compiles and minifies for production](#compiles-and-minifies-for-production)
    - [Lints and fixes files](#lints-and-fixes-files)


Welcome to Thinc First Code !
Today we'll be making your own shop-like web page using `vue` !!!

## Why Vue ?

Vue is a very good modern framework for beginners. It has a very low learning curve and quite nice to use.

## Setting it up

before you do anything you need to have [`node`](https://nodejs.org) version 6.0+ installed !

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

We'll be fixing a shop item listing and learn all the basic concepts of the web ! Try ignore everthing else and focus on the basics ! 

## Part 1 : Let's understand this page layout

When we're talking about websites in general we'll be using `HTML`, `CSS` and `JavaScript`. In this part, we'll be focusing on `HTML` !

First, Let's go to [HelloWorld.vue](./src/components/HelloWorld.vue)

HTML is a markup language used to label various parts of you website. Its format is like this

```html
<tag attribute="value">Content</tag>
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

For now we used lorem ipsum random text, Feel free to change the contents in each tags to be your own text/ product (change image too !).


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

Interactivity of the website are all done by `JavaScript`. In vue, almost everything is Javascript. It's very easy to make interactivity on the web with vue.

Assuming you know some basics of Javascript (variables, functions, if/else, for/while, object) lets get started !

Inside vue, javascript part are in `<script>` tag.  
Let's go and see javascript part of [HelloWorld.vue](./src/components/HelloWorld.vue)  

We'll focus on `data()` and `methods` part of this file.  
You can think of `data()` as variables you can put into HTML content or use it in javascript, it could be dynamic content.  
Also, you can think of `methods` as functions you can perform which may change these variables.

Let's see the quantity selection part of this page  

```html
<div class="button-group col">
    <button @click="quantity -= 1">-</button>
    <div class="text-display">{{ quantity }}</div>
    <button @click="quantity += 1">+</button>
</div>
```

If you try click add (+) button, you can see the quantity going up

We'll try to understand how it works. Let's start with The button

```html
<button @click="quantity += 1">+</button>
```

It turns out that `@click` is a special for attribute for vue, You can put a short function (like this) or a method inside `methods` and it will be called once the button is clicked.

Data part of this file :

```js
data() {
    return {
      quantity: 0
      // ...everything else
    };
  },
```

As you can see, the quantity is defined here, you can also add more variable too.

Next we'll look at the part we show the quantity on the page.

```html
<div class="text-display">{{ quantity }}</div>
```

We used double curly braces to interpolate (put) the variable inside html content !

These variables are reactive, which means that when its value is changed, Every place that used the variable changes too !

To change value inside `methods` you can do like this

```js
methods: {
    changeImage(name) {
        this.activeImage = name;
    }
}
```

We use keyword `this` in front of the variable name to indicated that it's a class variable.  

Your activity is to:

1. add the missing price and total amount.
2. Make the Add-to-cart button change the value of `showModal` to open the confirm dialog. 
3. Open [Modal.vue](./src/components/Modal.vue) and work with vue's `props`.

Most of the instructions are already in the file. Good Luck !  
If you happend to get stuck, try ask seniors around you !

# Ending notes

This activity is just a dip into Front-end world. There are lots more things you can explore and If you happend to get stuck anywhere google it out !

# Other commands

## Compiles and minifies for production

```js
npm run build
```

## Lints and fixes files

```js
npm run lint
```
