import { Junior } from "../db/models/juniorUser.model";

export class JuniorService {
  constructor() {}

  async find() {
    const res = await Junior.findAll();
    return res;
  }

  async findOne(id: number) {
    const res = await Junior.findByPk(id);
    return res;
  }

  async create(data: any) {
    const res = await Junior.create(data);
    return res;
  }

  async update(id: number, data: any) {
    const model = await this.findOne(id);
    const res = await model?.update(data);
    return res;
  }

  async delete(id: number) {
    const model = await this.findOne(id);
    await model?.destroy();
    return { deleted: true };
  }
}
