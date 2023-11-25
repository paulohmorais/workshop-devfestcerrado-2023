# workshop-devfestcerrado-2023
Workshop ministrado no devfestcerrado 2023, sobre signoz e open telemetry

## Install OpenTelemetry Collector on you linux distro

[Install Doc](https://opentelemetry.io/docs/collector/installation/)
[Github Repo](https://github.com/open-telemetry/opentelemetry-collector-releases/releases)

# DEB installation

```
sudo apt-get update
sudo apt-get -y install wget systemctl
wget https://github.com/open-telemetry/opentelemetry-collector-releases/releases/download/v0.89.0/otelcol-contrib_0.89.0_linux_amd64.deb
sudo dpkg -i otelcol-contrib_0.89.0_linux_amd64.deb
```

# Check Status

```
sudo systemctl status otelcol-contrib
```

# Check logs

```
sudo journalctl -u otelcol-contrib -f
```

# Edit config

```
sudo vim /etc/otelcol-contrib/config.yaml
```

# Restart 

```
sudo systemctl restart otelcol-contrib
```

## APP for APM

## To start redis

`docker run --name some-redis -p 6379:6379 -d redis`

Check redis is running with: `docker ps`

## To start app

`node app.js`

## To start SigNoz using Docker

```
git clone -b main https://github.com/SigNoz/signoz.git && cd signoz/deploy/
docker-compose -f docker/clickhouse-setup/docker-compose.yaml up -d
```

SigNoz frontend [http://localhost:3301/](http://localhost:3301/)

## To start app with Open Telemetry instrumentation

`node -r ./tracing.js app.js`

## Using k6 to make some traffic

`k6 run k6.js`