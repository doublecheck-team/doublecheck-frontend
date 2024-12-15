#!/bin/sh
cd ../
mkdir output
cp -R ./doublecheck-frontend/* ./output
cp -R ./output ./doublecheck-frontend/
