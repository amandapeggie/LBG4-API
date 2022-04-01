#!/bin/bash
#test application
npm install
npm test
#build image
docker build -t nodeimage .

