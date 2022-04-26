# from base image mysql
FROM mysql

ARG DEFINED_PASSWORD
ARG DEFINED_DBNAME
# define root password
ENV MYSQL_ROOT_PASSWORD $DEFINED_PASSWORD
# define database name
ENV MYSQL_DATABASE $DEFINED_DBNAME

#insert sql from database export
COPY ./seccam_db.sql /docker-entrypoint-initdb.d

#open port connection
EXPOSE 3306