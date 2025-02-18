import { readFileSync } from 'fs'
import path from 'path'

export function getComponentCode(filePath: string): string {
  try {
    const fullPath = path.join(process.cwd(), filePath)
    return readFileSync(fullPath, 'utf-8')
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error)
    return '// Error loading component code'
  }
}
