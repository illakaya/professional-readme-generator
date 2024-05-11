// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
        case 'Apache License 2.0':
            return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        case 'GNU Affero General Public License v3.0':
            return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
        case 'GNU General Public License v3.0':
            return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        case 'GNU General Public License v2.0':
            return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
        case 'MIT License':
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        case 'BSD 3-Clause License':
            return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
        case 'BSD 2-Clause License':
            return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
        case 'Boost Software License 1.0':
            return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
        case 'Creative Commons Zero v1.0 Universal':
            return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';
        case 'Mozilla Public License 2.0':
            return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
        case 'The Unlicense':
            return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
        case 'None':
          return '';
        default:
            return '';
    }
}
            
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch (license) {
        case 'Apache License 2.0':
            return 'https://opensource.org/licenses/Apache-2.0';
        case 'GNU Affero General Public License v3.0':
            return 'https://www.gnu.org/licenses/agpl-3.0';
        case 'GNU General Public License v3.0':
            return 'https://www.gnu.org/licenses/gpl-3.0';
        case 'GNU General Public License v2.0':
            return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
        case 'MIT License':
            return 'https://opensource.org/licenses/MIT';
        case 'BSD 3-Clause License':
            return 'https://opensource.org/licenses/BSD-3-Clause';
        case 'BSD 2-Clause License':
            return 'https://opensource.org/licenses/BSD-2-Clause';
        case 'Boost Software License 1.0':
            return 'https://www.boost.org/LICENSE_1_0.txt';
        case 'Creative Commons Zero v1.0 Universal':
            return 'http://creativecommons.org/publicdomain/zero/1.0/';
        case 'Mozilla Public License 2.0':
            return 'https://opensource.org/licenses/MPL-2.0';
        case 'The Unlicense':
            return 'http://unlicense.org/';
        case 'None':
          return '';
        default:
            return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'None') {
        return 'No license';
    } else {
// Format exactly how you want it to render
        return `${renderLicenseBadge(license)}  
Please refer to the LICENSE in the repo or go to ${renderLicenseLink(license)}.`
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credit}

## License

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions about the repository, please contact me via email.
- GitHub: [${data.username}](https://github.com/${data.username})
- Email: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
