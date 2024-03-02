# Logics

Logics allow you to hide or show content based on the value of other variables.

#### Syntax
```
?{{[VARIABLE_NAME]}([OPERATOR])[MATCHING_TEXT]::[OUTPUT_IF_MATCH]}
```
```
?{{[VARIABLE_NAME_1]}([OPERATOR]){[VARIABLE_NAME_2]}::[OUTPUT_IF_MATCH]}
```
```
?{{[VARIABLE_NAME_1]}([OPERATOR])[MATCHING_TEXT]::file::[URL_TO_IMPORT]}
```
#### Operators
`=` - (equal)

`!` - (not equal)

#### Options
`file`

#### Examples

##### Match Variable to Text
> **Definition:**
```
${Company Name::hidden}
?{{Company Name}(=)Doc Variables::If equal, write out some Doc Variable content!}
?{{Company Name}(!)Doc Variables::If not equal, write out some Doc Variable content!}
```
> **Input:**        
Company Name: `Doc Variables`       
> **Output:**       
*Write out some Doc Variables content!*

##### Match Variable to Variable
> **Definition:**
```
${Contact Name::hidden}
${CEO Name::hidden}
?{{Contact Name}(=){CEO Name}::Better make this good.}
?{{Contact Name}(!){CEO Name}::Doesn't matter.}
```
> **Input:**        
Contact Name: `Tim Cook`        
CEO Name: `Elon Musk`     
> **Output:**       
*Doesn't matter.*  

##### Import File
> **Definition:**
```
?{{Contact Name}(=){CEO Name}::file::https://docs.google.com/document/d/1Ano...0/edit}
```
> **Input:**        
Contact Name: `Tim Cook`        
CEO Name: `Tim Cook`     
> **Output:**       
*FILE CONTENT*  