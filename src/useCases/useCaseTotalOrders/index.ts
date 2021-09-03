import { MongoDealsRepository } from "../../repositories/implementations/MongoDealsRepository";
import { UserCaseDealsConsolidated } from "./userCaseDealsConsolidated";

const mongoDealsRepository = new MongoDealsRepository();

const userCaseDealsConsolidated = new UserCaseDealsConsolidated(mongoDealsRepository);

export { userCaseDealsConsolidated };
