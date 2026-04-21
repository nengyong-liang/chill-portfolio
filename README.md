# 🎮 个人主页 - Chill 版

> **🌐 在线访问**: https://nengyong-liang.github.io/chill-portfolio

基于 [macOS-Themed-Portfolio](https://github.com/ansxuman/macOS-Themed-Portfolio) 构建的趣味性个人主页。

## 🌟 特性

- 🖥️ **macOS 桌面风格** - 熟悉的桌面环境
- 🪟 **可拖拽窗口** - 模拟真实窗口系统
- 🎵 **音乐播放器** - 内置音乐播放功能
- 📸 **照片展示** - 照片库应用
- 💻 **终端模拟器** - 极客风格项目展示
- 🎨 **Launchpad** - 应用启动器
- 🌐 **Safari 浏览器** - 博客查看器
- 🎯 **强交互性** - 趣味十足的体验

## 🚀 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 类型检查
npm run check
```

## 📝 配置说明

### 1. 开发者信息配置

编辑 `src/lib/utils/devInfo.ts`:

```typescript
export const nengyong: Developer = {
  about: `I'm Ultraman Tiga`,
  
  code: [
    "JavaScript",
    "TypeScript",
    "Python",
    "HTML",
    "CSS",
  ],
  
  interests: [
    "Web 开发",
    "开源项目",
    "技术探索",
  ],
  
  operatingSystems: ["Windows", "Linux"],
  toolsUsed: ["Git", "VS Code"],
  ides: ["VS Code", "Cursor"],
};
```

### 2. 项目列表配置

编辑 `src/lib/stores/projectStore.ts`:

```typescript
const initialProjects: ProjectData[] = [
  {
    id: 'EVAC_MIND',
    name: 'EVAC-MIND',
    icon: 'python',  // 图标：python, code, java, go, rust, svelte, wails
    shortDescription: '项目描述',
    githubUrl: 'https://github.com/nengyong-liang/EVAC-MIND',
    readmeUrl: 'https://raw.githubusercontent.com/.../main/README.md',
    technologies: ['Python'],
    type: 'library'  // 或 'application'
  },
  // ... 更多项目
];
```

### 3. 音乐播放列表

编辑 `src/lib/utils/musicPlaylists.ts` 添加你的音乐。

### 4. 照片库

将照片添加到 `src/lib/assets/photos/` 目录。

## 🎨 应用说明

### Terminal (终端)

- 展示 GitHub 项目
- 支持命令交互
- 显示项目 README

### Safari (浏览器)

- 博客文章查看器
- Markdown 渲染
- 代码高亮

### Music (音乐播放器)

- 播放列表管理
- 播放控制
- 专辑封面展示

### Photos (照片)

- 照片库展示
- 网格布局
- 大图预览

### Launchpad (启动器)

- 应用图标网格
- 快速启动应用
- macOS 风格动画

### Dock (程序坞)

- 常用应用快捷方式
- 悬停放大动画
- 当前应用指示器

## ⚠️ 安全注意事项

### 敏感信息保护

**不要上传以下内容到 GitHub**：

- ❌ `.env` 文件（包含 API keys）
- ❌ `package-lock.json`（可能包含本地路径）
- ❌ `node_modules/`（依赖包）
- ❌ `build/`（构建产物）
- ❌ 个人敏感信息（邮箱、电话等）

**已配置 `.gitignore`**：
```gitignore
node_modules
package-lock.json
.output
.svelte-kit
/build
.env
.env.*
.DS_Store
```

### 环境变量

如果需要使用 API keys，请使用 GitHub Secrets：

1. 在 GitHub 仓库 Settings > Secrets and variables > Actions
2. 添加 Secret：`DEV_TO_API_KEY`
3. 在 workflow 中使用：`${{ secrets.DEV_TO_API_KEY }}`

## 📦 构建和部署

### 构建

```bash
npm run build
```

输出目录：`build/`

### 部署到 GitHub Pages

项目已配置 GitHub Actions，推送到 `main` 分支后自动部署。

**手动部署**:

```bash
# 安装 gh-pages
npm install -D gh-pages

# 部署
npx gh-pages -d build
```

## 📁 项目结构

```
portfolio-chill/
├── src/
│   ├── lib/
│   │   ├── assets/           # 静态资源
│   │   │   ├── icons/       # 应用图标
│   │   │   ├── images/      # 图片资源
│   │   │   ├── mp3s/        # 音乐文件
│   │   │   └── photos/      # 照片文件
│   │   ├── components/      # Svelte 组件
│   │   │   ├── Desktop.svelte    # 桌面
│   │   │   ├── Dock.svelte       # Dock 栏
│   │   │   ├── Terminal.svelte   # 终端
│   │   │   ├── Safari.svelte     # 浏览器
│   │   │   ├── MusicPlayer.svelte # 音乐播放器
│   │   │   ├── Photos.svelte     # 照片库
│   │   │   ├── Launchpad.svelte  # 启动器
│   │   │   └── Window.svelte     # 窗口组件
│   │   ├── stores/          # Svelte 状态管理
│   │   │   ├── projectStore.ts  # 项目数据
│   │   │   ├── blogStore.ts     # 博客数据
│   │   │   └── windowStore.ts   # 窗口状态
│   │   ├── types/           # TypeScript 类型
│   │   │   ├── projectType.ts
│   │   │   ├── blogType.ts
│   │   │   └── music.ts
│   │   └── utils/           # 工具函数
│   │       ├── devInfo.ts       # 开发者信息
│   │       ├── fileSystem.ts    # 虚拟文件系统
│   │       ├── syncProjects.ts  # 项目同步
│   │       └── musicPlaylists.ts # 音乐播放列表
│   ├── routes/
│   │   ├── +page.svelte     # 主页
│   │   ├── +layout.svelte   # 布局
│   │   └── api/             # API 路由
│   ├── app.css              # 全局样式
│   ├── app.html             # HTML 模板
│   └── app.d.ts             # 类型声明
├── static/
│   ├── favicon.png
│   ├── og-image.png
│   └── robots.txt
├── svelte.config.js
├── vite.config.ts
├── tailwind.config.js
├── package.json
└── README.md
```

## 🔧 技术栈

- **框架**: SvelteKit 2.x
- **语言**: TypeScript
- **样式**: Tailwind CSS 3.x
- **构建工具**: Vite 5.x
- **状态管理**: Svelte Stores
- **Markdown 渲染**: svelte-markdown
- **代码高亮**: Prism.js

## 🎯 窗口系统

### 窗口类型

1. **Application Window** - 应用窗口
2. **Browser Window** - 浏览器窗口
3. **Terminal Window** - 终端窗口

### 窗口特性

- 可拖拽移动
- 可调整大小
- 最小化/最大化
- 焦点管理
- Z-index 层级

## 🎮 交互说明

### 键盘快捷键

- `Cmd/Ctrl + K` - 打开 Spotlight 搜索
- `Esc` - 关闭窗口
- `F11` - 全屏

### 鼠标交互

- **拖拽** - 窗口标题栏
- **点击** - 打开应用
- **悬停** - Dock 图标放大
- **右键** - 上下文菜单（待实现）

## 📊 性能优化

- 图片懒加载
- 代码分割
- 组件按需加载
- 虚拟滚动（待实现）

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

基于 [macOS-Themed-Portfolio](https://github.com/ansxuman/macOS-Themed-Portfolio) (MIT License)

---

**Made with ❤️ by nengyong-liang**
