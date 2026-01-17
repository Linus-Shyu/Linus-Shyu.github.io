// StarFetch 官网交互脚本

// 主题切换功能
(function() {
    const html = document.documentElement;
    
    // 更新主题切换按钮图标
    function updateThemeIcon(theme) {
        const themeIcon = document.querySelector('.theme-icon');
        if (themeIcon) {
            themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
        }
    }
    
    // 初始化图标（主题已在 HTML 头部应用）
    document.addEventListener('DOMContentLoaded', function() {
        const currentTheme = html.getAttribute('data-theme') || 'dark';
        updateThemeIcon(currentTheme);
    });
    
    // 主题切换函数
    window.toggleTheme = function() {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('starfetch-theme', newTheme);
        updateThemeIcon(newTheme);
    };
    
    // 监听主题切换按钮点击
    document.addEventListener('DOMContentLoaded', function() {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', window.toggleTheme);
        }
    });
})();

// 平滑滚动
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.terminal-header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ASCII Art 动画效果（可选）
    const asciiArt = document.getElementById('asciiArt');
    if (asciiArt) {
        // 可以添加打字机效果或其他动画
        const originalText = asciiArt.textContent;
        asciiArt.style.opacity = '0';
        
        setTimeout(() => {
            asciiArt.style.transition = 'opacity 1s ease';
            asciiArt.style.opacity = '1';
        }, 500);
    }

    // 卡片悬停效果增强
    document.querySelectorAll('.feature-card, .principle-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // 代码块复制功能（可选）
    document.querySelectorAll('.code-block').forEach(block => {
        const code = block.querySelector('code');
        if (code) {
            // 可以添加复制按钮
            const copyBtn = document.createElement('button');
            copyBtn.textContent = '复制';
            copyBtn.className = 'copy-btn';
            copyBtn.style.cssText = `
                position: absolute;
                top: 8px;
                right: 8px;
                padding: 4px 8px;
                font-family: var(--font-mono);
                font-size: 0.75rem;
                background: transparent;
                border: 1px solid var(--terminal-border);
                color: var(--terminal-green);
                border-radius: 4px;
                cursor: pointer;
                opacity: 0.7;
            `;
            
            copyBtn.addEventListener('click', function() {
                navigator.clipboard.writeText(code.textContent).then(() => {
                    const originalText = copyBtn.textContent;
                    copyBtn.textContent = '已复制!';
                    setTimeout(() => {
                        copyBtn.textContent = originalText;
                    }, 2000);
                });
            });
            
            block.style.position = 'relative';
            block.appendChild(copyBtn);
        }
    });
});

// 滚动时显示终端边框效果
window.addEventListener('scroll', function() {
    const header = document.querySelector('.terminal-header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 0 20px rgba(0, 255, 0, 0.3)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// 防止 FOUC (Flash of Unstyled Content)
document.documentElement.style.visibility = 'hidden';
window.addEventListener('load', function() {
    document.documentElement.style.visibility = 'visible';
});
