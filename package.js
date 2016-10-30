Package.describe({
  name: 'bramas:admin',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
 // 'react': '15.3.2',
 // 'react-dom': '15.3.2',
 // 'react-addons-pure-render-mixin': '15.3.2',
  'react-mounter': '1.2.0',
  'meteor-react-autoform' : '0.3.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.1.1');
  api.use('ecmascript');
  api.use('react-runtime');
  api.use('react-meteor-data');
  api.use([
    'kadira:flow-router',
    'aldeed:simple-schema@1.5.3',
    'aldeed:collection2@2.10.0',
    'check'
  ]);
  api.mainModule('admin.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('bramas:admin');
  api.mainModule('admin-tests.js');
});
