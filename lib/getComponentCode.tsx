import { readFileSync } from 'fs'
import path from 'path'

export function getComponentCode(filePath: string): string {
  try {
    const fullPath = path.join(process.cwd(), filePath)
    const code = readFileSync(fullPath, 'utf-8')
    // Remove className attributes using regex replacement
    return code.replace(/ className\s*=\s*({[^}]*}|["'][^"']*["'])/g, '')
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error)
    return '// Error loading component code'
  }
}
