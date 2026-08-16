---
name: aliyun-domain
description: 使用阿里云官方 CLI（aliyun）查询和管理域名注册信息：注册/到期时间、实名认证状态、whois 隐私、DNS 配置等。当用户需要查询 0xwelt.com 的注册信息、查看域名到期时间、确认实名认证状态、处理续费提醒、查询 whois 隐私保护状态或任何涉及"域名在阿里云/万网"的任务时触发。触发词包括"阿里云"、"aliyun"、"万网"、"域名到期"、"域名实名"、"whois"、"0xwelt.com 注册信息"以及 my-blog 项目中与域名注册商相关的任务。
---

# 阿里云域名管理（aliyun CLI）

使用阿里云官方 CLI 查询/管理 0xwelt.com 的注册信息。**域名在阿里云（万网）注册，DNS 托管在 Cloudflare**——两边职责不同：阿里云管注册/续费/实名，Cloudflare 管解析/托管。

## 安装与认证

- 已安装：`aliyun v3.4.11`（`~/.local/bin/aliyun`，用户级安装，无需 sudo）
- 认证用 AccessKey 环境变量，已持久化到 `~/.zshrc` 和 `~/.bashrc`：

```bash
export ALIBABA_CLOUD_ACCESS_KEY_ID='LTAI5t8C...'    # 已持久化
export ALIBABA_CLOUD_ACCESS_KEY_SECRET='...'        # 已持久化
export ALIBABA_CLOUD_REGION_ID='cn-hangzhou'

aliyun version   # 验证安装
```

- 凭证也存于 `~/.aliyun/config.json`（`aliyun configure set --profile default --mode AK ...` 生成）
- AK 权限：建议 `AliyunDomainReadOnlyAccess`（查询够用）；改 NS/续费需更高权限
- ⚠️ AK 明文存在 config.json + 两个 rc 文件，**轮换密钥时三处一起更新**

## 当前域名信息（0xwelt.com）

| 项目 | 值 |
|---|---|
| SaleId（实例 ID） | S20260G02RM61221 |
| 注册时间 | 2026-01-16 01:00:38 |
| **到期时间** | **2027-01-16 01:00:38** |
| 注册类型 | PERSONAL（个人：丁豪 / ding hao） |
| 实名认证 | SUCCEED（已通过） |
| 联系邮箱 | dinghao12601@gmail.com（已验证） |
| 阿里云侧 DNS | norman.ns.cloudflare.com / ullis.ns.cloudflare.com |
| Whois 保护 | 公开数据已脱敏（见下） |

## 常用命令

```bash
# 域名列表（含到期时间）
aliyun domain QueryDomainList --PageNum 1 --PageSize 100

# 域名详情（注册人、实名、DNS、whois 状态）
aliyun domain QueryDomainBySaleId --SaleId S20260G02RM61221

# 查看某 API 参数
aliyun domain <ApiName> --help

# （可选）安装官方增强插件
aliyun plugin install --names aliyun-cli-domain
```

## Agent 最佳实践

- **输出是 JSON**：管道接 `python3 -m json.tool` 或 `python3 -c "import json,sys; ..."` 解析
- **查参数先 `--help`**：阿里云 API 参数名是驼峰（如 `--PageNum`），别猜
- **凭证脱敏**：回复/记录中不要输出完整 AccessKey Secret
- 阿里云 CLI 输出含 `RequestId`（排障时有用）

## 隐私保护结论（重要，勿重复踩坑）

- **公开 whois/RDAP 里看不到姓名和邮箱**：万网对 .com 默认脱敏注册人信息，whois 只显示 `shang hai / CN`（省市+国家，ICANN 2013RAA 强制最小字段）
- **阿里云 API 返回的注册人信息 ≠ 公开 whois 数据**：API 是账户所有者可见的真实信息，不能据此判断"泄露"
- `WhoisProtection` API（2016-05-11 版）会返回 result:1 但 `WhoisProtected` 字段不变——老接口遗留逻辑，对已默认脱敏的 .com 是空操作，不要依赖它判断状态
- 判断公开状态请用以下之一：who.is、RDAP（rdap.verisign.com）、或 python socket 直连 `grs-whois.hichina.com:43`（万网 whois 服务器，发 `0xwelt.com\r\n`）

## 踩坑记录

1. **官方 install.sh 需要 sudo**（装到 /usr/local/bin）→ 改用 GitHub Releases 用户级安装到 `~/.local/bin`：资产名 `aliyun-cli-linux-<版本>-amd64.tgz`（注意版本号在中间，不是 `linux-amd64`）
2. **whois 命令未安装** → 用 RDAP 或 python socket 直连 whois 服务器（`whois.verisign-grs.com:43` 注册局层无注册人信息；注册商层 `grs-whois.hichina.com:43` 才有脱敏后的注册人段）
3. **Web 版 API 调试页（api.aliyun.com）是 JS 应用**，curl 抓不到参数说明 → 直接调 `--help` 或试参数看报错

## 与 cloudflare-cf skill 的分工

- 域名**注册/到期/实名/续费** → 阿里云（本 skill）
- 域名**解析/托管/站点** → Cloudflare（`my-blog/.agents/skills/cloudflare-cf/SKILL.md`）
- 例：站点打不开 → 先查 Cloudflare 侧（cf），再查阿里云侧 DNS 配置是否仍指向 Cloudflare NS
