export const processLogic = async (req, res) => { 
  try {
    const { name, additional } = req.body;

    var response = logic({ name: name, additional: additional });

    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

const logic = (params) => {
  switch (params.name) {
    case 'get_doc_id': {
      return { Id: '1' }
    }
    default: {
      return {};
    }
  }
};
