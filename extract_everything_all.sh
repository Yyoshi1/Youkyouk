#!/bin/bash

# اسم مجلد المشروع
PROJECT_DIR=~/youkyouk

# التأكد من وجود المجلد
if [ ! -d "$PROJECT_DIR" ]; then
    echo "❌ مجلد المشروع $PROJECT_DIR غير موجود"
    exit 1
fi

cd "$PROJECT_DIR"

# اسم ملف الإخراج
OUTPUT_FILE="all_project_code.txt"
echo "" > "$OUTPUT_FILE"

# الامتدادات التي نريد استخراجها
EXTENSIONS=("*.js" "*.jsx" "*.ts" "*.tsx" "*.md" "*.sh" "*.json")

# استخراج الأكواد من كل الملفات والمجلدات الفرعية
for ext in "${EXTENSIONS[@]}"; do
    find . -type f -name "$ext" | while read file; do
        echo -e "\n===== $file =====\n" >> "$OUTPUT_FILE"
        cat "$file" >> "$OUTPUT_FILE"
    done
done

echo "✅ تم استخراج كل الأكواد من المشروع في الملف $OUTPUT_FILE"
