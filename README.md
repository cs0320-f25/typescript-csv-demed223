# Sprint 1: TypeScript CSV

### Task C: Proposing Enhancement

- #### Step 1: Brainstorm on your own.
Functionality: 
Fails to recognize quotes for commas inside of the code  
Fails to distinguish between headers versus data

Extensibility
Could use an error object that makes it easier to identify the issues with the code 
Could have a set type (ex. Age) and possibly convert the code to said type if possible for each (string vs int) OR run an error if the incorrect type is inputted. (create a schema for the parser)


- #### Step 2: Use an LLM to help expand your perspective.

Mentions quoted fields with commas
The use of delimiters (such as tabs and semicolons)
Suggest specific return formatting using headers 
Providing useful errors rather than just exceptions 
Implementation of configurable objects 
Suggests making a debugging mode 
Automatic header detection 

- #### Step 3: use an LLM to help expand your perspective.

    Include a list of the top 4 enhancements or edge cases you think are most valuable to explore in the next week’s sprint. Label them clearly by category (extensibility vs. functionality), and include whether they came from you, the LLM, or both. Describe these using the User Story format—see below for a definition. 
        -As a user, I want the CSV parser to correctly handle quoted fields that contain commas so that data with commas in it could be parsed accurately. (Me/Functionality)
        -As a user, I want to define a schema using section headers with so that I can easily access data intuitively. (LLM/Extensibility)
        -As a user, I want the schema to specify specific types for each field so that parsed fields could distinguished and identifiable. (Me/Extensibility)
        -As a user, I want the parser to provide clear error messages that identify the problem so that I can debug easier. 

    Include your notes from above: what were your initial ideas, what did the LLM suggest, and how did the results differ by prompt? What resonated with you, and what didn’t? (3-5 sentences.) 
        Some of my initial ideas involved things that I tested in Task A, such as the failure of the parser to ignore commas in quotes and the parser not keeping all fields as the same type. Through this implementation, I also decided that the parser could use an error object to easily identify issues with the it. When I used the LLM, the results were somewhat redudant or didn't really apply to the parser that's already been implemented, such as fixing empty spaces which are not an issue. However, it specified formatting through the use of headers which I thought would be very clean and allow the user to easily read the data. For the most part, however, there weren't any signifcant differences when I changed the prompt that I asked the LLM. 


### Design Choices

### 1340 Supplement

- #### 1. Correctness
- A useful parser would easily be able to determine if a CSV has a header in order to make it easily readible. It will also properly handle quotes correctly, with commas in quotes not being separated by the parser. It should also be structurall consistent 
whenever it is called.
- #### 2. Random, On-Demand Generation
- A function like this would be very useful in testing different edge cases of the parser and could help ensure that the parser is structually consistent. For example, the CSV may seperate data using different characters such as semi colons or spaces which a good parser would be able to distinguish those cases. Also the use of large CSVs could be helpful in determining the validity of the parser, ensuring that it could be used in real datasets. 
- #### 3. Overall experience, Bugs encountered and resolved
#### Errors/Bugs:
#### Tests:
#### How To…
Overall, this Sprint felt a lot more open ended then most of my other CS assignments so far. In the past, we would receive specific instruction as to what Tasks we had to complete and how we were meant to do it. Here, the open ended approach confused me as I was unsure as to what the professor wanted me to do. However, after reviewing the lecture again, looking through ED, and looking through the Type handout, I realized that all that I needed to know was right in front of me. I was surprised by how simple the final code was based off of how much time I took to produce it. There were a lot of issues that I encountered, mostly due to my inexperience with TypeScript. One of the main issues was the handling of an error in my parser. While I originally wanted to create an error interface as we did in class, the parser had issues with returning that value. Then I pivotted to just returning the safeParsed CSV instead, along with the error message if it occurs, but I was not satisfied with the readability of the error message. Thus, I then decided to wrap the result in a similar form as the return of the safeParse in order to create a customisable error message. 
#### Team members and contributions (include cs logins):

#### Collaborators (cslogins of anyone you worked with on this project and/or generative AI): I used ChatGPT as I was struggling to print the errors correctly. It suggested wrapping the data in a similar format as how the safeParse returns. I implemented it myself. 
#### Total estimated time it took to complete project: 7 hours
#### Link to GitHub Repo:  https://github.com/cs0320-f25/typescript-csv-demed223.git
