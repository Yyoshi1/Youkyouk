#!/bin/bash
timestamp=$(date +%Y%m%d_%H%M%S)
backup_dir="./backups/$timestamp"
mkdir -p $backup_dir

echo "Backing up PostgreSQL database..."
pg_dump -U youkyouk_user -h 127.0.0.1 youkyouk > $backup_dir/youkyouk.sql

echo "Backing up TemplateVersions..."
cp -r backend/core/models/template_versions $backup_dir/

echo "Backup completed at $backup_dir"
