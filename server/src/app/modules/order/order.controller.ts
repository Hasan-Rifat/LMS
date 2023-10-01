import catchAsync from "../../../shared/catchAsync";
import { OrderServices } from "./order.services";

const getOrderById = catchAsync(async (req, res) => {
  const order = await OrderServices.getOrderById(req.params.id);

  res.status(200).json({
    status: "success",
    data: {
      order,
    },
  });
});

const getOrders = catchAsync(async (req, res) => {
  const orders = await OrderServices.getOrders();

  res.status(200).json({
    status: "success",
    data: {
      orders,
    },
  });
});

const updateOrder = catchAsync(async (req, res) => {
  const updatedOrder = await OrderServices.updateOrder(req.params.id, req.body);

  res.status(200).json({
    status: "success",
    data: {
      order: updatedOrder,
    },
  });
});

const deleteOrder = catchAsync(async (req, res) => {
  const deletedOrder = await OrderServices.deleteOrder(req.params.id);

  res.status(200).json({
    status: "success",
    data: {
      order: deletedOrder,
    },
  });
});

export const OrderController = {
  getOrderById,
  getOrders,
  updateOrder,
  deleteOrder,
};
