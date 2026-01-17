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
        'install.requirements.rust': 'Rust (最新稳定版)',
        'install.requirements.cargo': 'Cargo (随 Rust 一起安装)',
        'install.requirements.platforms': 'macOS / Linux / Windows',
        'install.quickstart': '快速开始',
        'install.quickstart.desc': '安装 Rust (如果还没有):',
        'install.code.clone': '克隆仓库',
        'install.code.build': '构建项目',
        'install.code.run': '运行',
        'install.code.after': '安装后，可在任何地方运行',
        'install.code.fork': 'Fork 仓库',
        'install.code.branch': '创建功能分支',
        'install.code.commit': '提交更改',
        'install.code.push': '推送分支',
        'install.code.pr': '创建 Pull Request',
        
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
        'code.copied': '已复制!',
        
        // Stats
        'stats.rust': 'Rust 100%',
        'stats.stars': '2+ Stars',
        'stats.license': 'MIT License',
        'stats.contributors': '2 Contributors',
        
        // Footer links
        'footer.github': 'GitHub',
        'footer.mit': 'MIT License'
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
        'install.requirements.rust': 'Rust (latest stable)',
        'install.requirements.cargo': 'Cargo (comes with Rust)',
        'install.requirements.platforms': 'macOS / Linux / Windows',
        'install.quickstart': 'Quick Start',
        'install.quickstart.desc': 'Install Rust (if not already installed):',
        'install.code.clone': 'Clone repository',
        'install.code.build': 'Build project',
        'install.code.run': 'Run',
        'install.code.after': 'After installation, run anywhere',
        'install.code.fork': 'Fork repository',
        'install.code.branch': 'Create feature branch',
        'install.code.commit': 'Commit changes',
        'install.code.push': 'Push branch',
        'install.code.pr': 'Create Pull Request',
        
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
        'code.copied': 'Copied!',
        
        // Stats
        'stats.rust': 'Rust 100%',
        'stats.stars': '2+ Stars',
        'stats.license': 'MIT License',
        'stats.contributors': '2 Contributors',
        
        // Footer links
        'footer.github': 'GitHub',
        'footer.mit': 'MIT License'
    },
    ja: {
        // Hero Section
        'hero.title': 'starfetch',
        'hero.subtitle': 'Rustで書かれた高速システム情報ツール',
        'badge.mit': '📜 MIT License',
        'badge.opensource': '🔓 オープンソース',
        'button.viewGitHub': 'GitHubで見る',
        'button.install': 'インストールガイド',
        
        // Features
        'features.title': 'starfetch --features',
        'feature.adaptive': '適応型 ASCII アート',
        'feature.adaptive.desc': '端末幅に応じて自動的に表示を調整',
        'feature.system': '包括的なシステム情報',
        'feature.system.desc': 'ホスト名、OS、カーネル、稼働時間、CPU、メモリ、パッケージを表示',
        'feature.hyperlink': 'スマートハイパーリンク',
        'feature.hyperlink.desc': 'モダンな端末でクリック可能な開発者リンク',
        'feature.colors': '美しいカラー',
        'feature.colors.desc': 'ANSI カラーサポートによるエレガントな端末出力',
        'feature.performance': '超高速',
        'feature.performance.desc': '最適なパフォーマンスのために Rust で記述',
        'feature.crossplatform': 'クロスプラットフォーム',
        'feature.crossplatform.desc': 'macOS、Linux、Windows で動作',
        
        // Installation
        'install.title': 'cargo install starfetch',
        'install.subtitle': 'クイックインストールと開始',
        'install.build': 'ソースからビルド',
        'install.global': 'グローバルにインストール',
        'install.requirements': '要件',
        'install.quickstart': 'クイックスタート',
        'install.quickstart.desc': 'Rustをインストール (まだインストールしていない場合):',
        
        // Open Source
        'opensource.title': 'echo "オープンソース精神"',
        'opensource.subtitle': 'Linux哲学に従い、完全にオープンソースで無料',
        'opensource.fully': '完全オープンソース',
        'opensource.fully.desc': 'MIT ライセンス - 自由に使用、変更、配布可能',
        'opensource.contribute': '貢献を歓迎',
        'opensource.contribute.desc': 'PR、Issue、提案を歓迎',
        'opensource.community': 'コミュニティ主導',
        'opensource.community.desc': 'コミュニティによってメンテナンスされ、コミュニティのためのもの',
        'opensource.geek': 'ギーク文化',
        'opensource.geek.desc': 'neofetch にインスパイアされ、CLI ツールの伝統を継承',
        'opensource.contribute.title': '貢献する',
        
        // Footer
        'footer.tagline': 'Rustで書かれた美しく高速なシステム情報ツール',
        'footer.authors': '著者',
        'footer.info': '情報',
        'footer.version': 'バージョン',
        'footer.inspired': 'インスパイア元',
        'footer.built': 'Rust で ❤️ とともに構築',
        'footer.company': '星落湖探人工智能应用软件（杭州）有限公司',
        'footer.company.short': '星落湖探AI（杭州）',
        'footer.copyright': 'オープンソースコミュニティが ❤️ で作成',
        
        // Terminal Display
        'terminal.title': 'StarFetch ⭐ - Terminal',
        
        // Code copy
        'code.copy': 'コピー',
        'code.copied': 'コピーしました!',
        
        // Stats
        'stats.rust': 'Rust 100%',
        'stats.stars': '2+ Stars',
        'stats.license': 'MIT License',
        'stats.contributors': '2 Contributors',
        
        // Footer links
        'footer.github': 'GitHub',
        'footer.mit': 'MIT License'
    },
    ko: {
        // Hero Section
        'hero.title': 'starfetch',
        'hero.subtitle': 'Rust로 작성된 빠른 시스템 정보 도구',
        'badge.mit': '📜 MIT License',
        'badge.opensource': '🔓 오픈소스',
        'button.viewGitHub': 'GitHub에서 보기',
        'button.install': '설치 가이드',
        
        // Features
        'features.title': 'starfetch --features',
        'feature.adaptive': '적응형 ASCII 아트',
        'feature.adaptive.desc': '터미널 너비에 따라 자동으로 표시 조정',
        'feature.system': '포괄적인 시스템 정보',
        'feature.system.desc': '호스트명, OS, 커널, 가동 시간, CPU, 메모리, 패키지 표시',
        'feature.hyperlink': '스마트 하이퍼링크',
        'feature.hyperlink.desc': '현대적 터미널에서 클릭 가능한 개발자 링크',
        'feature.colors': '아름다운 색상',
        'feature.colors.desc': '우아한 터미널 출력을 위한 ANSI 색상 지원',
        'feature.performance': '번개처럼 빠름',
        'feature.performance.desc': '최적 성능을 위해 Rust로 작성',
        'feature.crossplatform': '크로스 플랫폼',
        'feature.crossplatform.desc': 'macOS, Linux, Windows에서 작동',
        
        // Installation
        'install.title': 'cargo install starfetch',
        'install.subtitle': '빠른 설치 및 시작',
        'install.build': '소스에서 빌드',
        'install.global': '전역 설치',
        'install.requirements': '요구사항',
        'install.requirements.rust': 'Rust (최신 안정 버전)',
        'install.requirements.cargo': 'Cargo (Rust와 함께 설치됨)',
        'install.requirements.platforms': 'macOS / Linux / Windows',
        'install.quickstart': '빠른 시작',
        'install.quickstart.desc': 'Rust 설치 (아직 설치하지 않은 경우):',
        'install.code.clone': '# 저장소 클론',
        'install.code.build': '# 프로젝트 빌드',
        'install.code.run': '# 실행',
        'install.code.after': '# 설치 후 어디서나 실행 가능',
        'install.code.fork': '# 저장소 포크',
        'install.code.branch': '# 기능 브랜치 생성',
        'install.code.commit': '# 변경사항 커밋',
        'install.code.push': '# 브랜치 푸시',
        'install.code.pr': '# Pull Request 생성',
        
        // Open Source
        'opensource.title': 'echo "오픈소스 정신"',
        'opensource.subtitle': 'Linux 철학을 따르며 완전히 오픈소스이고 무료',
        'opensource.fully': '완전 오픈소스',
        'opensource.fully.desc': 'MIT 라이선스 - 자유롭게 사용, 수정 및 배포 가능',
        'opensource.contribute': '기여 환영',
        'opensource.contribute.desc': 'PR, Issue, 제안을 환영합니다',
        'opensource.community': '커뮤니티 주도',
        'opensource.community.desc': '커뮤니티가 유지 관리하며, 커뮤니티를 위해',
        'opensource.geek': '기크 문화',
        'opensource.geek.desc': 'neofetch에 영감을 받아 CLI 도구의 전통을 계승',
        'opensource.contribute.title': '기여하기',
        
        // Footer
        'footer.tagline': 'Rust로 작성된 아름답고 빠른 시스템 정보 도구',
        'footer.authors': '작성자',
        'footer.info': '정보',
        'footer.version': '버전',
        'footer.inspired': '영감을 받은',
        'footer.built': 'Rust로 ❤️와 함께 제작',
        'footer.company': '星落湖探人工智能应用软件（杭州）有限公司',
        'footer.company.short': '星落湖探AI（杭州）',
        'footer.copyright': '오픈소스 커뮤니티가 ❤️로 제작',
        
        // Terminal Display
        'terminal.title': 'StarFetch ⭐ - Terminal',
        
        // Code copy
        'code.copy': '복사',
        'code.copied': '복사되었습니다!',
        
        // Stats
        'stats.rust': 'Rust 100%',
        'stats.stars': '2+ Stars',
        'stats.license': 'MIT License',
        'stats.contributors': '2 Contributors',
        
        // Footer links
        'footer.github': 'GitHub',
        'footer.mit': 'MIT License'
    },
    fr: {
        // Hero Section
        'hero.title': 'starfetch',
        'hero.subtitle': 'Outil d\'information système rapide écrit en Rust',
        'badge.mit': '📜 MIT License',
        'badge.opensource': '🔓 Open Source',
        'button.viewGitHub': 'Voir sur GitHub',
        'button.install': 'Guide d\'installation',
        
        // Features
        'features.title': 'starfetch --features',
        'feature.adaptive': 'Art ASCII adaptatif',
        'feature.adaptive.desc': 'S\'adapte automatiquement à la largeur du terminal',
        'feature.system': 'Informations système complètes',
        'feature.system.desc': 'Affiche le nom d\'hôte, l\'OS, le noyau, le temps de fonctionnement, le CPU, la mémoire et les packages',
        'feature.hyperlink': 'Hyperliens intelligents',
        'feature.hyperlink.desc': 'Liens développeur cliquables dans les terminaux modernes',
        'feature.colors': 'Couleurs magnifiques',
        'feature.colors.desc': 'Support des couleurs ANSI pour une sortie élégante',
        'feature.performance': 'Ultra rapide',
        'feature.performance.desc': 'Écrit en Rust pour des performances optimales',
        'feature.crossplatform': 'Multi-plateforme',
        'feature.crossplatform.desc': 'Fonctionne sur macOS, Linux et Windows',
        
        // Installation
        'install.title': 'cargo install starfetch',
        'install.subtitle': 'Installation rapide et démarrage',
        'install.build': 'Compiler depuis les sources',
        'install.global': 'Installer globalement',
        'install.requirements': 'Exigences',
        'install.requirements.rust': 'Rust (dernière version stable)',
        'install.requirements.cargo': 'Cargo (inclus avec Rust)',
        'install.requirements.platforms': 'macOS / Linux / Windows',
        'install.quickstart': 'Démarrage rapide',
        'install.quickstart.desc': 'Installer Rust (si pas déjà installé):',
        'install.code.clone': '# Cloner le dépôt',
        'install.code.build': '# Construire le projet',
        'install.code.run': '# Exécuter',
        'install.code.after': '# Après installation, exécutable partout',
        'install.code.fork': '# Forker le dépôt',
        'install.code.branch': '# Créer une branche de fonctionnalité',
        'install.code.commit': '# Commiter les changements',
        'install.code.push': '# Pousser la branche',
        'install.code.pr': '# Créer une Pull Request',
        
        // Open Source
        'opensource.title': 'echo "Esprit Open Source"',
        'opensource.subtitle': 'Suivant la philosophie Linux, entièrement open source et gratuit',
        'opensource.fully': 'Entièrement Open Source',
        'opensource.fully.desc': 'Licence MIT - Libre d\'utilisation, modification et distribution',
        'opensource.contribute': 'Contributions bienvenues',
        'opensource.contribute.desc': 'PRs, issues et suggestions sont les bienvenues',
        'opensource.community': 'Dirigé par la communauté',
        'opensource.community.desc': 'Maintenu par la communauté, pour la communauté',
        'opensource.geek': 'Culture Geek',
        'opensource.geek.desc': 'Inspiré par neofetch, poursuivant la tradition des outils CLI',
        'opensource.contribute.title': 'Contribuer',
        
        // Footer
        'footer.tagline': 'Outil d\'information système rapide écrit en Rust',
        'footer.authors': 'Auteurs',
        'footer.info': 'Info',
        'footer.version': 'Version',
        'footer.inspired': 'Inspiré par',
        'footer.built': 'Construit avec ❤️ en Rust',
        'footer.company': 'Xingluotan AI Application Software (Hangzhou) Co., Ltd.',
        'footer.company.short': 'Xingluotan AI (Hangzhou)',
        'footer.copyright': 'Fait avec ❤️ par la communauté open source',
        
        // Terminal Display
        'terminal.title': 'StarFetch ⭐ - Terminal',
        
        // Code copy
        'code.copy': 'Copier',
        'code.copied': 'Copié!',
        
        // Stats
        'stats.rust': 'Rust 100%',
        'stats.stars': '2+ Stars',
        'stats.license': 'MIT License',
        'stats.contributors': '2 Contributors',
        
        // Footer links
        'footer.github': 'GitHub',
        'footer.mit': 'MIT License'
    },
    es: {
        // Hero Section
        'hero.title': 'starfetch',
        'hero.subtitle': 'Herramienta rápida de información del sistema escrita en Rust',
        'badge.mit': '📜 MIT License',
        'badge.opensource': '🔓 Código Abierto',
        'button.viewGitHub': 'Ver en GitHub',
        'button.install': 'Guía de Instalación',
        
        // Features
        'features.title': 'starfetch --features',
        'feature.adaptive': 'Arte ASCII Adaptativo',
        'feature.adaptive.desc': 'Se ajusta automáticamente según el ancho del terminal',
        'feature.system': 'Información Completa del Sistema',
        'feature.system.desc': 'Muestra hostname, OS, kernel, tiempo activo, CPU, memoria y paquetes',
        'feature.hyperlink': 'Hipervínculos Inteligentes',
        'feature.hyperlink.desc': 'Enlaces de desarrollador clicables en terminales modernos',
        'feature.colors': 'Colores Hermosos',
        'feature.colors.desc': 'Soporte de colores ANSI para salida elegante',
        'feature.performance': 'Ultra Rápido',
        'feature.performance.desc': 'Escrito en Rust para rendimiento óptimo',
        'feature.crossplatform': 'Multiplataforma',
        'feature.crossplatform.desc': 'Funciona en macOS, Linux y Windows',
        
        // Installation
        'install.title': 'cargo install starfetch',
        'install.subtitle': 'Instalación rápida y comienzo',
        'install.build': 'Compilar desde Fuentes',
        'install.global': 'Instalar Globalmente',
        'install.requirements': 'Requisitos',
        'install.requirements.rust': 'Rust (última versión estable)',
        'install.requirements.cargo': 'Cargo (incluido con Rust)',
        'install.requirements.platforms': 'macOS / Linux / Windows',
        'install.quickstart': 'Inicio Rápido',
        'install.quickstart.desc': 'Instalar Rust (si no está instalado):',
        'install.code.clone': '# Clonar repositorio',
        'install.code.build': '# Construir proyecto',
        'install.code.run': '# Ejecutar',
        'install.code.after': '# Después de la instalación, ejecutable en cualquier lugar',
        'install.code.fork': '# Hacer fork del repositorio',
        'install.code.branch': '# Crear rama de funcionalidad',
        'install.code.commit': '# Hacer commit de los cambios',
        'install.code.push': '# Hacer push de la rama',
        'install.code.pr': '# Crear Pull Request',
        
        // Open Source
        'opensource.title': 'echo "Espíritu Open Source"',
        'opensource.subtitle': 'Siguiendo la filosofía Linux, completamente open source y gratuito',
        'opensource.fully': 'Completamente Open Source',
        'opensource.fully.desc': 'Licencia MIT - Libre de usar, modificar y distribuir',
        'opensource.contribute': 'Contribuciones Bienvenidas',
        'opensource.contribute.desc': 'PRs, issues y sugerencias son bienvenidas',
        'opensource.community': 'Impulsado por la Comunidad',
        'opensource.community.desc': 'Mantenido por la comunidad, para la comunidad',
        'opensource.geek': 'Cultura Geek',
        'opensource.geek.desc': 'Inspirado en neofetch, continuando la tradición de herramientas CLI',
        'opensource.contribute.title': 'Contribuir',
        
        // Footer
        'footer.tagline': 'Herramienta rápida de información del sistema escrita en Rust',
        'footer.authors': 'Autores',
        'footer.info': 'Info',
        'footer.version': 'Versión',
        'footer.inspired': 'Inspirado por',
        'footer.built': 'Construido con ❤️ usando Rust',
        'footer.company': 'Xingluotan AI Application Software (Hangzhou) Co., Ltd.',
        'footer.company.short': 'Xingluotan AI (Hangzhou)',
        'footer.copyright': 'Hecho con ❤️ por la comunidad open source',
        
        // Terminal Display
        'terminal.title': 'StarFetch ⭐ - Terminal',
        
        // Code copy
        'code.copy': 'Copiar',
        'code.copied': '¡Copiado!',
        
        // Stats
        'stats.rust': 'Rust 100%',
        'stats.stars': '2+ Stars',
        'stats.license': 'MIT License',
        'stats.contributors': '2 Contributors',
        
        // Footer links
        'footer.github': 'GitHub',
        'footer.mit': 'MIT License'
    },
    de: {
        // Hero Section
        'hero.title': 'starfetch',
        'hero.subtitle': 'Schnelles Systeminformationswerkzeug in Rust geschrieben',
        'badge.mit': '📜 MIT License',
        'badge.opensource': '🔓 Open Source',
        'button.viewGitHub': 'Auf GitHub ansehen',
        'button.install': 'Installationsanleitung',
        
        // Features
        'features.title': 'starfetch --features',
        'feature.adaptive': 'Adaptive ASCII-Kunst',
        'feature.adaptive.desc': 'Passt sich automatisch an die Terminalbreite an',
        'feature.system': 'Umfassende Systeminformationen',
        'feature.system.desc': 'Zeigt Hostname, OS, Kernel, Uptime, CPU, Speicher und Pakete',
        'feature.hyperlink': 'Intelligente Hyperlinks',
        'feature.hyperlink.desc': 'Klickbare Entwickler-Links in modernen Terminals',
        'feature.colors': 'Schöne Farben',
        'feature.colors.desc': 'ANSI-Farbunterstützung für elegante Terminalausgabe',
        'feature.performance': 'Blitzschnell',
        'feature.performance.desc': 'In Rust geschrieben für optimale Leistung',
        'feature.crossplatform': 'Plattformübergreifend',
        'feature.crossplatform.desc': 'Funktioniert auf macOS, Linux und Windows',
        
        // Installation
        'install.title': 'cargo install starfetch',
        'install.subtitle': 'Schnelle Installation und Start',
        'install.build': 'Aus Quellen bauen',
        'install.global': 'Global installieren',
        'install.requirements': 'Anforderungen',
        'install.requirements.rust': 'Rust (neueste stabile Version)',
        'install.requirements.cargo': 'Cargo (kommt mit Rust)',
        'install.requirements.platforms': 'macOS / Linux / Windows',
        'install.quickstart': 'Schnellstart',
        'install.quickstart.desc': 'Rust installieren (falls noch nicht installiert):',
        'install.code.clone': '# Repository klonen',
        'install.code.build': '# Projekt bauen',
        'install.code.run': '# Ausführen',
        'install.code.after': '# Nach Installation überall ausführbar',
        'install.code.fork': '# Repository forken',
        'install.code.branch': '# Feature-Branch erstellen',
        'install.code.commit': '# Änderungen committen',
        'install.code.push': '# Branch pushen',
        'install.code.pr': '# Pull Request erstellen',
        
        // Open Source
        'opensource.title': 'echo "Open Source Geist"',
        'opensource.subtitle': 'Linux-Philosophie folgend, vollständig open source und kostenlos',
        'opensource.fully': 'Vollständig Open Source',
        'opensource.fully.desc': 'MIT-Lizenz - Frei zu verwenden, zu ändern und zu verteilen',
        'opensource.contribute': 'Beiträge Willkommen',
        'opensource.contribute.desc': 'PRs, Issues und Vorschläge sind willkommen',
        'opensource.community': 'Community-getrieben',
        'opensource.community.desc': 'Von der Community gewartet, für die Community',
        'opensource.geek': 'Geek-Kultur',
        'opensource.geek.desc': 'Inspiriert von neofetch, Tradition der CLI-Tools fortsetzend',
        'opensource.contribute.title': 'Beitragen',
        
        // Footer
        'footer.tagline': 'Schnelles Systeminformationswerkzeug in Rust geschrieben',
        'footer.authors': 'Autoren',
        'footer.info': 'Info',
        'footer.version': 'Version',
        'footer.inspired': 'Inspiriert von',
        'footer.built': 'Mit ❤️ in Rust gebaut',
        'footer.company': 'Xingluotan AI Application Software (Hangzhou) Co., Ltd.',
        'footer.company.short': 'Xingluotan AI (Hangzhou)',
        'footer.copyright': 'Mit ❤️ von der Open Source Community gemacht',
        
        // Terminal Display
        'terminal.title': 'StarFetch ⭐ - Terminal',
        
        // Code copy
        'code.copy': 'Kopieren',
        'code.copied': 'Kopiert!',
        
        // Stats
        'stats.rust': 'Rust 100%',
        'stats.stars': '2+ Stars',
        'stats.license': 'MIT License',
        'stats.contributors': '2 Contributors',
        
        // Footer links
        'footer.github': 'GitHub',
        'footer.mit': 'MIT License'
    }
};

// 多语言系统
const i18n = {
    currentLang: 'zh',
    
    // 支持的语言列表
    supportedLangs: ['zh', 'en', 'ja', 'ko', 'fr', 'es', 'de'],
    
    // 语言显示名称
    langNames: {
        'zh': '中文',
        'en': 'English',
        'ja': '日本語',
        'ko': '한국어',
        'fr': 'Français',
        'es': 'Español',
        'de': 'Deutsch'
    },
    
    init() {
        // 从 localStorage 获取保存的语言，或根据浏览器语言自动检测
        const savedLang = localStorage.getItem('starfetch-lang');
        const browserLang = navigator.language || navigator.userLanguage;
        
        // 检测浏览器语言
        let detectedLang = 'en';
        if (browserLang.startsWith('zh')) detectedLang = 'zh';
        else if (browserLang.startsWith('ja')) detectedLang = 'ja';
        else if (browserLang.startsWith('ko')) detectedLang = 'ko';
        else if (browserLang.startsWith('fr')) detectedLang = 'fr';
        else if (browserLang.startsWith('es')) detectedLang = 'es';
        else if (browserLang.startsWith('de')) detectedLang = 'de';
        
        this.currentLang = savedLang || detectedLang;
        this.applyLanguage(this.currentLang);
        
        // 更新语言切换按钮
        this.updateLangButton();
    },
    
    applyLanguage(lang) {
        if (!this.supportedLangs.includes(lang)) {
            lang = 'en'; // 默认英文
        }
        
        this.currentLang = lang;
        localStorage.setItem('starfetch-lang', lang);
        
        // 更新 HTML lang 属性
        const langMap = {
            'zh': 'zh-CN',
            'ja': 'ja-JP',
            'ko': 'ko-KR',
            'fr': 'fr-FR',
            'es': 'es-ES',
            'de': 'de-DE',
            'en': 'en-US'
        };
        document.documentElement.setAttribute('lang', langMap[lang] || 'en-US');
        
        // 更新所有带有 data-i18n 属性的元素
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        // 更新 meta description
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            const descriptions = {
                'zh': 'StarFetch - 用 Rust 编写的极速系统信息工具，受 neofetch 启发。展示优雅的 ASCII 艺术和智能终端适配。',
                'en': 'StarFetch - A beautiful and fast system information tool written in Rust, inspired by neofetch.',
                'ja': 'StarFetch - neofetch にインスパイアされた、Rust で書かれた美しく高速なシステム情報ツール。',
                'ko': 'StarFetch - neofetch에 영감을 받은 Rust로 작성된 아름답고 빠른 시스템 정보 도구.',
                'fr': 'StarFetch - Un outil d\'information système rapide écrit en Rust, inspiré par neofetch.',
                'es': 'StarFetch - Herramienta rápida de información del sistema escrita en Rust, inspirada en neofetch.',
                'de': 'StarFetch - Schnelles Systeminformationswerkzeug in Rust geschrieben, inspiriert von neofetch.'
            };
            metaDesc.content = descriptions[lang] || descriptions['en'];
        }
        
        // 更新 title
        const titles = {
            'zh': 'StarFetch ⭐ - 极速系统信息工具',
            'en': 'StarFetch ⭐ - Fast System Information Tool',
            'ja': 'StarFetch ⭐ - 高速システム情報ツール',
            'ko': 'StarFetch ⭐ - 빠른 시스템 정보 도구',
            'fr': 'StarFetch ⭐ - Outil d\'Information Système Rapide',
            'es': 'StarFetch ⭐ - Herramienta Rápida de Información del Sistema',
            'de': 'StarFetch ⭐ - Schnelles Systeminformationswerkzeug'
        };
        document.title = titles[lang] || titles['en'];
    },
    
    toggleLanguage() {
        // 循环切换语言
        const currentIndex = this.supportedLangs.indexOf(this.currentLang);
        const nextIndex = (currentIndex + 1) % this.supportedLangs.length;
        const newLang = this.supportedLangs[nextIndex];
        this.applyLanguage(newLang);
        this.updateLangButton();
    },
    
    updateLangButton() {
        // 更新当前语言文本
        const currentLangText = document.getElementById('currentLangText');
        if (currentLangText) {
            currentLangText.textContent = this.langNames[this.currentLang] || this.currentLang.toUpperCase();
        }
        
        // 更新选中状态
        document.querySelectorAll('.lang-option').forEach(option => {
            if (option.getAttribute('data-lang') === this.currentLang) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });
    },
    
    t(key) {
        return translations[this.currentLang]?.[key] || key;
    }
};

// 导出到全局
window.i18n = i18n;
