#!/usr/bin/env bash
#image_version=`date +%Y%m%d%H%M`;

cd /usr/src/node-app/egg-santak

docker-compose stop || true;
docker-compose down || true;

docker rmi --force $(docker images | grep nodejs | awk '{print $3}')

docker-compose build .;

docker-compose up -d;

docker logs nodejs;
