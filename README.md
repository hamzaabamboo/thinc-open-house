# Thinc Open House Frontend Workshop

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

before you do anything you need to have `node` version 6.0+ installed !

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

We'll be working on a shop item listing and learn all the basic concepts of the web ! Try ignore everthing else and focus on the basics !

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

Interactivity of the website are all controlled by `JavaScript`. In vue, almost everything is Javascript. 

Assuming you know some basics of Javascript (variables, functions, if/else, for/while, object) lets get started !

Inside vue, javascript part are in `<script>` tag.  
Let's go and see javascript part of [HelloWorld.vue](./src/components/HelloWorld.vue)  

We'll focus on `data()` and `methods` part of this file.  
You can think of `data()` as variables you can put into HTML content or use it in javascript, it could be dynamic content.  
Also, you can think of `methods` as functions you can perform which may change these variables.

If you try click add (+) button, you can see number and the price going up!
The html tag for the button is as follows

```html
<button @click="quantity += 1">+</button>
```

It turns out that `@click` is a special for attribute for vue, it could be a short function (like this) or a method inside `methods`

Data part of this file :

```js
data() {
    return {
        quantity: 1,
        price: 5.0,
        activeImage: "art1"
    };
}
```

As you can see, you can put what ever you like as a key-value pair sperated by commas.  
To change value inside `methods` you can do like this

```js
methods: {
    changeImage(name) {
        this.activeImage = name;
    }
}
```

We use keyword `this` in front of the variable name to indicated that it's a class variable.  
These variables are reactive, which means that when its value is changed, Every place that used the variable changes too !
To put this `data()` inside html template you can use double curly braces and put the variable inside

```html
<h1>{{ title }}</h1>
```

You activity is to make the Add-to-Cart button do something.  
Some suggestion are confirmation modal or do something crazy like breaking the web. Let your imagination go wild !  
You can ask seniors for guidance too if don't know how to do.

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
