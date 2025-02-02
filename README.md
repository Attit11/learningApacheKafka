1
**Apache Kafka Setup Guide**

This guide provides step-by-step instructions to install and run Apache Kafka locally.

**Prerequisites**

Java 8 or later installed

Apache Kafka downloaded

Zookeeper (unless using Kafka in KRaft mode)

Installation Steps

**1. Download Kafka**

Download the latest Kafka binary from the official website or use the following command or from official download page:

wget https://downloads.apache.org/kafka/3.5.1/kafka_2.13-3.5.1.tgz

**2. Extract Kafka**

tar -xzf kafka_2.13-3.5.1.tgz
cd kafka_2.13-3.5.1

**3. Start Kafka Services**

Start Kafka with Zookeeper

**Start Zookeeper:**

bin/zookeeper-server-start.sh config/zookeeper.properties

**Start Kafka:**

bin/kafka-server-start.sh config/server.properties

**Start Kafka:**

bin/kafka-server-start.sh config/kraft/server.properties

