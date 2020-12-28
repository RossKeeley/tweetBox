/*
DESCRIPTION:
We are making a Social Media Character Counter! We want to display the available characters LEFT.
Using the Keydown event should help you here. When the characters reach 20 and below, we want them to turn red. So we will use Javascript to add that styling to it. If the characters drop below 0, we want the button to be disabled BUT if there are only 0 characters left, we should still be able to tweet.

Keydown, addEventListeners, add and remove a class

Tips:
1. We want to create our variables first
2. Add the event listener
3. Look in the CSS to see what could be used to disable the button
4. Create conditions to check the count of the characters

Let your imagination run wild! You can use the provided styling or you can take it to another level!
Make sure you share your solution using the "Share solution!" button at the top!
There will be multiple winners that I select!

Follow me on twitter @DThompsonDev so you can find who who is selected! I hope it's YOU!

*/
// The input in the text box
var input = document.getElementById("string");
// The character counter
var characterCount = document.getElementById("counterFooter");
// The button
var tweetButton = document.getElementById("btn");
// Event is every time a pressed key is lifted up
input.addEventListener("keyup", () => {
    // The string in the input text box
    var text = input.value;
    var countDown = 140 - (input.value.length);
    // Changes the color of the character count if the remaining number of characters is 20 or less
    countDown <= 20 ? document.getElementById("counterFooter").style.color = "red" : document.getElementById("counterFooter").style.color = "white";
    // Sets the new character count after each keyup event
    characterCount.innerHTML = countDown + "/140";
    // Disables the tweet button if character limit is exceeded
    countDown < 0 ? document.getElementById("btn").disabled = true : document.getElementById("btn").disabled = false;
});
// Resets the input value to an empty string, resets the character count, and changes the character count color back to white
tweetButton.addEventListener("click", () => {
    input.value = '';
    characterCount.innerHTML = "140/140";
    document.getElementById("counterFooter").style.color = "white";
})
