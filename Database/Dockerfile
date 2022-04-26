# from base image mysql
FROM mysql

# define root password
ENV MYSQL_ROOT_PASSWORD testDBpassword

# define database name
ENV MYSQL_DATABASE seccam_db

#insert sql from database export
COPY ./seccam_db.sql /docker-entrypoint-initdb.d

#open port connection
EXPOSE 3306