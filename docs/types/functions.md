# Functions

Functions are elements within your document that are generated based on the values of other variables rather than direct input.

#### Syntax
```
#{ {[VARIABLE_NAME_1]} [OPERATOR] {[VARIABLE_NAME_2]}}
```
```
#{ {[VARIABLE_NAME_1]} [OPERATOR] {[VARIABLE_NAME_2]}::format::[OPTIONS] }
```
```
#{ {[VARIABLE_NAME_1]} {[VARIABLE_NAME_2]} }
```


#### Options
`currency`

#### Examples

##### Mathematical

> **Definition:**
```
${Weeks Remaining::hidden}
#{{Weeks Remaining} * 7}
```
> **Input:**        
Weeks Remaining: `10`        
> **Output:**       
*70*

##### Mathematical with Currency Output

> **Definition:**
```
${Hours::hidden}
${Rate::hidden}
#{{Hours} * {Rate}::format::currency}
```
> **Input:**        
Hours: `100`        
Rate: `150`     
> **Output:**       
*15,000*

##### Strings

> **Definition:**
```
${First Name::hidden}
${Last Name::hidden}
#{"{First Name} {Last Name}"}
```
> **Input:**        
First Name: `Jesse`        
Last Name: `McCabe`        
> **Output:**   
*Jesse McCabe*
