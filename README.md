1
Apache Kafka Setup Guide

This guide provides step-by-step instructions to install and run Apache Kafka locally.

Prerequisites

Java 8 or later installed

Apache Kafka downloaded

Zookeeper (unless using Kafka in KRaft mode)

Installation Steps

1. Download Kafka

Download the latest Kafka binary from the official website or use the following command:

wget https://downloads.apache.org/kafka/3.5.1/kafka_2.13-3.5.1.tgz

2. Extract Kafka

tar -xzf kafka_2.13-3.5.1.tgz
cd kafka_2.13-3.5.1

3. Start Kafka Services

Option 1: Start Kafka with Zookeeper

Start Zookeeper:

bin/zookeeper-server-start.sh config/zookeeper.properties

Start Kafka:

bin/kafka-server-start.sh config/server.properties

Option 2: Start Kafka in KRaft Mode (No Zookeeper)

Format storage directory (only needed the first time):

bin/kafka-storage.sh format -t $(bin/kafka-storage.sh random-uuid) -c config/kraft/server.properties

Start Kafka:

bin/kafka-server-start.sh config/kraft/server.properties

4. Verify Kafka is Running

Check if Kafka is running:

bin/kafka-topics.sh --list --bootstrap-server localhost:9092

If Kafka is running correctly, it will list existing topics or return an empty list if none exist.

5. Create a Test Topic (Optional)

bin/kafka-topics.sh --create --topic test-topic --bootstrap-server localhost:9092 --partitions 1 --replication-factor 1

6. Stop Kafka

To stop Kafka, run:

bin/kafka-server-stop.sh

If using Zookeeper, stop it as well:

bin/zookeeper-server-stop.sh

Additional Resources

Kafka Documentation

Kafka GitHub Repository
