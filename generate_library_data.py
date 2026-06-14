import os
import json

ROOT_DIR = "/home/priyanshuksharma/Desktop/Python_For_DS-BeginnersLevel"
WEBSITE_DIR = os.path.join(ROOT_DIR, "website")

files_data = []

# Directories to search specifically, or just walk everything except website
for root, dirs, files in os.walk(ROOT_DIR):
    if "website" in root or "docs" in root or ".git" in root or ".gemini" in root:
        continue
    for file in files:
        if file.endswith(".md") or file.endswith(".py"):
            filepath = os.path.join(root, file)
            rel_path = os.path.relpath(filepath, ROOT_DIR)
            
            try:
                with open(filepath, "r", encoding="utf-8") as f:
                    content = f.read()
            except Exception as e:
                continue
                
            files_data.append({
                "id": rel_path.replace("/", "_").replace(".", "_"),
                "name": file,
                "path": rel_path,
                "type": "md" if file.endswith(".md") else "py",
                "content": content
            })

js_content = f"const libraryData = {json.dumps(files_data, indent=2)};"

with open(os.path.join(WEBSITE_DIR, "assets", "js", "library-data.js"), "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Generated library-data.js with {len(files_data)} files.")
