# Chat GPT


Doc Variables now integrates with Chat GPT to generate content in your templates.

#### Syntax
```
${[VARIABLE_NAME]::gpt}
```
```
${[VARIABLE_NAME]::gpt::~[DEFAULT_PROMPT]}
```

#### Examples

##### Standard
> **Definition:**
```
${GPT1::gpt}
```
> **Input:**        
Prompt: `Write an agenda for an introductory sales call`        
World Limit: `30`       
> **Output:**       
1. Greet the prospect and establish rapport.
2. Introduce yourself and your company.
3. Understand the prospect's needs and challenges.
4. Present how your product/service can address those needs.
5. Discuss pricing and next steps.
6. Thank the prospect and schedule a follow-up call.


##### Default Object
> **Definition:**
```
${GPT1::gpt::~Write an agenda for an introductory sales call}
```     
> **Input:**        
Leave the field default prefilled.      
World Limit: `30`   
> **Output:**       
1. Greet the prospect and establish rapport.
2. Introduce yourself and your company.
3. Understand the prospect's needs and challenges.
4. Present how your product/service can address those needs.
5. Discuss pricing and next steps.
6. Thank the prospect and schedule a follow-up call.