/**
 * 公共的过滤方法
 */

// 例如:
/**
 * 证件类型过滤
 * @param data
 * @returns {string}
 */
export const conversionCertType = function (data) {
  switch (data) {
    case '01':
      return '身份证'
    case '02':
      return '护照'
  }
};