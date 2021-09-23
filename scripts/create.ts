import chalk from 'chalk'
import commander from 'commander'
import path from 'path'
import fs from 'fs-extra'
import os from 'os'
import packageJson from '../package.json'

const toUpperCaseFirstLetter = (str: string) => {
  return `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`
}

export const toLowerCaseFirstLetter = (str: string) => {
  return `${str.slice(0, 1).toLowerCase()}${str.slice(1)}`
}

export const replaceName = (text: Buffer | string, sourceName: string, replaceName: string) => {
  return text
    .toString()
    .replace(
      new RegExp(toLowerCaseFirstLetter(sourceName), 'g'),
      toLowerCaseFirstLetter(replaceName)
    )
    .replace(
      new RegExp(toUpperCaseFirstLetter(sourceName), 'g'),
      toUpperCaseFirstLetter(replaceName)
    )
}
interface Path {
  from: string
  to: string
}
const writeFileSync = (path: Path, pageName: string) => {
  try {
    const text = fs.readFileSync(path.from)
    fs.writeFileSync(path.to, replaceName(text, 'useHooksName', pageName), 'utf8')
  } catch (error) {
    console.error(`error`, error)
    process.exit(1)
  }
}

let hooksName = ''
const init = () => {
  new commander.Command(packageJson.name)
    .version(packageJson.version)
    .arguments('<hooks-name>')
    .usage(`${chalk.green('<hooks-name>')} [options]`)
    .action((name) => {
      hooksName = name
    })
    .allowUnknownOption()
    .on('--help', () => {
      console.log(`${chalk.green('<hooks-name>')} is required.`)
    })
    .parse(process.argv)
  if (!hooksName.startsWith('use')) {
    console.error(`hooks name must start with${chalk.red('use')}.`)
    process.exit(1)
  }
  create(hooksName)
}
const rootPath = path.join(__dirname, '..')
const srcPath = path.join(rootPath, 'src')
const templatesPath = path.join(rootPath, 'scripts', 'templates', 'useHooksName')
const create = (name: string) => {
  const hooksPath = path.join(srcPath, name)
  if (!fs.existsSync(templatesPath)) {
    console.error(`模板: ${chalk.red(templatesPath)} 不存在!`)
    process.exit(1)
  }
  let isHooksExist = false
  if (!fs.existsSync(hooksPath)) {
    fs.mkdirSync(hooksPath)
  } else {
    isHooksExist = true
  }
  const readdirSync = (root: string, cb: (dir: string, file: string) => void) => {
    const rootPath = path.join(templatesPath, root)
    fs.readdirSync(rootPath).forEach((file) => {
      const currentPath = path.join(rootPath, file)
      const targetPath = path.join(srcPath, hooksName, file)
      const stat = fs.statSync(currentPath)
      if (stat.isFile()) {
        cb(root, file)
      } else if (stat.isDirectory()) {
        if (!fs.existsSync(targetPath)) {
          fs.mkdirSync(targetPath)
        }
        readdirSync(`${root}/${file}`, cb)
      }
    })
  }
  readdirSync('', (dir, file) => {
    const sourcePath = path.join(templatesPath, dir, file)
    const targetPath = path.join(srcPath, hooksName, dir, file)
    writeFileSync({ from: sourcePath, to: targetPath }, hooksName)
  })
  console.log()
  console.log(`🚀 page ${hooksName}创建成功 🚀`)
  console.log()
  console.log(`🔥 位置：${chalk.green(hooksPath)}`)
  console.log()

  const indexPath = path.join(srcPath, 'index.ts')
  const exportText = `export { default as ${hooksName} } from './${hooksName}'${os.EOL}`
  try {
    const text = fs.readFileSync(indexPath)
    if (text.toString().indexOf(exportText) === -1) {
      fs.appendFileSync(indexPath, exportText, 'utf8')
    }
  } catch (error) {
    console.log(`error`, error)
    console.log()
    console.error(chalk.red('src目录下index.ts导入失败，请手动导入'))
    console.log()
  }
}

init()
