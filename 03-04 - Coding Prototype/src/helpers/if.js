/**
 * Handlebars block helper that checks given expression
 * @param {mixed} e - Expression.
 * @param {object} options - Handlebars object.
 * @returns If the values are equal, content inside of the helper. If not, the content inside the `{{else}}` block.
 */
module.exports = function(e, options) {
  if (e) return options.fn(this);
  else return options.inverse(this);
}
