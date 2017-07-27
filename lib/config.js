module.exports = {
  _baseRate: 0.005,
  _bonusRate: 0.02,
  _bindingBonusRate: 0.01,
  _bonusLimit: 500,
  _isBinding: true,
  port: 9090,
  ca: 'ssl/fullchain.pem',
  key: 'ssl/privkey.pem',
  cert: 'ssl/cert.pem',
  getBaseRate() {
    return this._baseRate;
  },
  getBonusRate() {
    return this._bonusRate;
  },
  getBonusLimit() {
    return this._bonusLimit;
  },
  getBindingBonusRate() {
    return this._isBinding ? this._bindingBonusRate : 0;
  }
}