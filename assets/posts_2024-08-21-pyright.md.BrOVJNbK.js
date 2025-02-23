import{_ as t,c as n,o as e,j as i,ag as o,a as h,t as r}from"./chunks/framework.CLEca2LO.js";const y=JSON.parse('{"title":"Python virtual environments in Zed","description":"","frontmatter":{"title":"Python virtual environments in Zed","date":"2024-08-21T00:00:00.000Z","author":"kaangiray26","tags":["coding","python","zed","editor"]},"headers":[],"relativePath":"posts/2024-08-21-pyright.md","filePath":"posts/2024-08-21-pyright.md"}'),l={name:"posts/2024-08-21-pyright.md"},p={id:"frontmatter-title",tabindex:"-1"};function d(a,s,k,g,c,E){return e(),n("div",null,[i("h1",p,[h(r(a.$frontmatter.title)+" ",1),s[0]||(s[0]=i("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1))]),s[1]||(s[1]=o(`<p>📅 August 21, 2024</p><p>I&#39;ve been using Zed as my main editor for over a month now. The reason I switched from VSCode was that VSCode was too slow when I was working with multiple windows open. Switching back and forth between windows was creating a lag that was unbearable. I saw Zed as a lightweight and crazy fast alternative, and I wanted to give it a try. There were some problems however...</p><h2 id="python" tabindex="-1">Python <a class="header-anchor" href="#python" aria-label="Permalink to &quot;Python&quot;">​</a></h2><p>Working with virtual environments right out of the box was not possible. Because Zed uses Microsoft&#39;s <a href="https://github.com/microsoft/pyright" target="_blank" rel="noreferrer">Pyright</a> language server, we have to add configurations for it based on its <a href="https://microsoft.github.io/pyright/#/configuration" target="_blank" rel="noreferrer">documentation</a>. Usually, I name the virtual environment directory as <code>env</code>. So, keep that in mind when you&#39;re changing the settings for yourself. Here&#39;s what I did add in my <code>settings.json</code> file:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">...</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;lsp&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;pyright&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;settings&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;python&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                &quot;pythonPath&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;env/bin/python&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                &quot;venvPath&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">...</span></span></code></pre></div><p>Both <code>pythonPath</code> and <code>venvPath</code> were necessary in my case.</p><h2 id="extra-configurations" tabindex="-1">Extra configurations <a class="header-anchor" href="#extra-configurations" aria-label="Permalink to &quot;Extra configurations&quot;">​</a></h2><p>Besides setting options in the language server, we can directly add some extra configuration to Pyright using a <code>pyrightconfig.json</code> file in the root directory of your project. Here&#39;s an example of what I&#39;m using:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;reportUnusedImport&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;reportUnusedClass&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;reportUnusedFunction&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;reportUnusedVariable&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>I am using these settings to get warnings for unused things in my code. It&#39;s a good way to keep your code small and clean. If you&#39;re curious about other settings I&#39;m using, check out my <a href="https://github.com/kaangiray26/dotfiles/tree/main/zed" target="_blank" rel="noreferrer">dotfiles</a> for Zed. Thanks for reading!</p>`,10))])}const f=t(l,[["render",d]]);export{y as __pageData,f as default};
