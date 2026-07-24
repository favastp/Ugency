import os
import re
import shutil

project_dir = "/home/fawas/.gemini/antigravity/scratch/ugency"
assets_dir = os.path.join(project_dir, "assets", "images")
os.makedirs(assets_dir, exist_ok=True)

brain_dir = "/home/fawas/.gemini/antigravity/brain/aa234602-19aa-439e-81a8-066e07bbb8c4/"

html_files = [f for f in os.listdir(project_dir) if f.endswith(".html")]

for filename in html_files:
    filepath = os.path.join(project_dir, filename)
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Find all absolute image paths in src attributes
    matches = re.findall(r'src="(/home/fawas/\.gemini/antigravity/brain/[^"]+)"', content)
    
    for match in matches:
        basename = os.path.basename(match)
        dest_path = os.path.join(assets_dir, basename)
        
        # Copy the image file to the local assets folder if it exists
        if os.path.exists(match):
            shutil.copy2(match, dest_path)
            print(f"Copied {basename} to assets/images/")
        
        # Replace the absolute path with the relative path in the HTML content
        content = content.replace(match, f"assets/images/{basename}")
    
    # Save the updated HTML
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
        print(f"Updated {filename}")

print("All absolute image paths converted to relative and files copied successfully.")
