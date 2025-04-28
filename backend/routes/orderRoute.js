import express from 'express';
import { allOrder, placeOrder, placeOrderStripe, updateStatus, userOrders, verifyStripe } from '../controllers/orderController.js';
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';


const orderRouter = express.Router();


//Admin Feature
orderRouter.post('/list', adminAuth, allOrder);
orderRouter.post('/status', adminAuth, updateStatus);

//Payment Feature
orderRouter.post('/place', authUser, placeOrder);
orderRouter.post('/stripe', authUser, placeOrderStripe);

//User Feature
orderRouter.post('/userorders', authUser, userOrders);

//verify payment
orderRouter.post('/verifyStripe', authUser, verifyStripe);

export default orderRouter;