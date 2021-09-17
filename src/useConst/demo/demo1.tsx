/**
 * title: 常量
 * desc: 常亮值
 *
 * title.zh-CN: 常量
 * desc.zh-CN: 常亮值
 */

import React from 'react'
import { useConst } from 'whooks'

export default () => {
  const age = useConst(18)
  const name = useConst('张三')
  const address = useConst({ province: '山东省', city: '潍坊市' })
  return (
    <div>
      <div>属性：常量值</div>
      <div>姓名：{name}</div>
      <div>年龄：{age}</div>
      <div>
        地址：{address.province}-{address.city}
      </div>
    </div>
  )
}
