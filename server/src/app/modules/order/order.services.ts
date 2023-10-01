import { Order } from "@prisma/client";
import prisma from "../../../shared/prisma";

const getOrderById = async (orderId: string): Promise<Order | null> => {
  const order = await prisma.order.findUnique({
    where: {
      id: orderId,
    },
    include: {
      user: true,
      course: true,
    },
  });

  return order;
};

const getOrders = async (): Promise<Order[]> => {
  const orders = await prisma.order.findMany({
    include: {
      user: true,
      course: true,
    },
  });

  return orders;
};

const updateOrder = async (orderId: string, order: Order): Promise<Order> => {
  const updatedOrder = await prisma.order.update({
    where: {
      id: orderId,
    },
    data: {
      ...order,
      paymentInfo: order.paymentInfo as any,
    },
    include: {
      user: true,
      course: true,
    },
  });

  return updatedOrder;
};

const deleteOrder = async (orderId: string): Promise<Order> => {
  const deletedOrder = await prisma.order.delete({
    where: {
      id: orderId,
    },
    include: {
      user: true,
      course: true,
    },
  });

  return deletedOrder;
};

export const OrderServices = {
  getOrderById,
  getOrders,
  updateOrder,
  deleteOrder,
};
