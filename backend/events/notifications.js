const EventEmitter = require('events');
class NotificationEmitter extends EventEmitter {}

const notifier = new NotificationEmitter();

// 
notifier.on('orderCreated', (order) => {
  console.log(`New order created: ${order.id} with total ${order.total}`);
});

module.exports = notifier;
