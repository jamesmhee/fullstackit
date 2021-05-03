import { OrderTC } from "../../models";

export const createOrder = OrderTC.getResolver("createOne");
export const updateOrderById = OrderTC.getResolver("updateById");
export const removeOrderById = OrderTC.getResolver("removeById");
