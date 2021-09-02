import { MongoDealsRepository } from "../../repositories/implementations/MongoDealsRepository";
import { DealUpdateNotificationsController } from "./DealUpdateNoticationController";
import { DealUpdateNotifications } from "./DealUpdateNotifications";

const mongoDealsRepository = new MongoDealsRepository();

const dealUpdateNotification = new DealUpdateNotifications(mongoDealsRepository);

const dealUpdateNotificationsController = new DealUpdateNotificationsController(dealUpdateNotification);

export { dealUpdateNotification, dealUpdateNotificationsController };
