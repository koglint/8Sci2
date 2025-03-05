import os
import json

# Base directory for assets
base_dir = "../assets"

# List of categories (subfolders) to scan
categories = ["skin", "pants", "tops", "eyes", "mouth", "hair", "shoes", "masks"]

# Output file path
output_file = os.path.join("../json/customisation-options.json")

# Load existing JSON data if the file exists
if os.path.exists(output_file):
    with open(output_file, "r") as json_file:
        customisation_options = json.load(json_file)
else:
    customisation_options = {}

# Scan for new PNG files in each category
for category in categories:
    category_path = os.path.join(base_dir, category)
    if os.path.exists(category_path):
        existing_files = {item["file"] for item in customisation_options.get(category, [])}
        
        # List all PNG files in the category folder
        new_files = [
            {
                "file": file,
                "label": file.replace('.png', '').replace('_', ' ').title(),
                "tier": 3,
                "cost": 300
            }
            for file in os.listdir(category_path) if file.endswith('.png') and file not in existing_files
        ]

        # Add new files to the existing category
        if category not in customisation_options:
            customisation_options[category] = []
        customisation_options[category].extend(new_files)

# Write the updated JSON data to the file
with open(output_file, "w") as json_file:
    json.dump(customisation_options, json_file, indent=4)

print(f"Customisation options updated in `{output_file}`!")
