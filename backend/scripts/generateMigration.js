const { exec } = require("child_process");

const migrationName = "add-domains-table";

exec(`npx typeorm migration:create src/migrations/${migrationName}`, (err, stdout, stderr) => {
  if (err) {
    console.error("Error creating migration:", err);
    return;
  }
  console.log("Migration created successfully:", stdout);
});
