#!/bin/bash
BACKUP_DIR="./backups"
mkdir -p $BACKUP_DIR
TIMESTAMP=$(date +"%Y%m%d%H%M%S")
pg_dump -U $DB_USER $DB_NAME > $BACKUP_DIR/youkyouk_$TIMESTAMP.sql
echo "Backup completed at $BACKUP_DIR/youkyouk_$TIMESTAMP.sql"
