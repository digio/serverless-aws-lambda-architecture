class ServerlessAwsLambdaArchitecturePlugin {
  constructor(serverless) {
    this.serverless = serverless;
    this.awsProvider = serverless.getProvider('aws');
    this.providerNaming = this.awsProvider.naming;

    // Make this optional. Serverless 1.x does not use schema
    /* istanbul ignore next */
    if (serverless.configSchemaHandler && serverless.configSchemaHandler.defineFunctionProperties) {
      serverless.configSchemaHandler.defineFunctionProperties('aws', {
        properties: {
          architectures: {
            type: 'array',
          },
        },
      });
    }

    this.hooks = {
      'package:compileEvents': this.compile.bind(this),
    };
  }

  compile() {
    for (const functionName of this.serverless.service.getAllFunctions()) {
      const functionObj = this.serverless.service.getFunction(functionName);
      const functionRef = this.providerNaming.getLambdaLogicalId(functionName);

      if (functionObj.architectures) {
        const cf =
          this.serverless.service.provider.compiledCloudFormationTemplate.Resources[functionRef]
            .Properties;
        cf.Architectures = functionObj.architectures;
      }
    }
  }
}

module.exports = ServerlessAwsLambdaArchitecturePlugin;
