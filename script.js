// FeelFlow 官网交互脚本

// 移动端导航菜单切换
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // 切换按钮动画
            const spans = navToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // 关闭移动端菜单
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    const spans = navToggle.querySelectorAll('span');
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            }
        });
    });

    // 导航栏滚动效果
    let lastScroll = 0;
    const nav = document.querySelector('.nav');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });

    // 滚动动画观察器
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 为卡片添加滚动动画
    document.querySelectorAll('.feature-card, .benefit-item, .contact-item, .sponsor-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // 每日格言更新（模拟）
    const quotes = [
        { text: "每一天都是新的开始。", author: "中国谚语" },
        { text: "学而时习之，不亦说乎？", author: "孔子" },
        { text: "天行健，君子以自强不息。", author: "《周易》" },
        { text: "路漫漫其修远兮，吾将上下而求索。", author: "屈原" }
    ];

    const quoteCard = document.querySelector('.quote-card');
    if (quoteCard) {
        // 每小时更新一次格言（用于演示）
        const updateQuote = () => {
            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            const quoteText = quoteCard.querySelector('.quote-text');
            const quoteAuthor = quoteCard.querySelector('.quote-author');
            
            if (quoteText && quoteAuthor) {
                quoteText.style.opacity = '0';
                quoteAuthor.style.opacity = '0';
                
                setTimeout(() => {
                    quoteText.textContent = randomQuote.text;
                    quoteAuthor.textContent = `—— ${randomQuote.author}`;
                    quoteText.style.opacity = '1';
                    quoteAuthor.style.opacity = '1';
                }, 300);
            }
        };

        // 页面加载时随机选择一条
        updateQuote();
        
        // 可以设置定时器定期更新（可选）
        // setInterval(updateQuote, 3600000); // 每小时更新
    }
});

// 复制地址到剪贴板
function copyAddress(elementId, message) {
    const element = document.getElementById(elementId);
    if (element) {
        const text = element.textContent;
        
        // 使用现代 Clipboard API
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text).then(function() {
                showCopyMessage(message);
            }).catch(function(err) {
                console.error('复制失败:', err);
                fallbackCopyTextToClipboard(text, message);
            });
        } else {
            // 降级方案
            fallbackCopyTextToClipboard(text, message);
        }
    }
}

// 降级复制方案
function fallbackCopyTextToClipboard(text, message) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showCopyMessage(message);
        } else {
            console.error('复制命令失败');
        }
    } catch (err) {
        console.error('复制失败:', err);
    }
    
    document.body.removeChild(textArea);
}

// 显示复制成功消息
function showCopyMessage(message) {
    // 创建临时提示元素
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #34C759;
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        font-size: 14px;
        font-weight: 500;
        animation: slideDown 0.3s ease;
    `;
    
    // 添加动画样式
    if (!document.getElementById('toast-style')) {
        const style = document.createElement('style');
        style.id = 'toast-style';
        style.textContent = `
            @keyframes slideDown {
                from {
                    opacity: 0;
                    transform: translateX(-50%) translateY(-20px);
                }
                to {
                    opacity: 1;
                    transform: translateX(-50%) translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(toast);
    
    // 3秒后移除
    setTimeout(function() {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(-20px)';
        setTimeout(function() {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

// 防止 FOUC (Flash of Unstyled Content)
document.documentElement.style.visibility = 'hidden';
window.addEventListener('load', function() {
    document.documentElement.style.visibility = 'visible';
});
