const { searchUsers } = require('../Services/searchservices');

const SearchController = {
  searchUsers: async (req, res) => {
    try {
      const { query } = req.query;
      if (!query) {
        return res.status(400).json({ success: false, message: 'Query parameter is required' });
      }

      const results = await searchUsers(query);
      return res.status(200).json({ success: true, results });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  },
};

module.exports = SearchController;