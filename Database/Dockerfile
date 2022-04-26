# from base image mysql
FROM mysql

# define root password
ENV MYSQL_ROOT_PASSWORD <PASSWORD HERE>

#insert sql from database export
ADD seccam_db.sql /docker-entrypoint-initdb.d

#open port connection
EXPOSE 3306