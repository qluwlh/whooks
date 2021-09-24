/**
 * title: useDeepCompareEffect
 * desc: useDeepCompareEffect和useEffect使用比较
 *
 * title.zh-CN: useDeepCompareEffect
 * desc.zh-CN: useDeepCompareEffect和useEffect使用比较
 */

import React, { useState, useEffect } from 'react'
import { useDeepCompareEffect } from 'whooks'
import { Button, Divider, Space } from 'antd'

export default () => {
  const [deepCompareData, setDeepCompareData] = useState({ name: '张三', age: 8 })
  const [data, setData] = useState({ name: '李四', age: 8 })
  const [deepCompareCount, setDeepCompareCount] = useState(0)
  const [count, setCount] = useState(0)
  useDeepCompareEffect(() => {
    setDeepCompareCount((prev) => prev + 1)
  }, [deepCompareData])
  useEffect(() => {
    setCount((prev) => prev + 1)
  }, [data])
  const onChangeNothing = () => {
    setData({ ...data })
    setDeepCompareData({ ...deepCompareData })
  }
  const onAddAge = () => {
    setData({ ...data, age: data.age + 1 })
    setDeepCompareData({ ...deepCompareData, age: deepCompareData.age + 1 })
  }
  return (
    <div>
      <Space>
        <span>{JSON.stringify(deepCompareData)}</span>
        <span>useDeepCompareEffect执行次数：{deepCompareCount}</span>
      </Space>
      <Divider />
      <Space>
        <span>{JSON.stringify(data)}</span>
        <span>useEffect执行次数：{count}</span>
      </Space>
      <Divider />
      <Space>
        <Button onClick={onChangeNothing} type="primary">
          不改变数据
        </Button>
        <Button onClick={onAddAge} type="primary">
          增加年龄
        </Button>
      </Space>
    </div>
  )
}
