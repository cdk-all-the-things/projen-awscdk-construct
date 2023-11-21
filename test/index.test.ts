import { AwsCdkConstructLibrary } from '../src';

describe('AwsCdkConstructLibrary', () => {
  it('', () => {
    // Given
    const project = new AwsCdkConstructLibrary({
      cdkVersion: '2.1.0',
      ...defaultOptions,
    });

    // Then
    expect(project.name).toEqual('test-project');
  });
});

const defaultOptions = {
  author: 'Randy Ridgley',
  authorAddress: 'randy.ridgley@gmail.com',
  clobber: false,
  defaultReleaseBranch: 'main',
  jest: false,
  name: 'test-project',
  repositoryUrl: 'https://github.com/cdk-all-the-things/projen-awscdk-construct.git',
} as const;
