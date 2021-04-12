# @cosmotech/api

CosmotechApi - JavaScript client for @cosmotech/api
Cosmo Tech Platform API
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 0.0.1-SNAPSHOT
- Package version: 0.0.1-SNAPSHOT
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install @cosmotech/api --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your @cosmotech/api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var CosmotechApi = require('@cosmotech/api');

var defaultClient = CosmotechApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: AADOAuth2AuthCode
var AADOAuth2AuthCode = defaultClient.authentications['AADOAuth2AuthCode'];
AADOAuth2AuthCode.accessToken = "YOUR ACCESS TOKEN"
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix['key'] = "Token"

var api = new CosmotechApi.ConnectorApi()
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.findAllConnectors(callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.azure.cosmo-platform.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CosmotechApi.ConnectorApi* | [**findAllConnectors**](docs/ConnectorApi.md#findAllConnectors) | **GET** /connectors | List all Connectors
*CosmotechApi.ConnectorApi* | [**findConnectorById**](docs/ConnectorApi.md#findConnectorById) | **GET** /connectors/{connector_id} | Get the details of an connector
*CosmotechApi.ConnectorApi* | [**registerConnector**](docs/ConnectorApi.md#registerConnector) | **POST** /connectors | Register a new connector
*CosmotechApi.ConnectorApi* | [**unregisterConnector**](docs/ConnectorApi.md#unregisterConnector) | **DELETE** /connectors/{connector_id} | Unregister an connector
*CosmotechApi.ConnectorApi* | [**uploadConnector**](docs/ConnectorApi.md#uploadConnector) | **POST** /connectors/upload | Upload and register a new connector
*CosmotechApi.DatasetApi* | [**copyDataset**](docs/DatasetApi.md#copyDataset) | **POST** /organizations/{organization_id}/datasets/copy | Copy a Dataset to another Dataset. Source must have a read capable connector and Target a write capable connector.
*CosmotechApi.DatasetApi* | [**createDataset**](docs/DatasetApi.md#createDataset) | **POST** /organizations/{organization_id}/datasets | Register a new dataset
*CosmotechApi.DatasetApi* | [**deleteDataset**](docs/DatasetApi.md#deleteDataset) | **DELETE** /organizations/{organization_id}/datasets/{dataset_id} | Delete a dataset
*CosmotechApi.DatasetApi* | [**findAllDatasets**](docs/DatasetApi.md#findAllDatasets) | **GET** /organizations/{organization_id}/datasets | List all Datasets
*CosmotechApi.DatasetApi* | [**findDatasetById**](docs/DatasetApi.md#findDatasetById) | **GET** /organizations/{organization_id}/datasets/{dataset_id} | Get the details of a dataset
*CosmotechApi.DatasetApi* | [**updateDataset**](docs/DatasetApi.md#updateDataset) | **PATCH** /organizations/{organization_id}/datasets/{dataset_id} | Update a dataset
*CosmotechApi.OrganizationApi* | [**findAllOrganizations**](docs/OrganizationApi.md#findAllOrganizations) | **GET** /organizations | List all Organizations
*CosmotechApi.OrganizationApi* | [**findOrganizationById**](docs/OrganizationApi.md#findOrganizationById) | **GET** /organizations/{organization_id} | Get the details of an organization
*CosmotechApi.OrganizationApi* | [**registerOrganization**](docs/OrganizationApi.md#registerOrganization) | **POST** /organizations | Register a new organization
*CosmotechApi.OrganizationApi* | [**unregisterOrganization**](docs/OrganizationApi.md#unregisterOrganization) | **DELETE** /organizations/{organization_id} | Unregister an organization
*CosmotechApi.OrganizationApi* | [**updateOrganization**](docs/OrganizationApi.md#updateOrganization) | **PATCH** /organizations/{organization_id} | Update an organization
*CosmotechApi.ScenarioApi* | [**compareScenarios**](docs/ScenarioApi.md#compareScenarios) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/compare/{compared_scenario_id} | Compare the Scenario with another one and returns the difference for parameters values
*CosmotechApi.ScenarioApi* | [**createScenario**](docs/ScenarioApi.md#createScenario) | **POST** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios | Create a new scenario
*CosmotechApi.ScenarioApi* | [**deleteScenario**](docs/ScenarioApi.md#deleteScenario) | **DELETE** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id} | Delete a scenario
*CosmotechApi.ScenarioApi* | [**findAllScenarios**](docs/ScenarioApi.md#findAllScenarios) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios | List all Scenarios
*CosmotechApi.ScenarioApi* | [**findScenarioById**](docs/ScenarioApi.md#findScenarioById) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id} | Get the details of an scenario
*CosmotechApi.ScenarioApi* | [**getScenariosTree**](docs/ScenarioApi.md#getScenariosTree) | **GET** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/tree | Get the Scenarios Tree
*CosmotechApi.ScenarioApi* | [**queryDataWarehouse**](docs/ScenarioApi.md#queryDataWarehouse) | **POST** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/queryDataWarehouse | Get the result of a query on the DatawareHouse
*CosmotechApi.ScenarioApi* | [**updateScenario**](docs/ScenarioApi.md#updateScenario) | **PATCH** /organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id} | Update a scenario
*CosmotechApi.SimulatorApi* | [**createSimulator**](docs/SimulatorApi.md#createSimulator) | **POST** /organizations/{organization_id}/simulators | Register a new simulator
*CosmotechApi.SimulatorApi* | [**deleteSimulator**](docs/SimulatorApi.md#deleteSimulator) | **DELETE** /organizations/{organization_id}/simulators/{simulator_id} | Delete a simulator
*CosmotechApi.SimulatorApi* | [**findAllSimulators**](docs/SimulatorApi.md#findAllSimulators) | **GET** /organizations/{organization_id}/simulators | List all Simulators
*CosmotechApi.SimulatorApi* | [**findSimulatorById**](docs/SimulatorApi.md#findSimulatorById) | **GET** /organizations/{organization_id}/simulators/{simulator_id} | Get the details of a simulator
*CosmotechApi.SimulatorApi* | [**updateSimulator**](docs/SimulatorApi.md#updateSimulator) | **PATCH** /organizations/{organization_id}/simulators/{simulator_id} | Update a simulator
*CosmotechApi.SimulatorApi* | [**upload**](docs/SimulatorApi.md#upload) | **POST** /organizations/{organization_id}/simulators/upload | Upload and register a new simulator
*CosmotechApi.UserApi* | [**findAllUsers**](docs/UserApi.md#findAllUsers) | **GET** /users | List all Users
*CosmotechApi.UserApi* | [**findUserById**](docs/UserApi.md#findUserById) | **GET** /users/{user_id} | Get the details of an user
*CosmotechApi.UserApi* | [**registerUser**](docs/UserApi.md#registerUser) | **POST** /users | Register a new user
*CosmotechApi.UserApi* | [**unregisterUser**](docs/UserApi.md#unregisterUser) | **DELETE** /users/{user_id} | Unregister an user
*CosmotechApi.UserApi* | [**updateUser**](docs/UserApi.md#updateUser) | **PATCH** /users/{user_id} | Update an user
*CosmotechApi.ValidatorApi* | [**createValidator**](docs/ValidatorApi.md#createValidator) | **POST** /organizations/{organization_id}/datasets/validators | Register a new validator
*CosmotechApi.ValidatorApi* | [**createValidatorRun**](docs/ValidatorApi.md#createValidatorRun) | **POST** /organizations/{organization_id}/datasets/validators/{validator_id}/history | Register a new validator run
*CosmotechApi.ValidatorApi* | [**deleteValidator**](docs/ValidatorApi.md#deleteValidator) | **DELETE** /organizations/{organization_id}/datasets/validators/{validator_id} | Delete a validator
*CosmotechApi.ValidatorApi* | [**deleteValidatorRun**](docs/ValidatorApi.md#deleteValidatorRun) | **DELETE** /organizations/{organization_id}/datasets/validators/{validator_id}/history/{validatorrun_id} | Delete a validator run
*CosmotechApi.ValidatorApi* | [**findAllValidatorRuns**](docs/ValidatorApi.md#findAllValidatorRuns) | **GET** /organizations/{organization_id}/datasets/validators/{validator_id}/history | List all Validator Runs
*CosmotechApi.ValidatorApi* | [**findAllValidators**](docs/ValidatorApi.md#findAllValidators) | **GET** /organizations/{organization_id}/datasets/validators | List all Validators
*CosmotechApi.ValidatorApi* | [**findValidatorById**](docs/ValidatorApi.md#findValidatorById) | **GET** /organizations/{organization_id}/datasets/validators/{validator_id} | Get the details of a validator
*CosmotechApi.ValidatorApi* | [**findValidatorRunById**](docs/ValidatorApi.md#findValidatorRunById) | **GET** /organizations/{organization_id}/datasets/validators/{validator_id}/history/{validatorrun_id} | Get the details of a validator run
*CosmotechApi.ValidatorApi* | [**runValidator**](docs/ValidatorApi.md#runValidator) | **POST** /organizations/{organization_id}/datasets/validators/{validator_id}/run | Run a Validator
*CosmotechApi.WorkspaceApi* | [**createWorkspace**](docs/WorkspaceApi.md#createWorkspace) | **POST** /organizations/{organization_id}/workspaces | Create a new workspace
*CosmotechApi.WorkspaceApi* | [**deleteWorkspace**](docs/WorkspaceApi.md#deleteWorkspace) | **DELETE** /organizations/{organization_id}/workspaces/{workspace_id} | Delete a workspace
*CosmotechApi.WorkspaceApi* | [**findAllWorkspaces**](docs/WorkspaceApi.md#findAllWorkspaces) | **GET** /organizations/{organization_id}/workspaces | List all Workspaces
*CosmotechApi.WorkspaceApi* | [**findWorkspaceById**](docs/WorkspaceApi.md#findWorkspaceById) | **GET** /organizations/{organization_id}/workspaces/{workspace_id} | Get the details of an workspace
*CosmotechApi.WorkspaceApi* | [**updateWorkspace**](docs/WorkspaceApi.md#updateWorkspace) | **PATCH** /organizations/{organization_id}/workspaces/{workspace_id} | Update a workspace


## Documentation for Models

 - [CosmotechApi.AnalysisParameter](docs/AnalysisParameter.md)
 - [CosmotechApi.AnalysisParameterGroup](docs/AnalysisParameterGroup.md)
 - [CosmotechApi.AnalysisResourceStorage](docs/AnalysisResourceStorage.md)
 - [CosmotechApi.Connector](docs/Connector.md)
 - [CosmotechApi.ConnectorParameter](docs/ConnectorParameter.md)
 - [CosmotechApi.ConnectorParameterGroup](docs/ConnectorParameterGroup.md)
 - [CosmotechApi.Dataset](docs/Dataset.md)
 - [CosmotechApi.DatasetCompatibility](docs/DatasetCompatibility.md)
 - [CosmotechApi.DatasetConnector](docs/DatasetConnector.md)
 - [CosmotechApi.DatasetCopyParameters](docs/DatasetCopyParameters.md)
 - [CosmotechApi.Organization](docs/Organization.md)
 - [CosmotechApi.OrganizationUser](docs/OrganizationUser.md)
 - [CosmotechApi.Scenario](docs/Scenario.md)
 - [CosmotechApi.ScenarioAllOf](docs/ScenarioAllOf.md)
 - [CosmotechApi.ScenarioAnalysis](docs/ScenarioAnalysis.md)
 - [CosmotechApi.ScenarioAnalysisParameterValue](docs/ScenarioAnalysisParameterValue.md)
 - [CosmotechApi.ScenarioBase](docs/ScenarioBase.md)
 - [CosmotechApi.ScenarioChangedParameterValue](docs/ScenarioChangedParameterValue.md)
 - [CosmotechApi.ScenarioComparisonResult](docs/ScenarioComparisonResult.md)
 - [CosmotechApi.ScenarioDataWarehouseQuery](docs/ScenarioDataWarehouseQuery.md)
 - [CosmotechApi.ScenarioDataWarehouseQueryResult](docs/ScenarioDataWarehouseQueryResult.md)
 - [CosmotechApi.ScenarioFailedAnalysis](docs/ScenarioFailedAnalysis.md)
 - [CosmotechApi.ScenarioFailedAnalysisAllOf](docs/ScenarioFailedAnalysisAllOf.md)
 - [CosmotechApi.ScenarioRunningAnalysis](docs/ScenarioRunningAnalysis.md)
 - [CosmotechApi.ScenarioRunningAnalysisAllOf](docs/ScenarioRunningAnalysisAllOf.md)
 - [CosmotechApi.ScenarioSuccessfulAnalysis](docs/ScenarioSuccessfulAnalysis.md)
 - [CosmotechApi.ScenarioSuccessfulAnalysisAllOf](docs/ScenarioSuccessfulAnalysisAllOf.md)
 - [CosmotechApi.ScenarioUser](docs/ScenarioUser.md)
 - [CosmotechApi.Simulator](docs/Simulator.md)
 - [CosmotechApi.SimulatorAnalysis](docs/SimulatorAnalysis.md)
 - [CosmotechApi.User](docs/User.md)
 - [CosmotechApi.UserDetails](docs/UserDetails.md)
 - [CosmotechApi.UserDetailsAllOf](docs/UserDetailsAllOf.md)
 - [CosmotechApi.UserOrganization](docs/UserOrganization.md)
 - [CosmotechApi.Validator](docs/Validator.md)
 - [CosmotechApi.ValidatorRun](docs/ValidatorRun.md)
 - [CosmotechApi.Workspace](docs/Workspace.md)
 - [CosmotechApi.WorkspaceServices](docs/WorkspaceServices.md)
 - [CosmotechApi.WorkspaceSimulator](docs/WorkspaceSimulator.md)
 - [CosmotechApi.WorkspaceUser](docs/WorkspaceUser.md)
 - [CosmotechApi.WorkspaceWebApp](docs/WorkspaceWebApp.md)


## Documentation for Authorization



### AADOAuth2AuthCode


- **Type**: OAuth
- **Flow**: implicit
- **Authorization URL**: https://login.microsoftonline.com/e9641c78-d0d6-4d09-af63-168922724e7f/oauth2/v2.0/authorize
- **Scopes**: 
  - http://sample.azure.cosmo-platform.com/user_impersonation: User Impersonation



### ApiKeyAuth


- **Type**: API key
- **API key parameter name**: key
- **Location**: URL query string

