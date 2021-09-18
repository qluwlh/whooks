---
title: useConstCallback
nav:
  title: Hooks
  path: /hooks
group:
  title: State
  path: /state
  order: 1
---

# useConstCallback

常量函数，要注意：如果里边有 state 值，state 将只会取第一次的值

## 代码演示

### 基础用法

<code src="./demo/demo1.tsx" />

## API

```typescript
const fn = useConstCallback(callback: T extends (...args: any[]) => any)
```

## 参数

| 参数     | 说明 | 类型                                | 默认值 |
| :------- | :--- | :---------------------------------- | :----- |
| callback | 函数 | `T extends (...args: any[]) => any` | -      |
