const Plugin = require('./index');

describe('plugin', () => {
  it('should add the architecture property to functions in serverless.json that want to use it', () => {
    const sls = {
      getProvider: jest.fn().mockReturnValue({
        naming: {
          getLambdaLogicalId: jest
            .fn()
            .mockReturnValueOnce('WithArm64Lambda')
            .mockReturnValueOnce('Withx86Lambda'),
        },
      }),
      service: {
        getAllFunctions: jest.fn().mockReturnValue(['withArm64', 'withx86']),
        getFunction: jest
          .fn()
          .mockReturnValueOnce({
            architectures: 'arm64',
          })
          .mockReturnValueOnce({}),
        provider: {
          compiledCloudFormationTemplate: {
            Resources: {
              WithArm64Lambda: { Properties: {} },
              Withx86Lambda: { Properties: {} },
            },
          },
        },
      },
    };
    const plugin = new Plugin(sls);

    plugin.compile();

    expect(sls.service.provider.compiledCloudFormationTemplate.Resources).toEqual({
      WithArm64Lambda: {
        Properties: {
          Architectures: 'arm64', // <---- added!
        },
      },
      Withx86Lambda: { Properties: {} },
    });
  });
});
