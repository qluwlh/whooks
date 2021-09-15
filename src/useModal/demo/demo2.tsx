/**
 * title: 弹窗状态
 * desc: 可打开和关闭弹窗
 *
 * title.zh-CN: 弹窗状态
 * desc.zh-CN: 可打开和关闭弹窗
 */

import React, { useState } from 'react'
import { Modal, Button } from 'antd'
import { useModal } from 'whooks'

export default () => {
  const modal = useModal()
  return (
    <div>
      <Button type="primary" onClick={() => modal.open()}>
        打开弹窗
      </Button>
      <Modal visible={modal.isOpen} onCancel={modal.close}>
        hello useModal
      </Modal>
    </div>
  )
}
