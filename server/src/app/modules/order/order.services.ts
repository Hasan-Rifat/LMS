import { Order } from "@prisma/client";
import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";

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

  if (!order) throw new ApiError(httpStatus.NOT_FOUND, "Order not found");

  return order;
};

const getOrders = async (): Promise<Order[]> => {
  const orders = await prisma.order.findMany({
    include: {
      user: true,
      course: true,
    },
  });

  if (!orders) throw new ApiError(httpStatus.NOT_FOUND, "Orders not found");

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

  if (!updatedOrder)
    throw new ApiError(httpStatus.NOT_FOUND, "Order not found");

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

  if (!deletedOrder)
    throw new ApiError(httpStatus.NOT_FOUND, "Order not found");

  return deletedOrder;
};

export const OrderServices = {
  getOrderById,
  getOrders,
  updateOrder,
  deleteOrder,
};
