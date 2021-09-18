/**
 * title: useConstCallback
 * desc: 常量函数
 *
 * title.zh-CN: useConstCallback
 * desc.zh-CN: 常量函数
 */

import React, { useState } from 'react'
import { useConstCallback } from 'whooks'
import { Button, message, Divider } from 'antd'

export default () => {
  const [count, setCount] = useState(0)
  const showMessage = useConstCallback(() => {
    message.info('欢迎使用whooks')
  })
  const addOnce = useConstCallback(() => {
    setCount(count + 1)
  })
  const add = useConstCallback(() => {
    setCount((prevState) => prevState + 1)
  })
  return (
    <div>
      <div style={{ margin: 16 }}>
        正常情况：
        <Button onClick={showMessage} type="primary">
          弹窗
        </Button>
      </div>
      <div style={{ margin: 16 }}>
        <div>count: {count}</div>
        使用state的情况下：
        <Button onClick={addOnce} type="primary">
          点击
        </Button>
      </div>
      <div style={{ margin: 16 }}>
        使用prevState的情况下：
        <Button onClick={add} type="primary">
          点击
        </Button>
      </div>
    </div>
  )
}
