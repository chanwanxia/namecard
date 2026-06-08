import { spawnSync } from 'node:child_process'

const args = process.argv.slice(2)
const eslintArgs = ['.', '--ext', 'ts,tsx', '--report-unused-disable-directives', '--max-warnings', '0']

/**
 * Runs eslint in standard or auto-fix mode based on the provided CLI arguments.
 */
function runLint() {
  const shouldFix = args.includes('fix') || args.includes('--fix')
  const finalArgs = shouldFix ? [...eslintArgs, '--fix'] : eslintArgs
  const result = spawnSync('pnpm', ['exec', 'eslint', ...finalArgs], {
    stdio: 'inherit',
    shell: process.platform === 'win32',
  })

  if (typeof result.status === 'number') {
    process.exit(result.status)
  }

  process.exit(1)
}

runLint()
