import { readFileSync, writeFileSync } from 'fs'

import stylus from 'stylus'
import pug from 'pug'

const stylusEntryPoint = readFileSync('./stylus/global.styl', 'utf-8')
const styles = stylus(stylusEntryPoint).set('paths', ['stylus']).set('compress', true)

const compiledHtml = pug.renderFile('./crt.pug', { styles: styles.render() })

writeFileSync('crt.svg', compiledHtml)
