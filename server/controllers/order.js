import { response } from "express";

export const processOrder = async (req, res) => {
  try {
    let respone = {}
    const { func, key, value, data } = req.body;

    response = await process(func, key, value, data);

    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

const process = (func, key, value, data) => 
  new Promise(resolve => {
    switch (func) {
      case 'ADD': {
        return resolve({ 'items': {} });
      }
      case 'EDIT': {
        return resolve(data);
      }
      default: {
        return resolve(data);
      }
    };
  });
