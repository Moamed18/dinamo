import { Body, Controller, Get, Param, Patch, Post} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto, UpdateOrderStatusDto, UpdatePaymentStatusDto } from './dto/order.dto';

@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService) { }

    @Post('')
    async create(@Body() dto: CreateOrderDto) {
        return this.orderService.createOrder(dto);
    }

    @Patch(':id/updateOrderStatus')
    async updateOrderStatus(@Param('id') orderId: string, @Body() dto: UpdateOrderStatusDto) {
        return this.orderService.updateOrderStatus(orderId, dto);
    }

    @Patch(':id/updateOrderPaymentStatus')
    async updateOrderPaymentStatus(@Param('id') orderId: string, @Body() dto: UpdatePaymentStatusDto) {
        return this.orderService.updateOrderPaymentStatus(orderId, dto);
    }

    @Patch(':id/cancelOrder')
    async cancelOrder(@Param('id') orderId: string) {
        return this.orderService.cancelOrder(orderId);
    }


    @Get(':status/getUserOrdersByStatus')
    async getUserOrdersByStatus(@Param('status') status: string) {
        return this.orderService.getUserOrdersByStatus(status);
    }

    @Get(':id/getOneOrder')
    async getOneOrder(@Param('id') orderId: string) {
        return this.orderService.getOneOrder(orderId);
    }

    @Get('getAllOrders')
    async getAllOrders() {
        return this.orderService.getAllOrders();
    }

}
