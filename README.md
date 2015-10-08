## Barebones Angular Grunt ##

This is just a sample template for use in web projects that want to utilize AngularJS, Material, and Grunt. 

The example provides a basic structure that you are free to modify to your own liking. 

# Requirements

Node - https://nodejs.org/en/

# Before Building

You only need to type:

    npm install

# Building

After installing Node and downloading the necessary packages, run:

    grunt

This will generate a "target/web" folder where your application is deployed. All JS files will have JSHint run on them, tests will be run, JS and HTML files will be compressed, SCSS will be converted into compressed CSS, etc. In other words, it's an optimized release of the project.

# Running Tests

    grunt karma

Tests will automatically be run as part of the normal build process, but if you want to run tests only just run the command above. Output will be to console and also the "target/test" folder. In that folder you'll see a junit XML as well as coverage reports.

# Developing

The normal build process does not generate source maps which makes debugging and development a bit difficult. If you run

    grunt watch

During development, then anytime you make a change it'll output to the "target/web" folder an uncompressed source-mapped file. This makes it very easy to build your app without jumping through hoops to support both a release specific build and a development build.

# License

https://github.com/dwatling/barebones-angular-grunt is distributed via The MIT License (MIT)

Copyright (c) 2015 Dan Watling

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
