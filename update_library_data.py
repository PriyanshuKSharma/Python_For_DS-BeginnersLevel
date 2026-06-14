import os
import json
import re

ROOT_DIR = "/home/priyanshuksharma/Desktop/Python_For_DS-BeginnersLevel"
DATA_FILE = os.path.join(ROOT_DIR, "website/assets/js/content-library-data.js")

with open(DATA_FILE, "r", encoding="utf-8") as f:
    js_content = f.read()

match = re.search(r"const CONTENT_LIBRARY = (\[.*\]);", js_content, flags=re.DOTALL)
if match:
    data = json.loads(match.group(1))
else:
    print("Could not find CONTENT_LIBRARY array in js file.")
    exit(1)

for root, dirs, files in os.walk(ROOT_DIR):
    if "website" in root or ".git" in root or ".gemini" in root:
        continue
    for file in files:
        if file.endswith(".py"):
            filepath = os.path.join(root, file)
            rel_path = os.path.relpath(filepath, ROOT_DIR)
            category = os.path.dirname(rel_path) or "Root"
            
            existing = [item for item in data if item.get("path") == rel_path]
            if existing:
                continue
                
            try:
                with open(filepath, "r", encoding="utf-8") as f:
                    content = f.read()
            except Exception:
                continue
                
            data.append({
                "id": "py-doc-" + file.replace(".", "_").replace(" ", "_"),
                "category": category,
                "path": rel_path,
                "title": file,
                "source": "Python",
                "content": content,
                "lines": len(content.splitlines())
            })

new_js = f"const CONTENT_LIBRARY = {json.dumps(data)};"
with open(DATA_FILE, "w", encoding="utf-8") as f:
    f.write(new_js)

print(f"Appended .py files. Total files now: {len(data)}")
