# dsh-new-repo

一个最小可安装的 DSH 插件包（bundle），通过 Git 仓库安装。

## 安装

插件页（Plugins）→ **Add plugin**（或箭头里的 **Install a third-party plugin**）→ 粘贴：

```
git+https://github.com/2128013272-a11y/new-repo.git#<40位commit>
```

仓库子目录里的包用：

```
git+https://github.com/2128013272-a11y/new-repo.git#<40位commit>&path:/packages/my-plugin
```

## 要求

- `package.json` 必须声明 `dsh.bundle.patch`，指向 `cordis.patch.yml`；
- patch 里 `insert` 的行 `name` 必须等于包名；
- 入口文件必须是 ESM（`type: "module"`），Host 端导出 `apply(ctx)` 或 service class；
- 用 Git 安装时 pnpm 只拿仓库里已有的文件，所以 TypeScript 项目要把 `lib/` 构建产物一起提交（或写 `prepare` 脚本）；
- `files` 字段决定打包时保留哪些文件，新增模块或资源时同步更新。
