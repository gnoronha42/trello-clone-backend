import RabbitMQProducer from "../../infra/rabbitmq/RabbitMQProducer";


class NotificationService {
    static notifyBoardCreation(message: string): void {
        RabbitMQProducer.sendNotification('board_notifications', message);
    }

    static notifyCardCreation(message: string): void {
        RabbitMQProducer.sendNotification('card_notifications', message);
    }
}

export default NotificationService;