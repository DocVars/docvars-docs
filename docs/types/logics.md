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

- `=`  - (equal)
- `!`  - (not equal)
- `>`  - (greater than)
- `<`  - (less than)
- `>=` - (greater than or equal to)
- `<=` - (less than or equal to)

#### Options

- `file`

#### Examples

##### Match Variable to Text

**Definition:**

```
${Company Name::hidden}
?{{Company Name}(=)Doc Variables::If equal, write out some Doc Variable content!}
?{{Company Name}(!)Doc Variables::If not equal, write out some Doc Variable content!}
```

**Input:**

Company Name: `Doc Variables`

**Output:**

*If equal, write out some Doc Variable content!*

##### Match Variable to Variable

**Definition:**

```
${Contact Name::hidden}
${CEO Name::hidden}
?{{Contact Name}(=){CEO Name}::Better make this good.}
?{{Contact Name}(!){CEO Name}::Doesn't matter.}
```

**Input:**

Contact Name: `Tim Cook`

CEO Name: `Elon Musk`

**Output:**

*Doesn't matter.*

##### Greater Than Comparison

**Definition:**

```
${Sales::number}
${Target Sales::number}
?{{Sales}(>){Target Sales}::Congratulations! You've exceeded the target.}
```

**Input:**

Sales: `1500`

Target Sales: `1000`

**Output:**

*Congratulations! You've exceeded the target.*

##### Less Than or Equal To Comparison

**Definition:**

```
${Quantity Ordered::number}
?{{Quantity Ordered}(<=)10::We can process small orders immediately.}
```

**Input:**

Quantity Ordered: `8`

**Output:**

*We can process small orders immediately.*

##### Import File

**Definition:**

```
?{{Contact Name}(=){CEO Name}::file::https://docs.google.com/document/d/1Ano...0/edit}
```

**Input:**

Contact Name: `Tim Cook`

CEO Name: `Tim Cook`

**Output:**

*FILE CONTENT*

