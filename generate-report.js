const reporter = require('multiple-cucumber-html-reporter');
reporter.generate({
  jsonDir: 'reports',
  reportPath: 'reports/html-report',
  metadata: {
    browser: {
      name: 'chromium',
      version: 'latest'
    },
    device: 'Local machine',
    platform: {
      name: 'macOS',
      version: 'Sonoma'
    }
  },
  customData: {
    title: 'Execution Info',
    data: [
      { label: 'Project', value: 'Playwright + Cucumber' },
      { label: 'Execution Date', value: new Date().toLocaleString() }
    ]
  }
});
