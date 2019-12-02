#!/usr/bin/env bash
#image_version=`date +%Y%m%d%H%M`;

docker-compose stop || true;
docker-compose down || true;

docker rmi nodejs

docker-compose build;

docker-compose up -d;

docker logs nodejs;

# docker system prune -a -f;