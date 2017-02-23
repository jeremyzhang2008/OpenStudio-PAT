// Electron
import contextMenu from '../electron/context_menu'; // eslint-disable-line no-unused-vars

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { AnalysisController } from '../app/analysis/analysisController';
import { BCL } from '../app/bcl/bclService';
import { DependencyManager } from '../app/main/dependencyManagerService';
import { DesignAlternativesController } from '../app/design_alts/designAlternativesController';
import { MeasureManager } from '../app/main/measureManagerService';
import { ModalBclController } from '../app/bcl/modalBclController';
import { ModalDependencyController } from '../app/main/modalDependencyController';
import { ModalModifiedController } from '../app/project/modalModifiedController';
import { ModalOpenProjectController } from '../app/project/modalOpenProjectController';
import { ModalProjectNameController } from '../app/project/modalProjectNameController';
import { ModalServerToolsController } from '../app/project/modalServerToolsController';
import { ModalSetMeasuresDirController } from '../app/project/modalSetMeasuresDirController.js';
import { ModalNestedProjectWarningController } from '../app/project/modalNestedProjectWarningController';
import { ModalWhitespaceWarningController } from '../app/project/modalWhitespaceWarningController';
import { ModalDuplicateMeasureController } from '../app/bcl/modalDuplicateMeasureController';
import { ModalUpdateMeasureController } from '../app/bcl/modalUpdateMeasureController';
import { ModalViewReportController } from '../app/run/modalViewReportController';
import { ModalClearResultsController } from '../app/run/modalClearResultsController';
import { ModalClearDatapointController } from '../app/design_alts/modalClearDatapointController';
import { ModalSelectOutputsController } from '../app/outputs/modalSelectOutputsController';
import { ModalSelectOptionsController } from '../app/analysis/modalSelectOptionsController';
import { ModalNewClusterController } from '../app/run/modalNewClusterController';
import { ModalNewAwsCredentialsController } from '../app/run/modalNewAwsCredentialsController';
import { ModalCloudRunningController } from '../app/run/modalCloudRunningController';
import { NavController } from '../app/nav/navController';
import { OsServer } from '../app/project/osServerService';
import { OutputsController } from '../app/outputs/outputsController';
import { Project } from '../app/project/projectService';
import { ReportsController } from '../app/reports/reportsController';
import { RunController } from '../app/run/runController';
import { ModalAnalysisRunningController} from '../app/run/modalAnalysisRunningController';
import { ServerController } from '../app/server/serverController';
import { OpenProject } from '../app/project/openProjectService';
import { SetProject } from '../app/project/setProjectService';
import { StatusBar } from '../app/status_bar/statusBarService';
import { StatusBarController } from '../app/status_bar/statusBarController';

angular.module('PAT', ['ngAnimate', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'pascalprecht.translate', 'ui.router', 'ui.router.stateHelper', 'ui.bootstrap', 'ui.checkbox', 'toastr', 'ui.grid', 'ui.grid.autoResize', 'ui.grid.cellNav', 'ui.grid.edit', 'ui.grid.resizeColumns', 'ui.grid.selection', 'ui.grid.pinning'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('NavController', NavController)
  .controller('ModalBclController', ModalBclController)
  .controller('ModalDependencyController', ModalDependencyController)
  .controller('ModalProjectNameController', ModalProjectNameController)
  .controller('ModalNestedProjectWarningController', ModalNestedProjectWarningController)
  .controller('ModalWhitespaceWarningController', ModalWhitespaceWarningController)
  .controller('ModalModifiedController', ModalModifiedController)
  .controller('ModalOpenProjectController', ModalOpenProjectController)
  .controller('ModalServerToolsController', ModalServerToolsController)
  .controller('ModalSetMeasuresDirController', ModalSetMeasuresDirController)
  .controller('ModalDuplicateMeasureController', ModalDuplicateMeasureController)
  .controller('ModalUpdateMeasureController', ModalUpdateMeasureController)
  .controller('ModalViewReportController', ModalViewReportController)
  .controller('ModalSelectOutputsController', ModalSelectOutputsController)
  .controller('ModalSelectOptionsController', ModalSelectOptionsController)
  .controller('ModalClearResultsController', ModalClearResultsController)
  .controller('ModalClearDatapointController', ModalClearDatapointController)
  .controller('ModalNewClusterController', ModalNewClusterController)
  .controller('ModalNewAwsCredentialsController', ModalNewAwsCredentialsController)
  .controller('ModalCloudRunningController', ModalCloudRunningController)
  .controller('AnalysisController', AnalysisController)
  .controller('DesignAlternativesController', DesignAlternativesController)
  .controller('OutputsController', OutputsController)
  .controller('RunController', RunController)
  .controller('ModalAnalysisRunningController', ModalAnalysisRunningController)
  .controller('ReportsController', ReportsController)
  .controller('ServerController', ServerController)
  .controller('StatusBarController', StatusBarController)
  .service('BCL', BCL)
  .service('MeasureManager', MeasureManager)
  .service('DependencyManager', DependencyManager)
  .service('OsServer', OsServer)
  .service('Project', Project)
  .service('OpenProject', OpenProject)
  .service('SetProject', SetProject)
  .service('StatusBar', StatusBar);
