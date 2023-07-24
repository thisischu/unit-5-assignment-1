# Assignment 1: DOM Manipulation Practice

## Before you start
This is exciting! But a lot has changed! You're now dealing with a GUI and the tests look different, and there are so many new Browser APIs and DOM methods to learn.

We'll guide you through a lot of these changes, but it's important for you to know that our assignments are the *minimum* you should know. There's just so much out there, it's impossible to cover it all here and in lectures. So when questions ask you to look up extra information, even if they don't use it...learn about those techniques.

## New testing
You'll notice there are no imports or exports, the file just *runs*. That's not forever, believe us, we'll teach you how to make front end modules. But not yet! First we're focusing on core web skills.

What that means is the tests are more general *and* more specific. General because we can't run individual functions right now, but specific because they'll look for *exact* matches on things like id and class names. Just because your test page looks right, doesn't mean the tests will pass. Read them carefully and make sure you have *exactly* what it's looking for.

Also, we give you `modify.html`, but the tests don't use it directly. We made a copy so we could randomize the data. Use `modify.html` as practice, but do yourself a favor and *do not edit it*. We want to make sure your test html matches it.

## Prompts
As we said, there's so much to learn! So our question prompts are going to tell you what they're looking for, but *also* lead you to resources to check out. Maybe you learned what you needed to in lecture, but maybe not! Follow the links to learn what you need.

## To get func-y or not?
Since we can't call any of your functions directly, there will be the temptation to just write all your code in the global space and be unorganized. **Do not give in.** Well structured code is *critical* to working on a team.

The pattern we're going to adopt for now is the `runner pattern`, which you may remember from some early labs. It's where you write small focused functions, and then we call them in a larger function. In this case `main`. We've outlined this pattern for you already so you can see it.

# CRUD to the rescue
Feeling overwhelmed by all the things the DOM can do? Whenever you're learning a new piece of tech, a helpful guiding light is CRUD. Can you create an element? Read data from an element? Update an element? And finally, can you delete an element?
Those actions (and a little more) are going to be our goals today.

Alright, let's get going!

# Question 1: getMainHeadingText - modify.js (CREATE)
In the function `getMainHeadingText`, use the `querySelector` to grab the `H1` by it's `id`. Then, console.log the text of the element.

https://www.w3schools.com/jsref/met_document_queryselector.asp (read all of this, its a good one)
https://www.w3schools.com/jsref/prop_node_textcontent.asp

# Question 2: getAllMainText - modify.js (CREATE)
In the function `getAllMainText` you'll need to grab *all* the elements with the class of `main-text`. Then, iterate through them so you can build a new string value. The new string value should be all the individual element's text contents, separated only by commas, no spaces! Finally, log that new string to the console.

https://www.w3schools.com/jsref/met_document_queryselectorall.asp
https://stackoverflow.com/a/3199627
(For this one, look at the **other cases section**, as you can see there are a lot of possible solutions!)

# Question 3: setSubtitleText - modify.js (UPDATE)
Now we're getting into grabbing *existing* elements, and updating them in some way. For this one, use the `setSubtitleText` function, and grab the subtitle `h2` element somehow (maybe `id` or the tag name?) and then update it's empty text content to say:

```
This is a subtitle!
```

# Question 4: modifyDivClassList - modify.js (UPDATE)
Editing classes is going to be a *super* common task for you. So to do this correctly learn about the `classList` element property. We'll only need it's `add` and `remove` methods here, but it has a lot of useful ones, like `toggle`.

Anyway, inside `modifyDivClassList`, we'll edit out `#modify-classes` div. It has 2 classes on it. All we want to do is remove `bad-class`, and then add `new-class`. That means there will still be 2 classes on it by the time you're done.

`classList` allows us to edit only the class names we need to, without touching the rest. Get good with it!

https://www.w3schools.com/jsref/prop_element_classlist.asp

# Question 5: add H2 - modify.js (CREATE)
In order to create a new element, you should usually follow this pattern:

1. create a new element with `document.createElement`
2. modify that element however you want
3. add it to the DOM with some `append` type method to a parent element

The `addH2` function should append a new `H2` element, with an `id` of `h2-test` and text value of `Another one!`, to the end of the `body` tag.

https://www.w3schools.com/jsref/met_document_createelement.asp
https://developer.mozilla.org/en-US/docs/Web/API/Element/append

# Question 6: removeOldInfo - modify.js (DELETE)
Finally, there's an old `p` tag that we no longer want. Use the `removeOldInfo` function to grab it by its id `old-info`, and then remove it.

https://www.w3schools.com/jsref/met_element_remove.asp

# Question 7: makeAlphabet - modify.js
Here is where things get interesting. We're going to do a bunch of stuff!

First, notice that there's a data attribute called `num-letters` on our alphabet list `ul` element. Read from that using JS to get the number of letters we want to add.

Then, using our create, update, add pattern, loop through and add `li`s with text content of `A is letter #1 in the alphabet`. No need to put `id`s or `class`es on the `li`s. But they *must* be children of the `#alphabet` `ul` tag.

This one is tricky, so we'll be helpful. If the dataset attribute is 3, then the list in the html would print:

```
A is letter #1 in the alphabet
B is letter #2 in the alphabet
C is letter #3 in the alphabet
```

https://www.w3schools.com/tags/att_data-.asp

# Question 8: makeBio
Ok, so for dynamic information or user entered info, the create, update, add pattern is safest. However, what if you have a big blob of HTML that *you* know is safe, and you want to insert it? Try the `.innerHTML` property.

The `makeBio` method should set the inner html of the `#my-bio` div to be this exactly:

```html
<h2 id="bio-heading">About Me</h2>
<p>My name is Zo and I like learn cool new things</p>
<h3 id="hobby-heading">My Hobbies</h3>
<ul>
  <li>Running</li>
  <li>Reading</li>
  <li>Writing</li>
</ul>
```
https://www.w3schools.com/jsref/prop_html_innerhtml.asp

Just be *careful* with `innerHTML` and use it wisely! It can be a big help, or it can *super* hurt you. Never use it with unescaped user generated input.

# Question 9: Make it from scratch!
So that's all good and all, but we want to be sure that you know how to set up your *own* projects as well! To that end, you must make in the `src` directory an `index.html` file and an `index.js` file.

The `index.html` file should be an html document, but nothing in the body except a script tag that links to your `index.js`. Now, in whatever manner you want, your `index.js` file must:

- add an `H1` to the `body` with an `id` of `main-heading` and text of `Hello world!`
- add a `p` tag with an `id` of `main-text`, a class of `boring-text`, and text that reads "Look I'm some text!"

This is important, you have to be able to create new documents and link your scripts to them correctly.

# BONUS - next steps
Like we said, there's so much out there for you to learn that we won't have time to cover in class. Check out [videos like this one](https://www.youtube.com/watch?v=v7rSSy8CaYE) which talk about how you can get around the dom effectively.
