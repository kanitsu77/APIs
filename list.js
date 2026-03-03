import fs from "fs"
import path from "path"

export default function handler(req, res) {
  const apiDir = path.join(process.cwd(), "api")
  const categories = {}

  function scan(dir, category = "") {
    const files = fs.readdirSync(dir)

    files.forEach(file => {
      const fullPath = path.join(dir, file)
      const stat = fs.statSync(fullPath)

      if (stat.isDirectory()) {
        categories[file] = []
        scan(fullPath, file)
      } else if (file !== "list.js") {
        const name = file.replace(".js", "")
        categories[category].push(name)
      }
    })
  }

  scan(apiDir)

  res.status(200).json({
    status: true,
    endpoints: categories
  })
          }
