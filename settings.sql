-- settings.sql
CREATE DATABASE hive;
CREATE USER hiveuser WITH PASSWORD 'hive';
GRANT ALL PRIVILEGES ON DATABASE hive TO hiveuser;
