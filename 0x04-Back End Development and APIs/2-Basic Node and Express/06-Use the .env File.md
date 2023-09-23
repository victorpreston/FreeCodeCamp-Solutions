# Use the .env File

The .env file is a hidden file that is used to pass environment variables to your application. This file is secret, no one but you can access it, and it can be used to store data that you want to keep private or hidden. For example, you can store API keys from external services or your database URI. You can also use it to store configuration options. By setting configuration options, you can change the behavior of your application, without the need to rewrite some code.

The environment variables are accessible from the app as process.env.VAR_NAME. The process.env object is a global Node object, and variables are passed as strings. By convention, the variable names are all uppercase, with words separated by an underscore. The .env is a shell file, so you don’t need to wrap names or values in quotes. It is also important to note that there cannot be space around the equals sign when you are assigning values to your variables, e.g. VAR_NAME=value. Usually, you will put each variable definition on a separate line.

---

Let's add an environment variable as a configuration option.

Create a .env file in the root of your project directory, and store the variable MESSAGE_STYLE=uppercase in it.

Then, in the /json GET route handler you created in the last challenge access process.env.MESSAGE_STYLE and transform the response object's message to uppercase if the variable equals uppercase. The response object should either be {"message": "Hello json"} or {"message": "HELLO JSON"}, depending on the MESSAGE_STYLE value. Note that you must read the value of process.env.MESSAGE_STYLE inside the route handler, not outside of it, due to the way our tests run.

Note: If you are using Replit, you cannot create a .env file. Instead, use the built-in SECRETS tab to add the variable.

If you are working locally, you will need the dotenv package. It loads environment variables from your .env file into process.env. The dotenv package has already been installed, and is in your project's package.json file. At the top of your myApp.js file, add require('dotenv').config() to load the environment variables.

---

### Solution Link: [Click Here](https://boilerplate-express.certified2003.repl.co)
