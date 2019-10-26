import template from './nr-text-input-template.html';
import './nr-text-input-styles.scss';
import {NrPasswordInputController} from './NrPasswordInputController';

/**
 *
 * @type {{template: string, controller: NrPasswordInputController, bindings: {__name: string, __ngModel: string, __type: string, __id: string, __label: string}, require: {__nrForm: string, __ngModelController: string}}}
 */
export const nrPasswordInputComponent = NrPasswordInputController.getComponentConfig(template);
