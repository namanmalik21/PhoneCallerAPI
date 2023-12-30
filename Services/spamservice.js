const GlobalSpamNumbers = require('../models/spam');

const SpamService = {
  markNumberAsSpam: async (phoneNumber) => {
    try {
      const [spamNumber, created] = await GlobalSpamNumbers.findOrCreate({
        where: { phone_number: phoneNumber },
        defaults: { phone_number: phoneNumber },
      });

      if (created) {
        return { success: true, message: 'Number marked as spam successfully' };
      } else {
        return { success: false, message: 'Number is already marked as spam' };
      }
    } catch (error) {
      return { success: false, message: error.message };
    }
  },
};

module.exports = SpamService;
