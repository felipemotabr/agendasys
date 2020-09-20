let timeOut: number;

export default (callback: Function, time: number, async: boolean, param: any = null) => {
  if (timeOut) clearTimeout(timeOut)

  timeOut = setTimeout(async () => {
    async ? await callback(param) : callback(param)
  }, time)
}