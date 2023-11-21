import { awscdk, javascript } from 'projen';
import { UpgradeDependenciesSchedule } from 'projen/lib/javascript';
import { PROJEN_VERSION } from './src';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Randy Ridgley',
  authorAddress: 'randy.ridgley@gmail.com',
  copyrightOwner: 'Cdk All The Things',
  cdkVersion: '2.1.0',
  constructsVersion: '10.3.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: '@cdk-att/projen-awscdk-construct',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/rridgley/projen-awscdk-construct.git',

  autoApproveUpgrades: true,
  autoApproveOptions: {
    allowedUsernames: ['randyridgley', 'dependabot[bot]'],
    secret: 'GITHUB_TOKEN',
  },
  dependabot: true,
  dependabotOptions: {
    labels: ['auto-approve'],
  },
  depsUpgradeOptions: {
    workflowOptions: {
      schedule: UpgradeDependenciesSchedule.MONTHLY,
    },
  },
  npmAccess: javascript.NpmAccess.PUBLIC,
  minNodeVersion: '18.0.0',
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
  // publishToMaven: {
  //   mavenEndpoint: 'https://s01.oss.sonatype.org',
  //   mavenGroupId: 'com.cdk-att',
  //   mavenArtifactId: 'projen-awscdk-construct',
  //   javaPackage: 'com.cdk-att.projen.awscdk_construct',
  // },
  gitignore: ['.idea/', '*.iml', '.vscode'],
  devDeps: [`projen@${PROJEN_VERSION}`] /* Runtime dependencies of this module. */,
  peerDeps: [`projen@${PROJEN_VERSION}`],
});
project.synth();
