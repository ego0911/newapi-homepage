# 项目未来规划

## 悬浮小黑胶唱片 · 音乐播放器（待做）

右下角悬浮小唱片，点击播放/暂停背景音乐（`assets/bgm.mp3`），播放时唱片旋转。

- 状态：方案已确认，暂缓实现（2026-09-05）
- 依赖：需要用户提供 `assets/bgm.mp3` 音乐文件（可先传 GitHub 仓库再拉取）
- 参考：方案代码由用户提供，见下方备份

```html
<div id="music-player" class="music-disc-wrap" onclick="toggleBgm()" title="播放 / 暂停">
  <div class="music-disc" id="music-disc">
    <div class="disc-core"></div>
  </div>
  <audio id="bgm-audio" loop preload="none">
    <source src="assets/bgm.mp3" type="audio/mpeg">
  </audio>
</div>

<style>
.music-disc-wrap {
  position: fixed;
  right: 20px;
  bottom: 24px;
  width: 44px;
  height: 44px;
  cursor: pointer;
  z-index: 999;
}
.music-disc {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(circle, #2b2b2b 40%, #111 70%, #2b2b2b 100%);
  border: 2px solid rgba(255, 182, 193, 0.6);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}
.music-disc.playing {
  animation: spin 6s linear infinite;
}
.disc-core {
  width: 14px;
  height: 14px;
  background: #ffb6c1;
  border-radius: 50%;
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>

<script>
function toggleBgm() {
  const audio = document.getElementById('bgm-audio');
  const disc = document.getElementById('music-disc');
  if (audio.paused) {
    audio.play();
    disc.classList.add('playing');
  } else {
    audio.pause();
    disc.classList.remove('playing');
  }
}
</script>
```

实现时建议：
- `onclick` 内联写法改为 `script.js` 里的事件绑定，与现有代码风格一致
- 样式并入 `styles.css`，逻辑并入 `script.js`，模板片段只留在 `index.html`
- 尊重系统"减弱动态效果"设置：`prefers-reduced-motion` 下不旋转
