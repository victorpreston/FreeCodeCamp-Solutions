# Visualize Data with a Heat Map

### Certification Project

[Live Site](https://heatmap.certified2003.repl.co)

Objective: Build an app that is functionally similar to this: https://heat-map.freecodecamp.rocks.

Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs we need. Give it our own personal style.

We can use HTML, JavaScript, CSS, and the D3 svg-based visualization library. Required DOM elements are queried on the moment of each test. If we use a frontend framework (like Vue for example), the test results may be inaccurate for dynamic content. We hope to accommodate them eventually, but these frameworks are not currently supported for D3 projects.

- User Story #1: My heat map should have a title with a corresponding id="title".

- User Story #2: My heat map should have a description with a corresponding id="description".

- User Story #3: My heat map should have an x-axis with a corresponding id="x-axis".

- User Story #4: My heat map should have a y-axis with a corresponding id="y-axis".

- User Story #5: My heat map should have rect elements with a class="cell" that represent the data.

- User Story #6: There should be at least 4 different fill colors used for the cells.

- User Story #7: Each cell will have the properties data-month, data-year, data-temp containing their corresponding month, year, and temperature values.

- User Story #8: The data-month, data-year of each cell should be within the range of the data.

- User Story #9: My heat map should have cells that align with the corresponding month on the y-axis.

- User Story #10: My heat map should have cells that align with the corresponding year on the x-axis.

- User Story #11: My heat map should have multiple tick labels on the y-axis with the full month name.

- User Story #12: My heat map should have multiple tick labels on the x-axis with the years between 1754 and 2015.

- User Story #13: My heat map should have a legend with a corresponding id="legend".

- User Story #14: My legend should contain rect elements.

- User Story #15: The rect elements in the legend should use at least 4 different fill colors.

- User Story #16: I can mouse over an area and see a tooltip with a corresponding id="tooltip" which displays more information about the area.

- User Story #17: My tooltip should have a data-year property that corresponds to the data-year of the active area.

Here is the dataset we will need to complete this project: https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json

We can build our project by using this CodePen template and clicking Save to create our own pen. Or we can use this CDN link to run the tests in any environment we like: https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js

Once we're done, submit the URL to our working project with all its tests passing.