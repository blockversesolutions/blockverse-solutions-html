const codeSnippets = {
  typescript: [
    `<span class="comment">// Type definition</span>`,
    `<span class="keyword">interface</span> <span class="type">User</span> {`,
    `  <span class="text-white">name</span>: <span class="type">string</span>;`,
    `  <span class="text-white">age</span>: <span class="type">number</span>;`,
    `  <span class="text-white">email</span>: <span class="type">string</span>;`,
    `  <span class="text-white">hello blockverse</span> <span class="white">solutions</span> : <span class="type">i am ready</span>;`,
    `}`,
    `<span class="comment">// Type definition</span>`,
    `<span class="keyword">interface</span> <span class="type">User</span> {`,
    `  <span class="text-white">name</span>: <span class="type">string</span>;`,
    `  <span class="text-white">age</span>: <span class="type">number</span>;`,
    `  <span class="text-white">email</span>: <span class="type">string</span>;`,
    `  <span class="text-white">hello blockverse</span> <span class="white">solutions</span> : <span class="type">i am ready</span>;`,
    `}`,
  ],
  express: [
    `<span class="comment">// Express server</span>`,
    `<span class="keyword">const</span> <span class="white">express</span> = <span class="func">require</span>(<span class="string">'express'</span>);`,
    `<span class="keyword">const</span> <span class="white"><span class="white">app</span></span> = <span class="func">express</span>();`,
    `app.<span class="func"><span class="white">get</span></span>(<span class="string">'/'</span>, <span class="white">(req, res) =></span> {`,
    `  res.<span class="func">send</span>(<span class="string">'Hello World!'</span>);`,
    `<span class="white">});</span>`,
  ],
  redux: [
    `<span class="comment">// Redux reducer</span>`,
    `<span class="keyword">const</span> <span class="white">counter = (state = 0, action) => {</span>`,
    `  <span class="keyword">switch</span> (action.type) {`,
    `    <span class="keyword">case</span> <span class="string">'INCREMENT'</span>:`,
    `      <span class="keyword">return</span> <span class="white">state + 1;</span>`,
    `    <span class="keyword">default</span>:`,
    `      <span class="keyword">return</span> <span class="white">state;</span>`,
    `  }`,
    `<span class="white">};</span>`,
  ],
  laravel: [
    `<span class="comment">// Laravel route example</span>`,
    `<span class="keyword">use</span> <span class="type">Illuminate\\Support\\Facades\\Route</span>;`,
    ``,
    `<span class="keyword">Route::</span><span class="func">get(</span><span class="string">'/hello'</span> <span class="keyword">,function() {</span>`,
    `  <span class="keyword">return</span> <span class="string">'Hello World';</span>`,
    `<span class="string">});</span>`,
  ],

  solidity: [
    `<span class="comment">// SolidJS Component</span>`,
    `<span class="keyword">import</span> <span class="white">{ createSignal }</span> <span class="keyword">from</span> <span class="string">"solid-js"</span>;`,
    `<span class="keyword">function</span> <span class="type">Counter</span>() <span class="white">{</span>`,
    `  <span class="keyword">const</span> <span class="white">[count, setCount]</span> = <span class="func">createSignal</span>(0);`,
    `  <span class="keyword">return</span> <span class="white">(&lt;button onClick={() => setCount(count() + 1)}&gt;</span>`,
    `  <span class="keyword"> Count: </span> <span class="white">{count()}</span>`,
    `  <span class="white">&lt;/button&gt;);</span>`,
    `<span class="white">}</span>`,
  ],
  nodejs: [
    `<span class="comment">// Basic Node.js HTTP Server</span>`,
    `<span class="keyword">const</span> <span class="white">http = </span><span class="func">require</span>(<span class="string">'http'</span>);`,
    `<span class="keyword">const</span> <span class="white">server =</span> <span class="string">http.</span><span class="func">createServer</span><span class="white">((req, res) => {</span>`,
    `  <span class="string">res.</span><span class="func">writeHead</span><span class="white">(200, { 'Content-Type': 'text/plain' });</span>`,
    `  <span class="string">res.</span><span class="func">end</span>(<span class="string">'Hello from Node.js!'</span>);`,
    `<span class="white">});</span>`,
    `<span class="func">server.</span><span class="func">listen</span><span class="white">(3000);</span>`,
  ],
};
const tabs = document.querySelectorAll(".tab");
const container = document.getElementById("codeBox");
const tabKeys = Object.keys(codeSnippets);
let currentTabIndex = 0;
let intervalId;

function clearContainer() {
  container.innerHTML = "";
}

function createWordSpan(text, className, parentEl, delay) {
  const span = document.createElement("span");
  span.textContent = text;
  span.className = "word" + (className ? ` ${className}` : "");
  span.style.animationDelay = `${delay}ms`;
  parentEl.appendChild(span);
}

function typeCode(codeLines) {
  clearContainer();
  let delay = 0;
  const wordDelay = 70;

  codeLines.forEach((lineHTML) => {
    const lineEl = document.createElement("div");
    lineEl.className = "line";

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = lineHTML;

    tempDiv.childNodes.forEach((node) => {
      const words = node.textContent.split(/(\s+)/);
      words.forEach((word) => {
        if (word === "") return;
        createWordSpan(word, node.className || null, lineEl, delay);
        delay += wordDelay;
      });
    });

    container.appendChild(lineEl);
  });
}

function activateTab(index) {
  tabs.forEach((t, i) => {
    t.classList.toggle("active", i === index);
  });

  const selectedKey = tabKeys[index];
  typeCode(codeSnippets[selectedKey]);
}

function startAutoSwitch() {
  intervalId = setInterval(() => {
    currentTabIndex = (currentTabIndex + 1) % tabs.length;
    activateTab(currentTabIndex);
  }, 7000); // Change tab every 4 seconds
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    clearInterval(intervalId);
    currentTabIndex = index;
    activateTab(index);
    startAutoSwitch(); // Restart timer after manual click
  });
});

// Initial load
activateTab(currentTabIndex);
startAutoSwitch();
