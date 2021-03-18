import { readFileSync, writeFileSync } from 'fs'

import stylus from 'stylus'
import pug from 'pug'

const stylusEntryPoint = readFileSync('./styles/global.styl', 'utf-8')
const styles = stylus(stylusEntryPoint).set('paths', ['styles']).set('compress', true)

const compiledHtml = pug.renderFile('./pages/content.pug', { styles: styles.render() })

writeFileSync('crt.svg', compiledHtml)
