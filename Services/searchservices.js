const { Op } = require("sequelize");
const User = require("../models/user");
const GlobalSpamNumbers = require("../models/spam");

async function searchUsers(query) {
  try {
    const results = await User.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.like]: `${query}%` } },
          { name: { [Op.notLike]: `${query}%`, [Op.like]: `%${query}%` } },
          { phone_number: { [Op.like]: `%${query}%` } },
        ],
      },
      attributes: ["name", "phone_number"],
    });

    const usersWithSpamLikelihood = await Promise.all(
      results.map(async (user) => {
        const spamData = await GlobalSpamNumbers.findOne({
          where: { phone_number: user.phone_number },
        });
        const isSpam = spamData ? true : false;

        return { ...user.toJSON(), marked_as_spam: isSpam };
      })
    );

    return usersWithSpamLikelihood;
  } catch (error) {
    throw new Error(`Error searching users: ${error.message}`);
  }
}

module.exports = { searchUsers };
