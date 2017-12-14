import AV from './leancloud'

export default function (user) {
  // 解构赋值，拿到user解构掉
  var {id, attributes: {username}} = user || AV.User.current() || {attributes: {}}
  return {id: id || '', username: username || ''};
}
