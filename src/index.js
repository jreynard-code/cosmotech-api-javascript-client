/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 0.0.10-rc
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import Connector from './model/Connector';
import ConnectorParameter from './model/ConnectorParameter';
import ConnectorParameterGroup from './model/ConnectorParameterGroup';
import Dataset from './model/Dataset';
import DatasetCompatibility from './model/DatasetCompatibility';
import DatasetConnector from './model/DatasetConnector';
import DatasetCopyParameters from './model/DatasetCopyParameters';
import DatasetSearch from './model/DatasetSearch';
import Organization from './model/Organization';
import OrganizationService from './model/OrganizationService';
import OrganizationServices from './model/OrganizationServices';
import OrganizationUser from './model/OrganizationUser';
import RunTemplate from './model/RunTemplate';
import RunTemplateHandlerId from './model/RunTemplateHandlerId';
import RunTemplateParameter from './model/RunTemplateParameter';
import RunTemplateParameterGroup from './model/RunTemplateParameterGroup';
import RunTemplateParameterValue from './model/RunTemplateParameterValue';
import RunTemplateStepSource from './model/RunTemplateStepSource';
import Scenario from './model/Scenario';
import ScenarioChangedParameterValue from './model/ScenarioChangedParameterValue';
import ScenarioComparisonResult from './model/ScenarioComparisonResult';
import ScenarioDataDownloadInfo from './model/ScenarioDataDownloadInfo';
import ScenarioDataDownloadJob from './model/ScenarioDataDownloadJob';
import ScenarioJobState from './model/ScenarioJobState';
import ScenarioLastRun from './model/ScenarioLastRun';
import ScenarioRun from './model/ScenarioRun';
import ScenarioRunContainer from './model/ScenarioRunContainer';
import ScenarioRunContainerArtifact from './model/ScenarioRunContainerArtifact';
import ScenarioRunContainerLogs from './model/ScenarioRunContainerLogs';
import ScenarioRunLogs from './model/ScenarioRunLogs';
import ScenarioRunSearch from './model/ScenarioRunSearch';
import ScenarioRunStartContainers from './model/ScenarioRunStartContainers';
import ScenarioRunStatus from './model/ScenarioRunStatus';
import ScenarioRunStatusNode from './model/ScenarioRunStatusNode';
import ScenarioRunTemplateParameterValue from './model/ScenarioRunTemplateParameterValue';
import ScenarioUser from './model/ScenarioUser';
import Solution from './model/Solution';
import User from './model/User';
import UserOrganization from './model/UserOrganization';
import UserWorkspace from './model/UserWorkspace';
import Validator from './model/Validator';
import ValidatorRun from './model/ValidatorRun';
import Workspace from './model/Workspace';
import WorkspaceFile from './model/WorkspaceFile';
import WorkspaceSolution from './model/WorkspaceSolution';
import WorkspaceUser from './model/WorkspaceUser';
import WorkspaceWebApp from './model/WorkspaceWebApp';
import ConnectorApi from './api/ConnectorApi';
import DatasetApi from './api/DatasetApi';
import OrganizationApi from './api/OrganizationApi';
import ScenarioApi from './api/ScenarioApi';
import ScenariorunApi from './api/ScenariorunApi';
import SolutionApi from './api/SolutionApi';
import UserApi from './api/UserApi';
import ValidatorApi from './api/ValidatorApi';
import WorkspaceApi from './api/WorkspaceApi';


/**
* Cosmo Tech Platform API client.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var CosmotechApi = require('index'); // See note below*.
* var xxxSvc = new CosmotechApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new CosmotechApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new CosmotechApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new CosmotechApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 0.0.10-rc
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Connector model constructor.
     * @property {module:model/Connector}
     */
    Connector,

    /**
     * The ConnectorParameter model constructor.
     * @property {module:model/ConnectorParameter}
     */
    ConnectorParameter,

    /**
     * The ConnectorParameterGroup model constructor.
     * @property {module:model/ConnectorParameterGroup}
     */
    ConnectorParameterGroup,

    /**
     * The Dataset model constructor.
     * @property {module:model/Dataset}
     */
    Dataset,

    /**
     * The DatasetCompatibility model constructor.
     * @property {module:model/DatasetCompatibility}
     */
    DatasetCompatibility,

    /**
     * The DatasetConnector model constructor.
     * @property {module:model/DatasetConnector}
     */
    DatasetConnector,

    /**
     * The DatasetCopyParameters model constructor.
     * @property {module:model/DatasetCopyParameters}
     */
    DatasetCopyParameters,

    /**
     * The DatasetSearch model constructor.
     * @property {module:model/DatasetSearch}
     */
    DatasetSearch,

    /**
     * The Organization model constructor.
     * @property {module:model/Organization}
     */
    Organization,

    /**
     * The OrganizationService model constructor.
     * @property {module:model/OrganizationService}
     */
    OrganizationService,

    /**
     * The OrganizationServices model constructor.
     * @property {module:model/OrganizationServices}
     */
    OrganizationServices,

    /**
     * The OrganizationUser model constructor.
     * @property {module:model/OrganizationUser}
     */
    OrganizationUser,

    /**
     * The RunTemplate model constructor.
     * @property {module:model/RunTemplate}
     */
    RunTemplate,

    /**
     * The RunTemplateHandlerId model constructor.
     * @property {module:model/RunTemplateHandlerId}
     */
    RunTemplateHandlerId,

    /**
     * The RunTemplateParameter model constructor.
     * @property {module:model/RunTemplateParameter}
     */
    RunTemplateParameter,

    /**
     * The RunTemplateParameterGroup model constructor.
     * @property {module:model/RunTemplateParameterGroup}
     */
    RunTemplateParameterGroup,

    /**
     * The RunTemplateParameterValue model constructor.
     * @property {module:model/RunTemplateParameterValue}
     */
    RunTemplateParameterValue,

    /**
     * The RunTemplateStepSource model constructor.
     * @property {module:model/RunTemplateStepSource}
     */
    RunTemplateStepSource,

    /**
     * The Scenario model constructor.
     * @property {module:model/Scenario}
     */
    Scenario,

    /**
     * The ScenarioChangedParameterValue model constructor.
     * @property {module:model/ScenarioChangedParameterValue}
     */
    ScenarioChangedParameterValue,

    /**
     * The ScenarioComparisonResult model constructor.
     * @property {module:model/ScenarioComparisonResult}
     */
    ScenarioComparisonResult,

    /**
     * The ScenarioDataDownloadInfo model constructor.
     * @property {module:model/ScenarioDataDownloadInfo}
     */
    ScenarioDataDownloadInfo,

    /**
     * The ScenarioDataDownloadJob model constructor.
     * @property {module:model/ScenarioDataDownloadJob}
     */
    ScenarioDataDownloadJob,

    /**
     * The ScenarioJobState model constructor.
     * @property {module:model/ScenarioJobState}
     */
    ScenarioJobState,

    /**
     * The ScenarioLastRun model constructor.
     * @property {module:model/ScenarioLastRun}
     */
    ScenarioLastRun,

    /**
     * The ScenarioRun model constructor.
     * @property {module:model/ScenarioRun}
     */
    ScenarioRun,

    /**
     * The ScenarioRunContainer model constructor.
     * @property {module:model/ScenarioRunContainer}
     */
    ScenarioRunContainer,

    /**
     * The ScenarioRunContainerArtifact model constructor.
     * @property {module:model/ScenarioRunContainerArtifact}
     */
    ScenarioRunContainerArtifact,

    /**
     * The ScenarioRunContainerLogs model constructor.
     * @property {module:model/ScenarioRunContainerLogs}
     */
    ScenarioRunContainerLogs,

    /**
     * The ScenarioRunLogs model constructor.
     * @property {module:model/ScenarioRunLogs}
     */
    ScenarioRunLogs,

    /**
     * The ScenarioRunSearch model constructor.
     * @property {module:model/ScenarioRunSearch}
     */
    ScenarioRunSearch,

    /**
     * The ScenarioRunStartContainers model constructor.
     * @property {module:model/ScenarioRunStartContainers}
     */
    ScenarioRunStartContainers,

    /**
     * The ScenarioRunStatus model constructor.
     * @property {module:model/ScenarioRunStatus}
     */
    ScenarioRunStatus,

    /**
     * The ScenarioRunStatusNode model constructor.
     * @property {module:model/ScenarioRunStatusNode}
     */
    ScenarioRunStatusNode,

    /**
     * The ScenarioRunTemplateParameterValue model constructor.
     * @property {module:model/ScenarioRunTemplateParameterValue}
     */
    ScenarioRunTemplateParameterValue,

    /**
     * The ScenarioUser model constructor.
     * @property {module:model/ScenarioUser}
     */
    ScenarioUser,

    /**
     * The Solution model constructor.
     * @property {module:model/Solution}
     */
    Solution,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
     * The UserOrganization model constructor.
     * @property {module:model/UserOrganization}
     */
    UserOrganization,

    /**
     * The UserWorkspace model constructor.
     * @property {module:model/UserWorkspace}
     */
    UserWorkspace,

    /**
     * The Validator model constructor.
     * @property {module:model/Validator}
     */
    Validator,

    /**
     * The ValidatorRun model constructor.
     * @property {module:model/ValidatorRun}
     */
    ValidatorRun,

    /**
     * The Workspace model constructor.
     * @property {module:model/Workspace}
     */
    Workspace,

    /**
     * The WorkspaceFile model constructor.
     * @property {module:model/WorkspaceFile}
     */
    WorkspaceFile,

    /**
     * The WorkspaceSolution model constructor.
     * @property {module:model/WorkspaceSolution}
     */
    WorkspaceSolution,

    /**
     * The WorkspaceUser model constructor.
     * @property {module:model/WorkspaceUser}
     */
    WorkspaceUser,

    /**
     * The WorkspaceWebApp model constructor.
     * @property {module:model/WorkspaceWebApp}
     */
    WorkspaceWebApp,

    /**
    * The ConnectorApi service constructor.
    * @property {module:api/ConnectorApi}
    */
    ConnectorApi,

    /**
    * The DatasetApi service constructor.
    * @property {module:api/DatasetApi}
    */
    DatasetApi,

    /**
    * The OrganizationApi service constructor.
    * @property {module:api/OrganizationApi}
    */
    OrganizationApi,

    /**
    * The ScenarioApi service constructor.
    * @property {module:api/ScenarioApi}
    */
    ScenarioApi,

    /**
    * The ScenariorunApi service constructor.
    * @property {module:api/ScenariorunApi}
    */
    ScenariorunApi,

    /**
    * The SolutionApi service constructor.
    * @property {module:api/SolutionApi}
    */
    SolutionApi,

    /**
    * The UserApi service constructor.
    * @property {module:api/UserApi}
    */
    UserApi,

    /**
    * The ValidatorApi service constructor.
    * @property {module:api/ValidatorApi}
    */
    ValidatorApi,

    /**
    * The WorkspaceApi service constructor.
    * @property {module:api/WorkspaceApi}
    */
    WorkspaceApi
};
