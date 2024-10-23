import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Order, OrderDocument } from "./entity/order.entity";
import { CreateOrderDto, UpdateOrderStatusDto, UpdatePaymentStatusDto } from "./dto/order.dto";

@Injectable()
export class OrderService {
    constructor(
        @InjectModel(Order.name) public orderModel: Model<OrderDocument>,
    ) { }


    async createOrder(dto: CreateOrderDto) {
    }


    async updateOrderStatus(orderId: string, dto: UpdateOrderStatusDto) {
    }

    async updateOrderPaymentStatus(orderId: string, dto: UpdatePaymentStatusDto) {
    }

    async cancelOrder(orderId: string) {
    }


    async getUserOrdersByStatus(status: string) {

    }

    async getOneOrder(orderId: string) {

    }
    
    async getAllOrders() {

    }





}