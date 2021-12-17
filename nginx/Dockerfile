FROM nginx:1.17-alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY ./production/conf.d/default.conf /etc/nginx/conf.d/default.conf

#CMD [ "nginx", "-g", "daemon off;" ]
