#!/usr/bin/env bash
#image_version=`date +%Y%m%d%H%M`;

cd /usr/src/node-app/egg-santak

docker-compose stop || true;


# docker-compose down || true;

docker-compose build .;

docker-compose up -d;

docker logs nodejs;
#删除build过程中产生的镜像    #docker image prune -a -f
# docker rmi $(docker images -f "dangling=true" -q)
# 对空间进行自动清理
#docker system prune -a -f
