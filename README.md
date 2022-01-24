# spiel-solutions

This is a CRUD application built in MERN over the course of a week as part of a team project at Coding Dojo. 
We built a sales focused dynamic script building and reading platform that can be used to guide a salesperson through a pitch,
by dynamically serving them appropriate snippets of a sales script(spiels) based on prospect responses. 

One of the more interesting challenges of this project was figuring out how to build relationships between our spiels in MongoDB.
This was done by adding a page array and modal array to each spiel which could then be used to pull the appropriate objects through our API onto each page. 
