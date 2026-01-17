// StarFetch 多语言支持

const translations = {
    zh: {
        // Hero Section
        'hero.title': 'starfetch',
        'hero.subtitle': '用 Rust 编写的极速系统信息工具',
        'badge.mit': '📜 MIT License',
        'badge.opensource': '🔓 开源',
        'button.viewGitHub': '在 GitHub 查看',
        'button.install': '安装指南',
        
        // Features
        'features.title': 'starfetch --features',
        'feature.adaptive': '自适应 ASCII 艺术',
        'feature.adaptive.desc': '根据终端宽度自动调整显示，支持宽屏和窄屏终端',
        'feature.system': '完整系统信息',
        'feature.system.desc': '显示主机名、操作系统、内核、运行时间、CPU、内存和包管理信息',
        'feature.hyperlink': '智能超链接',
        'feature.hyperlink.desc': '在现代终端中显示可点击的开发者链接',
        'feature.colors': '优雅色彩',
        'feature.colors.desc': '支持 ANSI 颜色码，提供美观的终端输出',
        'feature.performance': '极速性能',
        'feature.performance.desc': '使用 Rust 编写，提供最佳性能和极速启动',
        'feature.crossplatform': '跨平台支持',
        'feature.crossplatform.desc': '支持 macOS、Linux 和 Windows',
        
        // Installation
        'install.title': 'cargo install starfetch',
        'install.subtitle': '快速安装和开始使用',
        'install.build': '从源码构建',
        'install.global': '全局安装',
        'install.requirements': '系统要求',
        'install.quickstart': '快速开始',
        'install.quickstart.desc': '安装 Rust (如果还没有):',
        
        // Open Source
        'opensource.title': 'echo "开源精神"',
        'opensource.subtitle': '遵循 Linux 哲学，完全开源和自由',
        'opensource.fully': '完全开源',
        'opensource.fully.desc': 'MIT 许可证 - 自由使用、修改和分发',
        'opensource.contribute': '欢迎贡献',
        'opensource.contribute.desc': '欢迎提交 PR、报告 Issue 和提出改进建议',
        'opensource.community': '社区驱动',
        'opensource.community.desc': '由社区维护，为社区服务',
        'opensource.geek': '极客文化',
        'opensource.geek.desc': '致敬 neofetch，延续命令行工具的优秀传统',
        'opensource.contribute.title': '参与贡献',
        
        // Footer
        'footer.tagline': 'A beautiful and fast system information tool written in Rust',
        'footer.authors': 'Authors',
        'footer.info': 'Info',
        'footer.version': 'Version',
        'footer.inspired': 'Inspired by',
        'footer.built': 'Built with ❤️ using Rust',
        'footer.company': '星落湖探人工智能应用软件（杭州）有限公司',
        'footer.company.short': '星落湖探人工智能应用软件（杭州）有限公司',
        'footer.copyright': 'Made with ❤️ by open source community',
        
        // Terminal Display
        'terminal.title': 'StarFetch ⭐ - Terminal',
        
        // Code copy
        'code.copy': '复制',
        'code.copied': '已复制!'
    },
    en: {
        // Hero Section
        'hero.title': 'starfetch',
        'hero.subtitle': 'A beautiful and fast system information tool written in Rust',
        'badge.mit': '📜 MIT License',
        'badge.opensource': '🔓 Open Source',
        'button.viewGitHub': 'View on GitHub',
        'button.install': 'Installation Guide',
        
        // Features
        'features.title': 'starfetch --features',
        'feature.adaptive': 'Adaptive ASCII Art',
        'feature.adaptive.desc': 'Automatically adjusts display based on terminal width',
        'feature.system': 'Comprehensive System Info',
        'feature.system.desc': 'Shows hostname, OS, kernel, uptime, CPU, memory, and packages',
        'feature.hyperlink': 'Smart Hyperlinks',
        'feature.hyperlink.desc': 'Clickable developer links in modern terminals',
        'feature.colors': 'Beautiful Colors',
        'feature.colors.desc': 'ANSI color support for elegant terminal output',
        'feature.performance': 'Lightning Fast',
        'feature.performance.desc': 'Written in Rust for optimal performance',
        'feature.crossplatform': 'Cross-Platform',
        'feature.crossplatform.desc': 'Works on macOS, Linux, and Windows',
        
        // Installation
        'install.title': 'cargo install starfetch',
        'install.subtitle': 'Quick installation and getting started',
        'install.build': 'Build from Source',
        'install.global': 'Install Globally',
        'install.requirements': 'Requirements',
        'install.quickstart': 'Quick Start',
        'install.quickstart.desc': 'Install Rust (if not already installed):',
        
        // Open Source
        'opensource.title': 'echo "Open Source Spirit"',
        'opensource.subtitle': 'Following Linux philosophy, fully open source and free',
        'opensource.fully': 'Fully Open Source',
        'opensource.fully.desc': 'MIT License - Free to use, modify, and distribute',
        'opensource.contribute': 'Contributions Welcome',
        'opensource.contribute.desc': 'PRs, issues, and suggestions are welcome',
        'opensource.community': 'Community Driven',
        'opensource.community.desc': 'Maintained by the community, for the community',
        'opensource.geek': 'Geek Culture',
        'opensource.geek.desc': 'Inspired by neofetch, continuing the tradition of CLI tools',
        'opensource.contribute.title': 'Contribute',
        
        // Footer
        'footer.tagline': 'A beautiful and fast system information tool written in Rust',
        'footer.authors': 'Authors',
        'footer.info': 'Info',
        'footer.version': 'Version',
        'footer.inspired': 'Inspired by',
        'footer.built': 'Built with ❤️ using Rust',
        'footer.company': 'Xingluotan AI Application Software (Hangzhou) Co., Ltd.',
        'footer.company.short': 'Xingluotan AI (Hangzhou)',
        'footer.copyright': 'Made with ❤️ by open source community',
        
        // Terminal Display
        'terminal.title': 'StarFetch ⭐ - Terminal',
        
        // Code copy
        'code.copy': 'Copy',
        'code.copied': 'Copied!'
    }
};

// 多语言系统
const i18n = {
    currentLang: 'zh',
    
    init() {
        // 从 localStorage 获取保存的语言，或根据浏览器语言自动检测
        const savedLang = localStorage.getItem('starfetch-lang');
        const browserLang = navigator.language || navigator.userLanguage;
        const detectedLang = browserLang.startsWith('zh') ? 'zh' : 'en';
        
        this.currentLang = savedLang || detectedLang;
        this.applyLanguage(this.currentLang);
        
        // 更新语言切换按钮
        this.updateLangButton();
    },
    
    applyLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('starfetch-lang', lang);
        document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');
        
        // 更新所有带有 data-i18n 属性的元素
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        // 更新 HTML lang 属性
        document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');
        
        // 更新 meta description
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            if (lang === 'zh') {
                metaDesc.content = 'StarFetch - 用 Rust 编写的极速系统信息工具，受 neofetch 启发。展示优雅的 ASCII 艺术和智能终端适配。';
            } else {
                metaDesc.content = 'StarFetch - A beautiful and fast system information tool written in Rust, inspired by neofetch.';
            }
        }
        
        // 更新 title
        if (lang === 'zh') {
            document.title = 'StarFetch ⭐ - 极速系统信息工具';
        } else {
            document.title = 'StarFetch ⭐ - Fast System Information Tool';
        }
    },
    
    toggleLanguage() {
        const newLang = this.currentLang === 'zh' ? 'en' : 'zh';
        this.applyLanguage(newLang);
        this.updateLangButton();
    },
    
    updateLangButton() {
        const langIcon = document.querySelector('.lang-icon');
        if (langIcon) {
            langIcon.textContent = this.currentLang === 'zh' ? '🌐' : '🌐';
            langIcon.setAttribute('data-lang', this.currentLang);
            langIcon.setAttribute('title', this.currentLang === 'zh' ? 'Switch to English' : '切换到中文');
        }
    },
    
    t(key) {
        return translations[this.currentLang]?.[key] || key;
    }
};

// 导出到全局
window.i18n = i18n;
