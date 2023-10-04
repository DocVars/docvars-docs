# Functions

Functions are elements within your document that are generated based on the values of other variables rather than direct input.

#### Syntax
```
#{ {[VARIABLE_NAME_1]} [OPERATOR] {[VARIABLE_NAME_2]}}
```
```
#{ {[VARIABLE_NAME_1]} {[VARIABLE_NAME_2]} }
```

##### Formatting

```
#{ {[VARIABLE_NAME_1]} [OPERATOR] {[VARIABLE_NAME_2]}::format::[OPTIONS] }
```

##### Reference

```
#{ [REFERENCE_NAME]::reference::[SHEETID],[CELL_SELECTION] }
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

##### Google Sheets Reference

> **Definition:**
```
${Sheet URL::hidden}
#{CellA1::reference::{Sheet URL},Sheet1!A1}
```
> **Input:**        
Sheet URL: `https://docs.google.com/spreadsheets/d/1lLG_TkGxZ6Ao9fOtfLNz2LbYjHNA-igP99A7biIJi4I/edit?show_add_on=M8KKXw4AvutWpwvT5N1qcfMh00DPSBbB3#gid=0`        
> **Output:**       
*Hi*
