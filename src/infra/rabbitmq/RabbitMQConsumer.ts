import amqp from 'amqplib/callback_api';

class RabbitMQConsumer {
    static receiveNotification(queue: string): void {
        amqp.connect('amqp://localhost', (error0, connection) => {
            if (error0) {
                throw error0;
            }
            connection.createChannel((error1, channel) => {
                if (error1) {
                    throw error1;
                }

                channel.assertQueue(queue, {
                    durable: false
                });

                console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

                channel.consume(queue, (msg) => {
                    if (msg !== null) {
                        console.log(" [x] Received %s", msg.content.toString());
                    }
                }, {
                    noAck: true
                });
            });
        });
    }
}

export default RabbitMQConsumer;