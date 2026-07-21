/*
    本文件负责 iframe 嵌入检测、实例地址识别、
    主题消息同步、滚动动画、移动端菜单和 API 地址复制。
    通过 defer 加载，确保 HTML 结构解析完成后再初始化 DOM 交互。
*/

try {
            document.documentElement.classList.toggle("is-embedded", window.self !== window.top);
        } catch {
            document.documentElement.classList.add("is-embedded");
        }
    

(() => {
            /*
                DOM 引用集中管理：
                这个页面是单文件实现，不使用框架状态管理。
                所有交互都从这里拿到固定节点，避免重复查询 DOM。
            */
            const header = document.getElementById("site-header");
            const menuToggle = document.getElementById("menu-toggle");
            const mobileMenu = document.getElementById("mobile-menu");
            const linkStatus = document.getElementById("link-status");
            const endpointCode = document.getElementById("endpoint-code");
            const copyEndpoint = document.getElementById("copy-endpoint");
            const animeBackground = document.getElementById("anime-background");
            const navLinks = Array.from(document.querySelectorAll("[data-nav-link]"));
            const sections = Array.from(document.querySelectorAll("main section[id]"));
            const consoleLinks = Array.from(document.querySelectorAll(".js-console-link"));
            const contentConfig = window.WANAPI_CONTENT || {};
            const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            let linkStatusTimer;

            /* 背景接口失败时隐藏图片层，保留正常的纯色页面。 */
            animeBackground?.addEventListener("error", () => {
                document.documentElement.classList.add("background-fallback");
            });

            /*
                从配置对象读取嵌套字段：
                例如 data-content-key="hero.title" 会读取
                window.WANAPI_CONTENT.hero.title。
                找不到字段时返回 undefined，让 HTML 默认文字继续生效。
            */
            function getContentValue(path) {
                return String(path)
                    .split(".")
                    .reduce((current, key) => current?.[key], contentConfig);
            }

            /*
                批量应用文字配置：
                - 普通元素默认替换 textContent；
                - 配置了 data-content-attr 的元素替换指定属性；
                - 因此按钮里的 SVG 图标不会被文字配置删除。
            */
            function applyContentConfig() {
                document.querySelectorAll("[data-content-key]").forEach((element) => {
                    const value = getContentValue(element.dataset.contentKey);
                    if (value === undefined || value === null) {
                        return;
                    }

                    const attribute = element.dataset.contentAttr;
                    if (attribute) {
                        element.setAttribute(attribute, String(value));
                    } else {
                        element.textContent = String(value);
                    }
                });
            }

            /*
                获取外层实例地址：
                iframe 内部不能直接读取父页面 DOM，只能使用配置参数或 referrer。
                该地址只用于生成注册页、控制台和 /v1 API 地址。
            */
            function getInstanceOrigin() {
                const params = new URLSearchParams(window.location.search);
                const queryOrigin = params.get("instance") || params.get("newapi");
                const candidate = queryOrigin || document.referrer;

                if (!candidate) {
                    return null;
                }

                try {
                    const url = new URL(candidate, window.location.href);
                    if (!["http:", "https:"].includes(url.protocol)) {
                        return null;
                    }
                    return url.origin;
                } catch {
                    return null;
                }
            }

            /* 显示短暂的非阻塞提示，不使用 alert 避免打断用户操作。 */
            function showLinkStatus(message) {
                linkStatus.textContent = message;
                linkStatus.classList.add("is-visible");
                window.clearTimeout(linkStatusTimer);
                linkStatusTimer = window.setTimeout(() => {
                    linkStatus.classList.remove("is-visible");
                }, 3600);
            }

            /*
                同步所有实例跳转链接：
                直接打开 GitHub Pages 时使用锚点回退；
                嵌入实例后自动切换为外层站点的真实路径。
            */
            function syncNewApiLinks() {
                const origin = getInstanceOrigin();

                consoleLinks.forEach((link) => {
                    const path = link.dataset.path || "/";
                    if (origin) {
                        link.href = new URL(path, `${origin}/`).href;
                        link.target = "_top";
                        link.removeAttribute("aria-disabled");
                    } else {
                        link.href = "#console";
                        link.removeAttribute("target");
                        link.setAttribute("aria-disabled", "true");
                    }
                });

                endpointCode.textContent = origin ? `${origin}/v1` : "嵌入实例后自动显示 /v1";
            }

            /*
                主题同步：
                New API 外层页面会发送 themeMode。
                system 在这里按浅色处理，避免 iframe 内部和背景图对比过低。
            */
            function setTheme(mode) {
                const normalized = String(mode || "").toLowerCase();
                const theme = normalized === "dark" ? "dark" : "light";
                document.documentElement.dataset.theme = theme;
                document.querySelector('meta[name="theme-color"]').setAttribute(
                    "content",
                    theme === "dark" ? "#211923" : "#fbf8f4"
                );
            }

            /* 点击移动端导航后关闭展开菜单。 */
            function closeMobileMenu() {
                mobileMenu.classList.remove("is-open");
                menuToggle.setAttribute("aria-expanded", "false");
            }

            /*
                导航高亮：
                IntersectionObserver 根据当前可见 section 更新顶部导航的 active 状态。
            */
            function observeSections() {
                if (!("IntersectionObserver" in window)) {
                    return;
                }

                const observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (!entry.isIntersecting) {
                            return;
                        }

                        navLinks.forEach((link) => {
                            link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
                        });
                    });
                }, {
                    rootMargin: "-35% 0px -55% 0px",
                    threshold: 0
                });

                sections.forEach((section) => observer.observe(section));
            }

            /*
                滚动显现动画：
                元素进入视口后只执行一次，减少长页面持续计算。
            */
            function revealOnScroll() {
                const revealItems = document.querySelectorAll(".reveal");
                if (reducedMotion || !("IntersectionObserver" in window)) {
                    revealItems.forEach((item) => item.classList.add("is-visible"));
                    return;
                }

                const observer = new IntersectionObserver((entries, currentObserver) => {
                    entries.forEach((entry) => {
                        if (!entry.isIntersecting) {
                            return;
                        }
                        entry.target.classList.add("is-visible");
                        currentObserver.unobserve(entry.target);
                    });
                }, {
                    rootMargin: "0px 0px -8% 0px",
                    threshold: 0.08
                });

                revealItems.forEach((item) => observer.observe(item));
            }

            /* 移动端菜单开关。 */
            menuToggle.addEventListener("click", () => {
                const isOpen = mobileMenu.classList.toggle("is-open");
                menuToggle.setAttribute("aria-expanded", String(isOpen));
            });

            /* 移动端点击锚点后关闭菜单，桌面端不受影响。 */
            navLinks.forEach((link) => {
                link.addEventListener("click", closeMobileMenu);
            });

            /*
                控制台入口点击：
                有外层实例时允许 target=_top 跳转；
                直接预览时不跳出 GitHub Pages，而是提示用户嵌入方式。
            */
            consoleLinks.forEach((link) => {
                link.addEventListener("click", (event) => {
                    if (getInstanceOrigin()) {
                        return;
                    }

                    event.preventDefault();
                    showLinkStatus("请从 API 中转站首页 iframe 打开此页面，控制台入口会自动识别实例地址。");
                    document.getElementById("console").scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
                });
            });

            /* 复制当前实例的 /v1 地址，不复制固定的示例域名。 */
            copyEndpoint.addEventListener("click", async () => {
                const value = endpointCode.textContent;
                try {
                    await navigator.clipboard.writeText(value);
                    copyEndpoint.firstChild.textContent = "已复制 ";
                    window.setTimeout(() => {
                        copyEndpoint.firstChild.textContent = "复制地址 ";
                    }, 1800);
                } catch {
                    showLinkStatus("当前浏览器不允许自动复制，请手动选择地址。");
                }
            });

            /* 滚动时只切换导航阴影，避免重新计算布局。 */
            window.addEventListener("scroll", () => {
                header.classList.toggle("is-scrolled", window.scrollY > 16);
            }, { passive: true });

            /*
                iframe 消息入口：
                官方自定义首页机制会发送主题和语言消息。
                未知消息会被忽略，保证兼容不同外层实现。
            */
            window.addEventListener("message", (event) => {
                const message = event.data || {};
                if (message.themeMode) {
                    setTheme(message.themeMode);
                }

                if (message.lang) {
                    document.documentElement.lang = String(message.lang).toLowerCase().startsWith("zh") ? "zh-CN" : "en";
                }
            });

            /*
                初始化顺序：
                先写入年份，再同步外层链接，最后启动观察器。
                品牌名称固定在 index.html 中，不依赖外部页面消息。
            */
            document.getElementById("current-year").textContent = String(new Date().getFullYear());
            applyContentConfig();
            syncNewApiLinks();
            observeSections();
            revealOnScroll();
        })();
    
