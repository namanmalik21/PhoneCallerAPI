const SpamService = require('../Services/spamservice');
const User = require('../models/user');
const authenticateToken = require('../middleware/authenticateToken');




const SpamController = {
    markNumberAsSpam: async (req, res) => {
      try {
        const { phone_number } = req.body;
  
        if (!phone_number) {
          return res.status(400).json({ success: false, message: 'Phone number is required' });
        }
  
       
        authenticateToken(req, res, async () => {
            try {
              const result = await SpamService.markNumberAsSpam(phone_number);
    
              if (result.success) {
                return res.status(200).json({ success: true, message: result.message });
              } else {
                return res.status(400).json({ success: false, message: result.message });
              }
            } catch (error) {
              return res.status(500).json({ success: false, message: error.message });
            }
          });
        } catch (error) {
          return res.status(500).json({ success: false, message: error.message });
        }
      },
    };
    
    module.exports = SpamController;