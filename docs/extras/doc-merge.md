# Doc Merge

The Doc Merge feature is a very powerful tool that allows you to automate Document generation by using Google Sheet data rows to use as variable values.

## Getting Started

#### Create Google Doc
Setup your Google Doc with standard variables.      

#### Open Doc Merge Popup
Select the `Doc Merge` option from the Doc Variables menu by choosing `Extras` &rarr; `Doc Merge`

#### Select a Source
Select `Create` or `Select` to either create a new Google Sheet or Select an existing one.      
The Google Sheet should include column names matching the variable names defined in your document.
##### Document Definitions
```
${Company Name} has a contract date of ${Contract Date}.        
Please email them at ${Contact Email}
```
##### Example Data Source
> | Company Name      | Contract Date        | Contact Email                                         |
|------------|----------------|-----------------------------------------------------|
| Apple      | 1/1/2018           | info@apple.com                                  |
| Microsoft  | 9/1/2020             | contact@microsoft.com                                        |
| Google     | 3/3/2022            | sales@google.com             |


#### Select an Export Folder
Clicking `Select` if you would like to change the export to a folder of your choosing.

#### Verify your Variables and Data match
To process the export, your document and Google Sheet must match at least one variable.  To properly leverage your data, all Document variables should match to data columns in your source.

:::note
Data matching can be retested by selecting the `refresh` icon in the bottom left of the popup.
:::

#### Select Output Options
Documents can be exported as Google Docs or PDFs or both.

#### Begin Export
Select `Run Now` to begin processing.