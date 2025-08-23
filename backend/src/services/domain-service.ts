import { TransactionBaseService } from "@medusajs/medusa";
import { Domain } from "../models/domain";

class DomainService extends TransactionBaseService {
  constructor(container) {
    super(container);
    this.manager_ = container.manager;
  }

  async list() {
    const repo = this.manager_.getRepository(Domain);
    return await repo.find();
  }

  async create(data) {
    const repo = this.manager_.getRepository(Domain);
    const domain = repo.create(data);
    return await repo.save(domain);
  }

  async update(id, data) {
    const repo = this.manager_.getRepository(Domain);
    await repo.update(id, data);
    return await repo.findOne({ where: { id } });
  }

  async delete(id) {
    const repo = this.manager_.getRepository(Domain);
    return await repo.delete(id);
  }
}

export default DomainService;
