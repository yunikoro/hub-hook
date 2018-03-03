#!/bin/bash

cd /www/exp-start
git pull
npm run pm2-restart
