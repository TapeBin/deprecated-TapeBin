[General]
trusted_hosts[] = "localhost:8080"
enable_trusted_host_check=0
proxy_client_headers[] = HTTP_X_FORWARDED_FOR
proxy_client_headers[] = HTTP_X_REAL_IP
proxy_host_headers[] = HTTP_X_FORWARDED_HOST
proxy_uri_header=1
cors_domains[] = *
