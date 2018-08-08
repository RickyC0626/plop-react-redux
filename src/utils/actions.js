const getAddAction = (
  componentPath,
  usedCase,
  fileName,
  templateFile,
  additionalConfig,
) => {
  const action = {
    type: 'add',
    path: `${componentPath}/{{${usedCase} name}}/${fileName}.js`,
    templateFile: templateFile,
    abortOnFail: true,
  };
  if (additionalConfig !== null) {
    action['data'] = additionalConfig;
  }
  return action;
};

module.exports = {
  getAddAction,
};
