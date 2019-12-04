# Random-Pass-Generator
Generate a random secure password.

First Commit = Created the HTML using checkboxes instead of alerts to gather data, as well as organzing in multiple different sub classes.

Learned the meaning of "const" in regards to creating a constant variable in Java

Created the Functions for which the code will be run on, basically the retrival functions of random numbers, characters and such. 

Learned the meaning of "fromCharCode" and how those codes align with actual characters. 

Studied the important difference between "var", "let" and "const". 
    - Use "let" when defining a var within a block sequence, that you dont want passed up to the parent. 
    - Use "const" when creating a var that you want neither updated nor redeclared. 

Newest Commit
    - Created the functions in which the java becomes responsive to the HTML page (check boxes, etc.)
    - Used Parse Int (to transfer a string into a number) and .checked (a preperty which identifies if a box has been checked or not) for the first time.

Challenges ahead
    - Need to determine a tructure in which the createPass function will not only grab elements based off wether or not they were checked, but that also randomizes the order of said elements. 

Also decided to scrap my CSS becuase CSS is garbage and it hates me (may use bootstrap framework instead)

createPass Function Logic Walkthrough

    1. Create a variable and function that create a password as a string (createPass)
    2. Pass the random functions through the variable 
    3. Create an array that passes the value of each box checked (use {} as an object literal to return boolean values)
    4. Used .filter method to loop through the array created. 
    5. Learned what Object.Value does, but also learned how to use => instead of a function operator (still not exaclty sure what it does but it seems to do alot of the work for you)

As of right now the Generator is complete in function, but still needs some added bonuses. 
    The first of which adding a working clipboard copy button. 

Semi-Final Commit (summary of project)
    1. Created the HTML and wrote the bare bones for the JavaScript including the variables and some functions
    2. Created the functions in which random of each character is taken.
    3. Used online tutorials especially leaned on "traversy media" to help with the logic of the final function pull, and displaying it on the screen.
    4. Lastly went in to make my final product look similar to the one posted in the homework folder, using CSS but not modifying my HTML too drastically.
    5. If anything is too be changed it will most likley be the addition of a "working" copy to clipboard button. 