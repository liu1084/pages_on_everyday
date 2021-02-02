# Start with a base image containing Java runtime
#FROM openjdk:8-jdk-alpine
FROM openjdk:8u232-jre

# Add Maintainer Info
LABEL maintainer="ziming.xing@proaimltd.com"

# Add a volume pointing to /tmp
# VOLUME /tmp

# The application's jar file
ARG JAR_FILE=trinity-entrypoint-0.0.1.jar

# Add the application's jar to the container
ADD ${JAR_FILE} app.jar

# Update Access time, modification time
RUN sh -c 'touch /app.jar'

# RUN apk update && apk add tzdata && cp -r -f /usr/share/zoneinfo/PRC /etc/localtime

RUN java -version

# JVM Server Configuration
ENV JAVA_OPTS="-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005"
# Open Port
#EXPOSE 9090

# Run the jar file
ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar /app.jar --spring.profiles.active=dev" ]