import { readFileSync } from 'fs'
import path from 'path'

export function getComponentCode(filePath: string): string {
  try {
    const fullPath = path.join(process.cwd(), filePath)
    const code = readFileSync(fullPath, 'utf-8')
    return (
      code
        // Remove className attributes
        .replace(/ className\s*=\s*({[^}]*}|["'][^"']*["'])/g, '')
        // Remove ChildSkeleton import
        .replace(
          /import\s*{\s*ChildSkeleton\s*}\s*from\s*['"]\.\.\/child-skeleton['"]\s*\n?/g,
          ''
        )
        // Replace ChildSkeleton component usage
        .replace(/<ChildSkeleton\s*\/>/g, '<div>Loading...</div>')
    )
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error)
    return '// Error loading component code'
  }
}
