/**
 * title: 请输入title
 * desc: 请输入title desc
 *
 * title.zh-CN: 请输入title
 * desc.zh-CN: 请输入title desc
 */

import React from 'react'
import { useHooksName } from 'whooks'

export default () => {
  const {} = useHooksName()
  return <div>测试用例</div>
}
