import { JuniorService } from "../services/juniorUser.service";

const service = new JuniorService();

export const createJunior = async (req: any, res: any) => {
  try {
    const response = await service.create(req.body);
    res.json({ success: true, data: response });
  } catch (error) {
    res.status(500).send({ success: false, message: error });
  }
};

export const getJunior = async (_req: any, res: any) => {
  try {
    const response = await service.find();
    res.json({ response });
  } catch (error) {
    res.status(500).send({ success: false, message: error });
  }
};

export const getJuniorById = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const response = await service.findOne(id);
    res.json(response);
  } catch (error) {
    res.status(500).send({ success: false, message: error });
  }
};

export const updateJunior = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const response = await service.update(id, body);
    res.json(response);
  } catch (error) {
    res.status(500).send({ success: false, message: error });
  }
};

export const deleteJunior = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const response = await service.delete(id);
    res.json(response);
  } catch (error) {}
};
