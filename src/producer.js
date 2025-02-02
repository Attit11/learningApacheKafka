const { Chance } = require("chance");
const Kafka = require("node-rdkafka");

var chance = new Chance();

const kafkaConfig = {
  "metadata.broker.list": "localhost:9092", // Update if Kafka is running elsewhere
  "group.id": "test-group",
  "enable.auto.commit": true,
};

const topic = "animal";

const producer = new Kafka.Producer(kafkaConfig);

producer.on("ready", () => {
  console.log("Producer is ready");
  setInterval(() => {
    const message = chance.animal();
    producer.produce(topic, null, Buffer.from(message));
    console.log(`Produced: ${message}`);
  }, 3000);
});

producer.on("event.error", (err) => {
  console.error("Error in producer:", err);
});

producer.connect();
