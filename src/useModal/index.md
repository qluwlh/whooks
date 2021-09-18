---
title: useModal
nav:
  title: Hooks
  path: /hooks
group:
  title: UI
  path: /ui
  order: 1
---

# useModal

优雅的管理 modal 的打开和关闭，并可以同时记录额外相关的信息。

## 代码演示

### 基础用法

<code src="./demo/demo1.tsx" />

## API

```typescript
const { open, close, isOpen, currentItem, options } = useModal<T, O>()
```

### 返回值

| 参数        | 说明                                               | 类型                          | 默认值    |
| ----------- | -------------------------------------------------- | ----------------------------- | --------- |
| open        | 打开弹窗函数，item 和 opt 为想要额外记录使用的信息 | `(item?: T, opt?: O) => void` | -         |
| close       | 关闭弹窗函数                                       | `() => void`                  | -         |
| isOpen      | 关闭弹窗函数                                       | `boolean`                     | false     |
| currentItem | open 函数传入的 item 值                            | `T \| undefined`              | undefined |
| options     | open 函数传入的 opt 的值                           | `O \| undefined`              | undefined |

## FAQ

### 我可以在一个组件中使用多个 useModal 吗？

可以的，可以的，建议像下面这样使用。

```typescript
const viewModal = useModal()
const createModal = useModal()
// viewModal.open()
// viewModal.close()

// createModal.open()
// createModal.close()
```
