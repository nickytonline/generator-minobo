'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay('Welcome to the fabulous ' + chalk.red('generator-minobo') + ' generator!')
    );

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.appname // Default to current folder name
      },
      {
        type: 'input',
        name: 'version',
        message: 'Your project version',
        default: '0.0.1'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Your project description',
        default: ''
      },
      {
        type: 'input',
        name: 'author',
        message: 'Author',
        default: ''
      },
      {
        type: 'input',
        name: 'license',
        message: 'License',
        default: 'MIT'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    const { name, version, description, author, license } = this.props;

    this.fs.copy(
      this.templatePath('dotFiles/eslintignore'),
      this.destinationPath('.eslintignore')
    );
    this.fs.copy(this.templatePath('dotFiles/eslintrc'), this.destinationPath('.eslint'));
    this.fs.copy(
      this.templatePath('dotFiles/gitignore'),
      this.destinationPath('.gitignore')
    );
    this.fs.copy(this.templatePath('dotFiles/npmrc'), this.destinationPath('.npmrc'));
    this.fs.copy(
      this.templatePath('dotFiles/prettierignore'),
      this.destinationPath('.prettierignore')
    );
    this.fs.copy(
      this.templatePath('__tests__/dummy-test.spec.js'),
      this.destinationPath('__tests__/dummy-test.spec.js')
    );
    this.fs.copy(this.templatePath('src/index.js'), this.destinationPath('src/index.js'));
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      {
        name,
        version,
        description,
        author,
        license
      }
    );
    this.fs.copy(
      this.templatePath('package-lock.json'),
      this.destinationPath('package-lock.json')
    );
    this.fs.copyTpl(this.templatePath('README.md'), this.destinationPath('README.md'), {
      name
    });

    this.fs.copy(
      this.templatePath('vscode/launch.json'),
      this.destinationPath('.vscode/launch.json')
    );
    this.fs.copy(
      this.templatePath('vscode/extensions.json'),
      this.destinationPath('.vscode/extensions.json')
    );
  }

  install() {
    this.installDependencies();
  }
};
