#!/bin/bash

# 根据用户环境设置打印语言
set_language() {
    if [[ "$LANG" =~ "zh_CN" ]] || [[ "$1" == "zh" ]]; then
        declare -g ZH_MODE=1
    else
        declare -g ZH_MODE=0
    fi
}

# 中英文消息打印函数
msg() {
    if [ $ZH_MODE -eq 1 ]; then
        echo -e "\033[34m$1\033[0m"
    else
        echo -e "\033[34m$2\033[0m"
    fi
}

# 错误处理
error_exit() {
    if [ $ZH_MODE -eq 1 ]; then
        echo -e "\033[31m错误：$1\033[0m" >&2
    else
        echo -e "\033[31mError: $1\033[0m" >&2
    fi
    exit 1
}

# 检测发行版本和包管理工具
check_environment() {
    # 检查 root 权限
    [ $EUID -ne 0 ] && error_exit "需要 root 权限，请使用 sudo 执行" "Requires root privileges, please use sudo"

    # 检查系统发行版
    if [ ! -f /etc/os-release ]; then
        error_exit "无法检测操作系统" "Cannot detect operating system"
    fi

    source /etc/os-release
    if [ "$ID" != "ubuntu" ]; then
        error_exit "仅支持 Ubuntu 系统" "Only supports Ubuntu systems"
    fi

    # 获取版本代号（如 noble）
    VERSION_CODENAME=$(lsb_release -cs)
}

# 生成镜像源内容
generate_sources() {
    cat <<EOF
deb https://mirrors.lcpu.dev/ubuntu/ $VERSION_CODENAME main restricted universe multiverse
deb https://mirrors.lcpu.dev/ubuntu/ $VERSION_CODENAME-updates main restricted universe multiverse
deb https://mirrors.lcpu.dev/ubuntu/ $VERSION_CODENAME-backports main restricted universe multiverse
deb https://mirrors.lcpu.dev/ubuntu/ $VERSION_CODENAME-security main restricted universe multiverse
EOF
}

# 执行换源操作
change_sources() {
    local target_file="/etc/apt/sources.list"
    local backup_file="/etc/apt/sources.list.bak"

    # 备份原文件
    msg "正在备份原配置文件..." "Backing up original configuration..."
    cp "$target_file" "$backup_file" || error_exit "备份失败" "Backup failed"

    # 生成新配置
    msg "生成新镜像源配置..." "Generating new mirror configuration..."
    generate_sources > "$target_file" || error_exit "生成配置失败" "Configuration generation failed"

    # 测试更新
    msg "正在验证新配置..." "Verifying new configuration..."
    if ! apt-get update -yqq >/dev/null 2>&1; then
        # 恢复备份
        mv -f "$backup_file" "$target_file"
        error_exit "换源失败，已恢复原配置" "Mirror change failed, restored original configuration"
    fi
}

main() {
    set_language "$@"
    msg "正在识别系统版本..." "Detecting system version..."
    check_environment
    
    msg "检测到 Ubuntu ${VERSION_CODENAME^}" "Detected Ubuntu ${VERSION_CODENAME^}"
    msg "开始更换北大镜像源..." "Changing to PKU mirror..."
    
    if change_sources; then
        msg "镜像源更换成功！" "Mirror changed successfully!"
        msg "建议执行: sudo apt update" "Recommend to run: sudo apt update"
    fi
}

main "$@"
