# Assignment brief for junior developers, fall 2021

## Magic the Gathering assignment – instructions
Here we go. Your task is to build an interactive, hyperlinked rulebook application for a card game, of which rules are described in txt file.

### When submitting your solution, your application must

- Have a web frontend
- Include a Table of Contents with hyperlinks to chapters containing game rules. For instance, “100. General” is a chapter
- Display the selected chapter beside the Table of Contents, containing all rules in that chapter. For instance, “100.2a” is a rule
- Include a search box for filtering the rules displayed on the page, so that you can, for instance, type “commander” and find all rules that mention the word “commander”

### Some additional requirements and tips, we think will guide you to success:

- The application must be deployed on the Internet for our inspection. Please, provide us with the link when submitting your solution.
- Put the source code on Github or similar, preferably as a public repository. Please, provide us with the link when submitting your solution.
- You should ignore the Contents, Glossary, and any other sections in the input file, except for the actual numbered rules.
- You don’t need to be a card game fanatic, or even know the rules of the game to succeed. What you need is to figure out the format of the file, parse it programmatically and represent it in the described manner on the web.
- We appreciate solutions that have a clear structure and demonstrate your abilities to write clean code that has a good separation of concerns.
- We also appreciate solutions that have a good UX. However, we don’t expect you to come up with a stunning visual appearance. We’re more interested in usability and performance.

### A few words on intellectual property rights
- Do not use any trademarks, logos, or other copyrighted content in your application. Only display the game rules in a useful form. You may refer to the Fan Content Policy document.
- Do not include the game rules file into an open-source code repository, as it’s not public domain. Instead, fetch and process it dynamically in your application.
- We’ve interpreted the Wizards of the Coast Fan Content Policy to allow making interactive applications based on the rules file, and numerous existing implementations have been around for years. Still, if you feel uncomfortable publishing this, you may require a password (sent to us) in your application to prevent public use.

### If you’re keen on developing your solution further (beyond our assignment instructions), some bonus features might include:

- Create hyperlinks automatically between rules where applicable. For instance, when a text of a rule contains the string 809.5 and there exists a rule 809.5, the text “809.5” should be shown as a hyperlink to rule 809.5
- Load the input data rules.txt dynamically and provide a UI for specifying an alternative file by URL
