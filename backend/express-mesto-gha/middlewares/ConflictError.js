const { CONFLICT_ERROR } = require('../utils/utils');

class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ConflictError';
    this.statusCode = CONFLICT_ERROR;
  }
}

module.exports = { ConflictError };
