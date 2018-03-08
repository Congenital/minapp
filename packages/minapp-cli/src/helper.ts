/******************************************************************
MIT License http://www.opensource.org/licenses/mit-license.php
Author Mora <qiuzhongleiabc@126.com> (https://github.com/qiu8310)
*******************************************************************/

import {execSync} from 'child_process'
import * as fs from 'fs-extra'
import * as path from 'path'
import * as JSON5 from 'json5'
import * as findup from 'mora-scripts/libs/fs/findup'
import {JSON_REGEXP} from '@minapp/common/dist/dev/config'
import {Minapp} from '@minapp/compiler'

export function walkDirectory(dir: string, cb: (dir: string, name: string, file: string, stat: fs.Stats) => boolean | void | undefined) {
  fs.readdirSync(dir).forEach(name => {
    let file = path.join(dir, name)
    let stat = fs.statSync(file)

    if (false !== cb(dir, name, file, stat)) {
      if (stat.isDirectory()) {
        walkDirectory(file, cb)
      }
    }
  })
}

export function getGitUser() {
  let name = tryExecCmdSync('git config --get user.name', '').trim()
  let email = tryExecCmdSync('git config --get user.email', '').trim()
  if (email) email = `<${email}>`
  return `${name}${email}`
}

function tryExecCmdSync(cmd: string, fallback: string): string
function tryExecCmdSync(cmd: string, fallback?: string): undefined | string {
  try {
    return execSync(cmd).toString()
  } catch (e) {
    return fallback
  }
}

export function getMinappConfig() {
  let minapp: Minapp = {}
  try {
    let root = path.dirname(findup.pkg())
    let file = fs.readdirSync(root).find(n => JSON_REGEXP.test(n) && n.replace(JSON_REGEXP, '') === 'minapp')
    if (file) minapp = JSON5.parse(fs.readFileSync(path.join(root, file)).toString())
  } catch (e) {}
  return minapp
}
