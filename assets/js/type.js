
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
        `<span class="white">});</span>`
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
        `<span class="white">};</span>`
      ]
    };
  
    const tabs = document.querySelectorAll('.tab');
    const container = document.getElementById('codeBox');
    const tabKeys = Object.keys(codeSnippets);
    let currentTabIndex = 0;
    let intervalId;
  
    function clearContainer() {
      container.innerHTML = '';
    }
  
    function createWordSpan(text, className, parentEl, delay) {
      const span = document.createElement('span');
      span.textContent = text;
      span.className = 'word' + (className ? ` ${className}` : '');
      span.style.animationDelay = `${delay}ms`;
      parentEl.appendChild(span);
    }
  
    function typeCode(codeLines) {
      clearContainer();
      let delay = 0;
      const wordDelay = 70;
  
      codeLines.forEach(lineHTML => {
        const lineEl = document.createElement('div');
        lineEl.className = 'line';
  
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = lineHTML;
  
        tempDiv.childNodes.forEach(node => {
          const words = node.textContent.split(/(\s+)/);
          words.forEach(word => {
            if (word === '') return;
            createWordSpan(word, node.className || null, lineEl, delay);
            delay += wordDelay;
          });
        });
  
        container.appendChild(lineEl);
      });
    }
  
    function activateTab(index) {
      tabs.forEach((t, i) => {
        t.classList.toggle('active', i === index);
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
      tab.addEventListener('click', () => {
        clearInterval(intervalId);
        currentTabIndex = index;
        activateTab(index);
        startAutoSwitch(); // Restart timer after manual click
      });
    });
  
    // Initial load
    activateTab(currentTabIndex);
    startAutoSwitch();