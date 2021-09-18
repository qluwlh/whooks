/**
 * title: 记录信息
 * desc: 可记录额外信息
 *
 * title.zh-CN: 记录信息
 * desc.zh-CN: 可记录额外信息
 */

import React, { FC } from 'react'
import { Modal, Button } from 'antd'
import { useModal } from 'whooks'

interface User {
  name: string
  age: number
}

interface UserInfoModalProps {
  visible: boolean
  onRequestClose: () => void
  userInfo: User
}

const UserInfoModal: FC<UserInfoModalProps> = (props) => {
  const { visible, onRequestClose, userInfo } = props
  return (
    <Modal visible={visible} onCancel={onRequestClose}>
      <div>你好：{userInfo.name}</div>
      <div>你今年{userInfo.age}岁了</div>
    </Modal>
  )
}

export default () => {
  const userInfoModal = useModal<User>()
  const viewUser = () => {
    userInfoModal.open({
      name: '张三',
      age: 18,
    })
  }
  return (
    <div>
      <div>打开弹窗的同时，携带props的信息</div>
      <Button type="primary" onClick={viewUser}>
        查看
      </Button>
      {userInfoModal.currentItem && (
        <UserInfoModal
          visible={userInfoModal.isOpen}
          onRequestClose={userInfoModal.close}
          userInfo={userInfoModal.currentItem}
        />
      )}
    </div>
  )
}
