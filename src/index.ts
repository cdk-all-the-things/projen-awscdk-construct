import { awscdk, javascript } from 'projen';

export const PROJEN_VERSION = '^0.77.1';

export class AwsCdkConstructLibrary extends awscdk.AwsCdkConstructLibrary {
  constructor(options: awscdk.AwsCdkConstructLibraryOptions) {
    super({
      ...options,
      author: 'Randy Ridgley',
      authorAddress: 'randy.ridgley@gmail.com',
      copyrightOwner: 'Cdk All The Things',
      cdkVersion: '2.1.0',
      constructsVersion: '10.3.0',
      defaultReleaseBranch: 'main',
      jsiiVersion: '~5.0.0',
      projenrcTs: true,
      repositoryUrl: 'https://github.com/cdk-all-the-things/projen-awscdk-construct.git',

      autoApproveUpgrades: true,
      autoApproveOptions: {
        allowedUsernames: ['randyridgley', 'dependabot[bot]'],
        secret: 'GITHUB_TOKEN',
      },
      dependabot: true,
      dependabotOptions: {
        labels: ['auto-approve'],
      },

      npmAccess: javascript.NpmAccess.PUBLIC,
      release: true,
      releaseToNpm: true,
      // publishToNuget: {
      //   dotNetNamespace: "CdkAtt.Projen",
      //   packageId: "CdkAtt.Projen.AwscdkConstruct",
      // },
      publishToPypi: {
        distName: 'cdk_att.projen-awscdk-construct',
        module: 'cdk_att_projen_awscdk_construct',
      },
      publishToMaven: {
        mavenEndpoint: 'https://s01.oss.sonatype.org',
        mavenGroupId: 'com.cdk-att',
        mavenArtifactId: 'projen-awscdk-construct',
        javaPackage: 'com.cdk-att.projen.awscdk_construct',
      },

      gitignore: ['.idea/', '*.iml', '.vscode'],
    });
  }
}
