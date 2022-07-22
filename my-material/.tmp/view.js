

export { default } from '/mnt/d/StudyCode/toturial-lowcode/my-material/src/index.tsx';

import * as componentInstances from '/mnt/d/StudyCode/toturial-lowcode/my-material/src/index.tsx';

import '/mnt/d/StudyCode/toturial-lowcode/my-material/src/index.scss'

export * from '/mnt/d/StudyCode/toturial-lowcode/my-material/src/index.tsx';

const coveredComponents = {};

const library = 'BizComps';
const execCompile = !!false;

if (!execCompile) {
  window[library] = Object.assign({__esModule: true}, componentInstances || {}, coveredComponents || {});
}

function getRealComponent(component, componentName) {
  if (component.default) return component.default;
  if (component[componentName]) return component[componentName];
  return component;
}