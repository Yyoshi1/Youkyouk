const { Order, Product } = require('../../models');

class OrderService {
  static async createOrder(userId, items) {
    let total = 0;
    for (const item of items) {
      const product = await Product.findByPk(item.productId);
      if (!product || product.stock < item.quantity)
        throw new Error(`Product ${item.productId} unavailable`);
      total += product.price * item.quantity;
      product.stock -= item.quantity;
      await product.save();
    }

    const order = await Order.create({
      userId,
      total,
      status: 'pending'
    });

    return order;
  }

  static async updateStatus(orderId, status) {
    const order = await Order.findByPk(orderId);
    if (!order) throw new Error('Order not found');
    order.status = status;
    await order.save();
    return order;
  }
}

module.exports = OrderService;
