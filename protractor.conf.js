require('ts-node/register');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'http://localhost:8080/',
    specs: ['e2e/**/*.e2e-spec.ts'],
    plugins: [{
        package: 'protractor-console',
        logLevels: ['debug']
    }],
    useAllAngular2AppRoots: true
}