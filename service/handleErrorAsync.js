const appError = require("./appError");

function handleErrorAsync(fn) {
  return function (req, res, next) {
    fn(req, res, next)
      .catch((err) => {
        if (err.name === 'CastError' && err.kind === 'ObjectId') {
          appError({ httpStatus: 400, errMessage: "無效的 ID 輸入", next });
        } else {
          appError({ httpStatus: 500, errMessage: "取得資料錯誤", next });
        }
      });
  };
}

module.exports = handleErrorAsync;