#!/usr/bin/bash

(cd Server;
npm start) && 
(cd ../Client;
npm run dev);

