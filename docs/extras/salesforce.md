# Salesforce


Doc Variables can integrate directly with the Salesforce CRM platform. This feature currently enables data import directly from contacts or accounts within your CRM.

## Installation
From the top menu in the Doc Variables sidebar select `Extras` &rarr; `Salesforce Connect`

In the Salesforce popup click the `Authorize` button.

Login and authorize the `Doc Variables` app within the Salesforce platform.

## Salesforce Variables
#### Syntax
```
${Salesforce.[FIELD_NAME]::salesforce-account}
```
```
${Salesforce.[FIELD_NAME]::salesforce-contact}
```

:::note
The Salesforce variable type requires the name of the variable matches a field property of the object.  The `Salesforce` prefix in the variable name is optional, but it is best practices to use this format.
:::

#### Examples

##### Standard
> **Definition:**
```
${Salesforce.email::salesforce-account}
```
> **Input:**        
Select an Account from the Saleforce popup.      
> **Output:**       
The value of the `name` property of the selected `account` object.

##### Default Object
> **Definition:**
```
${Salesforce.email::salesforce-contact::~Alfred Einstein}
```     
> **Output:**       
The `email` value of the matching contact `Alfred Einstein`.

:::note
The default value must be an exact match of the name or id of the object.
:::