#!/usr/bin/env node

const data = {
    name: 'Lucas Silva /',
    handle: 'lucasSlv',
    work: 'Frontend Developer',
    twitter: 'https://twitter.com/luscaxlx',
    github: 'https://github.com/lucasSlv',
    linkedin: 'https://www.linkedin.com/in/lucas-silva-166864237/',
    npx: 'npx lucasSlv',
    labelWork: '      Work:',
    labelTwitter: '   Twitter:',
    labelGitHub: '    GitHub:',
    labelLinkedIn: '  LinkedIn:',
    labelCard: '      Card:'
  }

const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const carding = `${data.labelCard}  ${data.npx}`

const output = heading + newline + newline + working + newline + twittering + newline + githubing + newline + linkedining + newline  + newline + carding

console.log(output)