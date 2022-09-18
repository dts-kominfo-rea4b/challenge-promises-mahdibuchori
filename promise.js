const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
// const promiseOutput = null;

async function promiseOutput (e){
  let jiwa = e;
  const teather1 = await promiseTheaterIXX();
  const teather2 = await promiseTheaterVGC();

  if(e === "marah"){
    const jiwa = new Promise((resolve) => {
      const data = teather1.concat(teather2);
      const jmlh = data.filter((items) => items.hasil === "marah").length;
      resolve(jmlh);
    })
    return jiwa;
  }
  else{
    const jiwa = new Promise((resolve) => {
      const data = teather1.concat(teather2);
      const jmlh = data.filter((items) => items.hasil === "tidak marah").length;
      resolve(jmlh);
    })
    return jiwa;
  }

}

module.exports = {
  promiseOutput,
};

