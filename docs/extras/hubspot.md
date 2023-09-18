# Hubspot


Doc Variables can integrate directly with Hubspot CRM platforms. This feature currently enables data import directly from contacts or companies within your CRM.

## Installation
From the top menu in the Doc Variables sidebar select `Extras` &rarr; `Hubspot Connect`

In the Hubspot Connect popup click the `Authorize` button.

Login, select your account, and authorize the `Doc Variables` application within the Hubspot platform.

## Hubspot Variables
#### Syntax
```
${Hubspot.[FIELD_NAME]::hubspot-company}
```
```
${Hubspot.[FIELD_NAME]::hubspot-contact}
```

:::note
The Hubspot variable type requires the name of the variable matches a field property of the object.  The `Hubspot` prefix in the variable name is optional, but it is best practices to use this format.
:::

#### Examples

##### Standard
> **Definition:**
```
${Hubspot.email::hubspot-company}
```
> **Input:**        
Select company from the Hubspot popup.      
> **Output:**       
The value of the `name` property of the selected `company` object.

##### Default Object
> **Definition:**
```
${Hubspot.email::hubspot-contact::~Alfred Einstein}
```     
> **Output:**       
The `email` value of the matching contact `Alfred Einstein`.

:::note
The default value must be an exact match of the name or id of the object.
:::