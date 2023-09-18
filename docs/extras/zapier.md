# Zapier

Doc Variables has integrated with the Zapier API platform to allow Doc Variables users to seamlessly connect and synchronize their documents with hundreds of other applications and workflows.

## Getting Started

#### Install the Doc Variables App for Zapier
[https://zapier.com/apps/doc-variables/integrations](https://zapier.com/apps/doc-variables/integrations)

#### Configure API
The Doc Variables API requires a template document URL or ID and the data necessary to call the function you wish to call. Currently, there are two available methods: `replace` and `merge`.

### Replace Method
The replace method requires a dictionary list of variables and values that appear in your Google document. This method will replace the specified variables with their corresponding values.

##### Fields        
`Document ID`: Google Doc Id or Url of the Doc Variable template           
`Method Name`: Select `Replace`     
`Data`: Dictionary of label and values      
`Folder ID`: Drive Id of the export folder (optional)       
`Save PDF`: Export the merged documents as PDFs (optional)     
`Save Doc`: Export the merged documents as Google Docs (default=True)

:::note
Data labels do not need to use the ${[VARIABLE_NAME]} syntax. [VARIABLE_NAME] is all that is necessary.
:::

![image](https://uploads-ssl.webflow.com/645ab55482545c7f94bb203c/64fb46bc477c47f2d02e80c2_FireShot%20Pro%20Webpage%20Screenshot%20%23119%20-%20%27Doc%20Variables%20-%20Replace%20I%20Zapier%27%20-%20zapier.com.png)

### Merge Method
The merge method requires a source id and document id to start the merge process externally.

##### Fields        
`Document ID`: Google Doc Id or Url of the Doc Variable template           
`Method Name`: Select `Merge`     
`Sheet ID`: The Google Sheet Id for the source of data  
`Folder ID`: Drive Id of the export folder (optional)       
`Save PDF`: Export the merged documents as PDFs (optional)     
`Save Doc`: Export the merged documents as Google Docs (default=True)