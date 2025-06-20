const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "medease-app",
  brokers: ["localhost:9092"],
});

const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: "medease-group" });

const connectKafka = async () => {
  await producer.connect();
  await consumer.connect();
  await consumer.subscribe({ topic: "notifications", fromBeginning: false });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(`Received message: ${message.value.toString()}`);
      // TODO: handle the notification, save to DB, send push/email, etc.
    },
  });
};

module.exports = { producer, connectKafka };
