export const validateLogin = async (req, res) => { 
  try {
    res.status(200).json({ "token": "Success" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}