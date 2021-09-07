import pika

params = pika.URLParameters('amqps://fkggdzym:wUFW9Knc3MJ5sb8tqRs2K4a_RypB0u5E@cattle.rmq2.cloudamqp.com/fkggdzym')
connection = pika.BlockingConnection(params)

channel = connection.channel()

channel.queue_declare(queue="admin")


def callback(ch, method, property, body):
    print("Receive message")
    print(body)


channel.basic_consume(queue='admin', on_message_callback=callback)

print("Start Consuming")

channel.start_consuming()
channel.close()
