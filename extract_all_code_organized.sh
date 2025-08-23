#!/bin/bash

# الانتقال إلى مجلد المشروع
cd ~/youkyouk || { echo "❌ مجلد youkyouk غير موجود"; exit 1; }

# إنشاء الملف النهائي
output_file="all_code.txt"
echo "" > "$output_file"

# دالة لاستخراج الأكواد من مجلد معين
extract_folder() {
    folder=$1
    section_name=$2
    extensions=("*.js" "*.jsx" "*.ts" "*.tsx" "*.md")

    echo "===== قسم $section_name =====" >> "$output_file"
    for ext in "${extensions[@]}"; do
        find "$folder" -type f -name "$ext" | while read file; do
            echo -e "\n===== $file =====\n" >> "$output_file"
            cat "$file" >> "$output_file"
        done
    done
    echo -e "\n\n" >> "$output_file"
}

# استخراج الأكواد من الأقسام المختلفة
extract_folder "backend" "Backend"
extract_folder "frontend" "Frontend"
extract_folder "Docs" "Documentation"

# استخراج ملفات الجذرية
echo "===== قسم Root =====" >> "$output_file"
root_files=("db.js" "server.js" "package.json" "package-Look.json" "*.md" "*.sh")
for pattern in "${root_files[@]}"; do
    for file in $pattern; do
        [ -f "$file" ] || continue
        echo -e "\n===== $file =====\n" >> "$output_file"
        cat "$file" >> "$output_file"
    done
done

echo "✅ تم استخراج كل الأكواد منظمة في $output_file"
