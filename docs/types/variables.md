---
id: variables
title: Variables
---

This document outlines the standard variable type used within **Doc Variables**.

---

## Text
The simplest variable type that only requires the name of a variable.

#### Syntax

```plaintext
${[VARIABLE_NAME]}
```

#### Example

>  **Definition:**
  ```plaintext
  ${CompanyName} agrees to the following terms and conditions contained in ${TemplateName}.
  ```
>  **Input:**   
  CompanyName: `Doc Variables, LLC`   
  TemplateName: `Master Services Agreement`   
>  **Output:**  
  *Doc Variables, LLC agrees to the following terms and conditions contained in this Master Services Agreement.*

---

## Required
Include a `*` at the start of the variable name to make any variable mandatory.  This can be used with any variable type.

#### Syntax
```plaintext
${*[VARIABLE_NAME]}
```

---

## Default
Add a `~` and a default value to pre-fill your variable form field:

#### Syntax
```plaintext
${[VARIABLE_NAME]::~Default Value}
```

#### Example

> **Definition:**
```plaintext
The first weekday is `${first weekday::~Monday}`.
```
> **Output:**  
If user input is available:  
*The first weekday is [User entered text].*  
If no user input:  
*The first weekday is Monday.*

---

## Transform
To use the same variable in multiple places, but different formats you can set the type to `transform`.

#### Syntax
```plaintext
${[VARIABLE_NAME]::transform::[TRANSFORM_OPTION]}
```

:::note
An option is required for this field type.
:::

#### Options
`uppercase`
`lowercase`
`capitalize`
`titlecase`

#### Examples

##### Uppercase Transform
> **Definition:**
  ```plaintext
  ${TransformCase::transform::uppercase}
  ```
> **Input:**  
      TransformCase: `Transformed Variable`          
> **Output:**   
      *TRANSFORMED VARIABLE*

##### Lowercase Transform
> **Definition:**
  ```plaintext
  ${TransformCase::transform::lowercase}
  ```
> **Input:**  
      TransformCase: `Transformed Variable`   
> **Ouput:**   
      *transformed variable*

##### Capitalize Transform
> **Definition:**
  ```plaintext
  ${TransformCase::transform::capitalize}
  ```
> **Input:**   
      TransformCase: `transformed variable`   
> **Ouput:**   
      *Transformed variable*

##### Titlecase Transform
> **Definition:**
  ```plaintext
  ${TransformCase::transform::titlecase}
  ```
> **Input:**   
      TransformCase: `transformed variable`   
> **Ouput:**   
      *Transformed Variable*

---

## Text Area

The Text Area is designed for capturing longer input fields for text variables.

#### Syntax

```plaintext
${[VARIABLE_NAME]::textarea}
```

#### Alternative
```
${[VARIABLE_NAME]::ta}
```

#### Examples

##### Basic Text Area
> **Definition:**
```plaintext
${Long Field::textarea}
```
> **Input:**   
    Long Field: `User entered text`   
> **Output:**   
     *User entered text*

##### Text Area with Default Value
> **Definition:**
```plaintext
${TxtArea2::textarea::~Default Text}
```
> **Output:**   
  If user input is available:  
  *User entered text*  
  If no user input:  
  *Default Text*

---
## Number

The `number` field type allows you to create input fields that only accept numeric values.

#### Syntax

```
${[VARIABLE_NAME]::number}
```

#### Example

> **Definition:**
```
${Annual Revenue::number}
```

> **Usage in Logic:**
```
?{{Annual Revenue}(>=)1000000::This company is a million-dollar company!}
?{{Annual Revenue}(<)1000000::This company is not yet a million-dollar company.}
```
Input:

Annual Revenue: 1500000
Output:

This company is a million-dollar company!


> **Input:**    
Annual Revenue: `500000`
Output:

This company is not yet a million-dollar company!

---

## Hidden

Hidden variables will take user input but not show up in the document as output.

:::note
Hidden variables are used to be referenced in other variables, functions, or logics types.
:::
#### Syntax

```
${[VARIABLE_NAME]::hidden}
```

#### Example

> **Definition:**
```
The lead developer of Doc Variables is ${First Name::hidden} ${Last Name::hidden}.
```
> **Input:**    
First Name: `Jesse`   
Last Name: `McCabe`   
> **Output:**   
*The lead developer of Doc Variables is.*


---

## Date

#### Syntax

```
${[VARIABLE_NAME]::date::[DATE_FORMAT]}
```

#### Alternative
```
${[VARIABLE_NAME]::d::[DATE_FORMAT]}
```

#### Date Formats

| Input      | Example        | Description                                         |
|------------|----------------|-----------------------------------------------------|
| YYYY       | 2014           | 4 or 2 digit year                                   |
| YY         | 14             | 2 digit year                                        |
| Y          | -25            | Year with any number of digits and sign             |
| Q          | 1..4           | Quarter of year. Sets month to first month in quarter. |
| M MM       | 1..12          | Month number                                        |
| MMM MMMM   | Jan..December  | Month name in locale set by moment.locale()         |
| d          | 1..7           | Day of the week as a number                        |
| dd         | Mo..Su         | Two letter day of the week                          |
| ddd        | Mon..Sun       | Three letter day of the week                        |
| dddd       | Monday..Sunday | Full word for day of the week                       |
| D DD       | 1..31          | Day of month                                        |
| Do         | 1st..31st      | Day of month with ordinal                           |
| DDD DDDD   | 1..365         | Day of year                                         |

#### Examples

##### Default Date
> **Definition:**
```
Purchase date is `${PurchaseDate::date}`
```
> **Input:**     
User selects September 17, 2023 from calendar.   
> **Output:**   
*Purchase date is September 17, 2023*

##### Date with Custom Format
> **Definition:**
```
Effective Date is `${EffDate::date::MM/YYYY}`
```
> **Input:**    
User selects September 17, 2023 from calendar.    
> **Output:**   
*Effective Date is 09/2023*

---

## Options
Generates a list of options the user can select from in the form of a dropdown field.

#### Syntax
```
${[VARIABLE_NAME]::options::"[VALUE_1]","[VALUE_2]",...}
```

#### Alternatives
```
${[VARIABLE_NAME]::dropdown::"[VALUE_1]","[VALUE_2]",...}
${[VARIABLE_NAME]::o::"[VALUE_1]","[VALUE_2]",...}
${[VARIABLE_NAME]::dd::"[VALUE_1]","[VALUE_2]",...}
```

#### Examples
##### Standard
> **Definition:**
```
You selected ${DropDown::options::”Option 1”, “Option 2”, “Option 3”}.  
```
> **Input:**    
User selection Option 2 from dropdown field.    
> **Output:**   
*You selected Option 2.*

##### With a default option
> **Definition:**
```
You selected ${DropDown::options::”Option 1”, “Option 2”, “~Option 3”}.  
```
> **Input:**    
User does not select anything.   
> **Output:**   
*You selected Option 3.*

---

## Options-Values
In this variation of the standard options type, you can change the label of the value so that it is more readable to the user.

#### Syntax
```
${[VARIABLE_NAME]::options-values::"[LABEL_1]":"[VALUE_1]","[LABEL_2]":"[VALUE_2]",...}
```

#### Alternatives
```
${[VARIABLE_NAME]::ov::"[LABEL_1]":"[VALUE_1]","[LABEL_2]":"[VALUE_2]",...}
${[VARIABLE_NAME]::ddv::"[LABEL_1]":"[VALUE_1]","[LABEL_2]":"[VALUE_2]",...}
```

#### Example

> **Definition:**
```plaintext
  Answer, in numbers, how many days there are in a week: ${Days in a Week::options-values::”Five”:”5”,”Six”:”6”,”Seven”:”7”}` 
```
> **Input:**    
User selects `Seven`   
> **Output:**   
*Answer, in numbers, how many days there are in a week: 7*

---
## Lists

You can create lists of content by using the list variable type.

#### Default Syntax (Bullets)
```
${[VARIABLE_NAME]::list::"[LIST_ITEM_1]","[LIST_ITEM_2]",...}
```
```
${[VARIABLE_NAME]::l::"[LIST_ITEM_1]","[LIST_ITEM_2]",...}
```
#### Paragraph List
```
${[VARIABLE_NAME]::list-paragraph::"[LIST_ITEM_1]","[LIST_ITEM_2]",...}
```
```
${[VARIABLE_NAME]::lp::"[LIST_ITEM_1]","[LIST_ITEM_2]",...}
```
#### Paragraph Numbered
```
${[VARIABLE_NAME]::list-numbered::"[LIST_ITEM_1]","[LIST_ITEM_2]",...}
```
```
${[VARIABLE_NAME]::ln::"[LIST_ITEM_1]","[LIST_ITEM_2]",...}
```


#### Example

##### Standard List (bullets)
> **Definition:**
```
${My List::list::”Item 1”, “Item 2”, “Item 3”}
```
> **Input:**
User selects `Item 2` and `Item 3` from a checkbox list.    
> **Output:**
- Item 2
- Item 3

##### Paragraph List
> **Definition:**
```
${My List::list-paragraph::”Item 1”, “Item 2”, “Item 3”}
```
> **Input:**
User selects `Item 2` and `Item 3` from a checkbox list.    
> **Output:**   
Item 2    
Item 3    

##### Numbered List
> **Definition:**
```
${My List::list-numbered::”Item 1”, “Item 2”, “Item 3”}
```
> **Input:**
User selects `Item 2` and `Item 3` from a checkbox list.    
> **Output:**
1. Item 2
2. Item 3

---

## File

Other Google Docs can be imported into your template with all content and formatting.

#### Syntax
```
${[VARIABLE_NAME]::file}
```
```
${[VARIABLE_NAME]::file::~[DOCUMENT_ID]}
```
#### Alternative
```
${[VARIABLE_NAME]::f}
```

#### Examples

##### Standard
> **Definition:**
```
${Terms::file}
```
> **Input:**    
User selects the Google Doc from the file selection popup   
> **Output:**   
All content is imported and injected into the template.

##### Default File
> **Definition:**
```
${Terms::file::~15Ay2iN_GLR6dNdmDGwoC5OJBE4vABrYGJvxBOwObdU4}
```
> **Input:**    
File is left unselect.    
> **Output:**   
All content in the referenced Google Doc ID is imported and injected into the template.

---

## Images

#### Syntax
```
${[VARIABLE_NAME]::image::[IMAGE_OPTIONS]}
```
#### Alternative
```
${[VARIABLE_NAME]::i}
```

#### Examples
##### Standard
> **Definition:**
```
${Logo::image}
```
> **Input:**    
User selects an image from drive or uploaded from computer.   
> **Output:**   
Insert image into document.

##### Set Width
> **Definition:**
```
${Logo::image::width=200}
```
> **Input:**    
User selects an image from drive or uploaded from computer.   
> **Output:**   
Insert image into document with a width of 200 and relative height.

##### Set Width and Height
> **Definition:**
```
${Image 3::image::width=200,height=100}
```
> **Input:**    
User selects an image from drive or uploaded from computer.   
> **Output:**   
Insert image into document with a constrained width of 200 and height of 100.

---

## References

References import data from external Google Sheet sources.

#### Syntax
```
${Reference Name::reference}
```
```
${Reference Name::reference::~[SHEET_ID],[CELL_SELECTION]}
```
```
${Reference Name::reference-hidden}
```

#### Alternatives

```
${Reference Name::r}
```
```
${Reference Name::rh}
```

:::note
Hidden references will not be shown in the final output.
:::

#### Example
##### Standard
> **Definition:** 
```
${Data Sheet::reference}
```
> **Input:**    
User selects a Google Sheet and then enters in a cell reference.    
> **Output:**   
Data from sheet and cell is imported into outputed document.

##### Default Reference
> **Definition:**
```
${Data Sheet::reference::~1QJ5GmGdezPIsWIcAN-Glh7bDgQo6czPuu751UerhCpk,Sheet1!A1}
```
> **Input:**    
Default value is selected from sheet and reference, and user makes no changes.    
> **Output:**   
Data from sheet and cell is imported into outputed document.
