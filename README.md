# Sprint 1: TypeScript CSV

### Task C: Proposing Enhancement

- #### Step 1: Brainstorm on your own.

- #### Step 2: Use an LLM to help expand your perspective.

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

- #### 2. Random, On-Demand Generation

- #### 3. Overall experience, Bugs encountered and resolved
#### Errors/Bugs:
#### Tests:
#### How To…

#### Team members and contributions (include cs logins):

#### Collaborators (cslogins of anyone you worked with on this project and/or generative AI):
#### Total estimated time it took to complete project:
#### Link to GitHub Repo:  
