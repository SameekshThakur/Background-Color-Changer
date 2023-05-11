# Background-Color-Changer

Background Changer is a WebPage built using pure JavaScript. With the help of Document Object Model (DOM) an event listner is added in the button element of Html file. When this button is clicked, the background color of the complete webpage changes randomly on every click.

In Javascript two functions are prepared: randomColor() and ChangeBgColor(). The randomColor() return a random hexadecimal color code value while inside we initialize ChangeBgColor() with: document.body.style.backgroundColor = randomColor().

Now by creating a id of the button element we use addEventListner() with it so on every clcik of the button a new Background Color is generated.
