const Kafka = require("node-rdkafka");

const kafkaConfig = {
  "metadata.broker.list": "localhost:9092", // Update if Kafka is running elsewhere
  "group.id": "test-group",
  "enable.auto.commit": true,
};

const topic = "animal";

const consumer = new Kafka.KafkaConsumer(
  { ...kafkaConfig, "auto.offset.reset": "earliest" },
  {}
);

consumer.on("ready", () => {
  try {
    console.log("Consumer is ready");
    consumer.subscribe([topic]);
    consumer.consume();
  } catch (error) {
    console.log("ERROR");
  }
});

consumer.on("data", (message) => {
  console.log(`Consumed: ${message.value}`);
});

consumer.on("event.error", (err) => {
  console.error("Error in consumer:", err);
});

consumer.connect();
